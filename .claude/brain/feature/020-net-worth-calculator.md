---
routes: /net-worth, /how-to-calculate-net-worth, /blog/net-worth-vs-income
file: src/pages/NetWorth.jsx, src/lib/netWorth.js
category: feature
---

8th tool: personal net worth calculator (itemized assets/liabilities,
`computeNetWorth` in `src/lib/netWorth.js` — trivial sum/subtract, no test
file, YAGNI applies to tests too for logic this simple) plus saved
snapshots over time (`networth.history`, one entry per calendar day,
re-saving the same day overwrites rather than duplicates) rendered as a
simple bar-per-day history, matching the existing no-chart-library bar
pattern used elsewhere in the repo (e.g. `BudgetTracker.jsx`'s category
breakdown).

Keyword research (`net worth calculator app`, `how to calculate net worth
of a person/individual/salaried person`) showed real personal-finance
demand clearly separate from business/accounting demand ("of a company",
"from balance sheet", "partnership firm") — the guide
(`NetWorthGuide.jsx`, `/how-to-calculate-net-worth`) explicitly scopes
itself to personal net worth up front for exactly this reason, and doesn't
touch company/balance-sheet calculation at all.

Filed under the existing `savings` category (no new category needed,
unlike Loan/EMI) — net worth tracking is adjacent to savings-goal tracking
conceptually, and `savings` already has a hub.

Blog post (`NetWorthVsIncome.jsx`, `/blog/net-worth-vs-income`) is
deliberately conceptual, not benchmark-based — no "net worth by age"
piece was written, since there's no real source for defensible
age-based benchmark numbers in this session and inventing them would
violate the no-fabricated-statistics rule. The worked example is two
illustrative people, explicitly labeled as such.

Persisted keys: `networth.assets`, `networth.liabilities`,
`networth.history` — added to `backup.js`'s `KEYS`. Added to the
Dashboard (unlike Loan/EMI) since net worth is genuinely tracked state
over time, not a one-shot calculation.
