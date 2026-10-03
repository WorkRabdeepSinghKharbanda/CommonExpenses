---
routes: /split (adds ?s= query param handling, no new route)
file: src/pages/SplitExpense.jsx, src/lib/shareLink.js
category: feature
---

Split Expense gets a "Share this split" button: encodes `{people,
expenses}` into a URL-safe string (`src/lib/shareLink.js` —
`JSON.stringify` → `encodeURIComponent` → `btoa` → base64url substitution,
reversed on decode) appended as `/split?s=<encoded>`, copied to the
clipboard (`navigator.clipboard.writeText`, falling back to
`window.prompt` if the Clipboard API is unavailable — insecure context,
permissions, etc.).

No backend, no accounts — the whole shared state round-trips through the
URL itself. Opening a shared link decodes it into a `pendingShare` banner
("Import / Dismiss") rather than silently overwriting whatever's already
in that browser's `split.people`/`split.expenses`. Accepting replaces
(doesn't merge) — simplest correct behavior, no attempt to reconcile two
independent split histories. The `?s=` param is stripped from the URL
right after decoding (`setSearchParams({}, {replace: true})`) so refreshing
or re-sharing the (now-plain) URL doesn't re-trigger the same prompt.

`decodeSplitState` returns `null` on literally any malformed input
(invalid base64, invalid JSON, wrong shape) rather than throwing — treated
identically to "no shared link at all."

`decodeSplitState` validates deeply, not just the outer `{people,
expenses}` shape — this is an untrusted-input boundary (anyone can
hand-craft a `?s=` value, not just `encodeSplitState`). Each person must be
a string; each expense must have a string `description`, finite-number
`amount`, string `payer` that's actually in the people list, and a
non-empty `participants` array where every entry is also in the people
list. A shape-valid-but-logically-bogus payload (unknown payer, empty
participants) is rejected here rather than reaching `computeSettlements`
or the expense-list render, which assume valid data and would otherwise
crash on it. Covered in `shareLink.test.mjs`.

Importing is a destructive, un-undoable replace of the browser's existing
split data — `acceptSharedSplit` shows a native `confirm()` only when
there's existing data to lose (skipped if the browser's split tool is
already empty), and the banner text bolds "replaces" with an explicit
"no undo" note.

`src/lib/csv.js`'s CSV export also got a formula-injection guard
(`neutralizeFormula`) prefixing any cell value starting with `=`/`+`/`-`/`@`
with a `'` — pre-existing gap (a user could always type a formula-looking
description), but this feature changes the threat model since a shared
link can now deliver that value without the exporting user having typed
it themselves.

Known limitation, not a bug: this round-trips the full expense list
through the URL with no compression, so a split with many expenses
produces a long (but still URL-safe) link. Tested at 599 chars for a
2-expense/3-person example — fine for the realistic case (a roommate
group or trip), would get unwieldy for a split with dozens of logged
expenses. Not worth adding a compression library for this app's actual
usage pattern.
