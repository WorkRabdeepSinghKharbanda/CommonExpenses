---
routes: /loan-calculator, /guides/loans, /how-emi-is-calculated, /blog/reducing-balance-vs-flat-rate-interest
file: src/pages/LoanCalculator.jsx, src/lib/loanMath.js
category: feature
---

7th tool: loan/EMI calculator using the standard reducing-balance
(amortizing) method — `src/lib/loanMath.js`'s `computeEMI` and
`amortizationSchedule` (unit-checked in `loanMath.test.mjs` against a
hand-verified reference EMI value). Deliberately generic: no bank names, no
jurisdiction-specific products. Keyword research (`emi calculator`,
`loan calculator reducing`, `personal loan calculator`) showed the bulk of
real demand is bank-specific (SBI/HDFC/ICICI/Axis) — that's demand this site
can't ethically serve (false-affiliation risk), so this targets the generic,
method-explained slice of that demand instead.

New category `loans` (`src/content/categories.js`) since nothing existing
fit — gets its own hub at `/guides/loans` automatically via the
`CATEGORIES.map(...)` pattern in `routes.jsx`, no extra wiring needed beyond
the categories.js entry itself.

New guide (`EMIGuide.jsx`, `/how-emi-is-calculated`) and blog post
(`ReducingBalanceVsFlatRate.jsx`, `/blog/reducing-balance-vs-flat-rate-interest`)
explaining the reducing-balance formula and why it differs from flat-rate
interest — the actual conceptual gap behind the "loan calculator reducing"
search term. No invented statistics; the worked example in the blog post is
explicitly labeled illustrative.

Persisted key: `loan.form` — added to `backup.js`'s `KEYS`. Not added to the
Dashboard (unlike Debt Payoff) since this is a one-shot calculator, not
ongoing tracked state — nothing meaningful to summarize there.

Also fixed several stale "four calculators" references found while updating
the homepage for the 7-tool count: `Landing.jsx`'s hero copy, `Dashboard.jsx`'s
empty-state text and SEO description, and `index.html`'s title/description/
keywords/OG/Twitter/JSON-LD (all previously said "split bills, budget,
recurring bills, savings goals" with no mention of debt or loans).
