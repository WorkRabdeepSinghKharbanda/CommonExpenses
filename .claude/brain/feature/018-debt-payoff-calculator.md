---
routes: /debt-payoff
file: src/pages/DebtPayoff.jsx, src/lib/debtPayoff.js
category: feature
---

6th tool: full snowball/avalanche debt payoff calculator, not a toy. Real
month-by-month amortization simulation in `src/lib/debtPayoff.js`
(`simulatePayoff(debts, extraMonthly, strategy)`) — accrues interest monthly,
pays minimums, routes extra payment to the targeted debt (smallest balance
for snowball, highest APR for avalanche), caps at 600 months and flags
`neverPaidOff` if minimums don't cover accruing interest (a common case
worth surfacing, not silently computing nonsense). Always computes both
strategies so the UI can show the real interest-saved comparison, not just
whichever one is selected.

Keyword-grounded (see `.claude/brain/seo/keywords.md`-style research, not
repeated there yet — `debt payoff calculator`, `debt snowball calculator`,
`...with extra payments` all had real Google Autocomplete demand).

Fixed two pre-existing CTA bugs while wiring this in:
`src/pages/blog/DebtSnowballVsAvalanche.jsx`'s CTA linked to `/savings`
(copy-paste leftover, unrelated to the post's topic) — now links here.
`src/pages/blog/SharedUtilityBills.jsx`'s CTA linked to `/budget` despite
being tagged `category: 'split'` in `posts.js` — now links to `/split`.
Also upgraded (not a bug fix) `src/pages/guides/DebtPayoffGuide.jsx`'s CTA
from the generic `/budget` to this purpose-built tool.

Persisted keys: `debtpayoff.debts`, `debtpayoff.settings` — added to
`src/lib/backup.js`'s `KEYS` and to the Dashboard's data-presence check.
