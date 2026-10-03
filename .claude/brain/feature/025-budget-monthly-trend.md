---
routes: /budget (no new route, existing tool extended)
file: src/pages/BudgetTracker.jsx, src/lib/budgetTrend.js
category: feature
---

Budget entries gained a `date` field (`<input type="date">`, defaults to
today, editable — not auto-stamped and immutable), enabling a "Monthly
trend" card: net (income − expense) per calendar month, rendered with the
same no-chart-library bar pattern already used for the category breakdown
on this page.

Backward compatible: entries logged before this shipped have no `date`
field. They still count in every existing total (income/expense/balance,
category breakdown) — none of that reads `date`. They're simply excluded
from the trend grouping (`groupByMonth` in `src/lib/budgetTrend.js`
filters to `e.date` truthy first), since there's no month to place them
in. Editing an old dateless entry backfills `date` to today via
`startEdit`'s `entry.date || today()` fallback.

`groupByMonth` extracted to a lib file with `budgetTrend.test.mjs` (unlike
the pre-existing inline `byCategory` reduce on the same page, which has no
test) — this one has date-slicing and sign-based accumulation worth
protecting, matching the project's pattern from `debtPayoff.js`/
`loanMath.js`/`shareLink.js` of testing logic with real branching, not
trivial arithmetic.

CSV export gained a `date` column (empty string for pre-existing dateless
entries, not `undefined` or `null`).

Known, non-blocking quirk: the add-entry form's initial `date` is `today()`
evaluated eagerly in `useState(...)` (not a lazy initializer), and `/budget`
is prerendered — so the date baked into the static HTML's form is whatever
"today" was at build time, not the real visitor's today. React silently
reconciles this to the correct client-side value on hydration (no visible
bug, mismatch warnings are dev-only), but this is the first place in the
codebase a `new Date()` call gets frozen into prerendered output rather
than computed at render/event time (compare `NetWorth.jsx`, `bills.js`).
Not worth fixing for a form default that's immediately editable anyway —
noted here so a future similar case is handled deliberately, not by
accident.
