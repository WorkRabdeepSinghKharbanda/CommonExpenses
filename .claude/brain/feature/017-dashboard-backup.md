---
routes: /dashboard
file: src/pages/Dashboard.jsx, src/lib/backup.js, src/lib/splitMath.js, src/lib/bills.js
category: feature
---

5th tool: a read-only overview pulling from all 4 calculators' localStorage
keys (`split.people`/`split.expenses`, `budget.entries`, `bills.list`,
`savings.form`) via the existing `useLocalState` hook — budget balance, next
due bill + monthly total, savings progress %, and group split status. Each
card links to its source tool.

The split-balance card shows **total unsettled in the group**, not a
personal "you owe / you're owed" figure — there's no "current user" concept
in the split-expense data model (`people` are freeform names, not accounts),
and `computeSettlements`'s `net` object always sums to ~0, so a naive
"amount owed to you" vs "amount you owe" split is mathematically guaranteed
to show the same number on both sides. Don't reintroduce that framing
without first adding a real "which name is me" concept to `SplitExpense.jsx`.

Also added backup/restore (`src/lib/backup.js`): `exportAllData()` downloads
a single JSON file covering all known localStorage keys (see `KEYS` in that
file — add a new key there if a tool gains new persisted state);
`importAllData(file)` restores them and the caller reloads the page, since
`useLocalState` only reads localStorage once (its `useState` initializer),
so already-mounted tool components can't otherwise pick up freshly-imported
values.

`computeSettlements` moved from `SplitExpense.jsx` to `src/lib/splitMath.js`,
and `nextDueDate`/`FREQUENCIES` moved from `RecurringBills.jsx` to
`src/lib/bills.js`, both so Dashboard could reuse the same logic instead of
duplicating it — import from the shared lib, don't redefine either in a new
file.
