# Common Expenses Tracker

Live: https://common-expenses-tracker.vercel.app

Vite + React + Tailwind. Nine client-side calculators, data stored in `localStorage`, no backend.

- **Split Expense** — split a bill among people, edit/remove entries, settle-up suggestions, select-all/clear-all participants, shareable link (round-trips state through the URL, no account needed)
- **Budget Tracker** — income/expense log with edit support, category totals shown as bars, monthly trend (entries carry a date now)
- **Recurring Bills** — subscriptions/bills with edit support, "due soon" badge (within 7 days), monthly total
- **Savings Goal** — required monthly saving to hit a target, with a progress bar
- **Debt Payoff Calculator** — snowball vs. avalanche payoff simulation, months to debt-free, total interest, side-by-side strategy comparison
- **Loan / EMI Calculator** — reducing-balance monthly payment, total interest, full amortization schedule
- **Net Worth Calculator** — itemized assets/liabilities, saved snapshots over time
- **Tip Calculator** — tip amount, total, and per-person split for any group size
- **Dashboard** — one overview pulling from all of the above, plus JSON backup/restore for all tracked data

Other features:
- Installable PWA + offline support (hand-rolled service worker, no build plugin)
- Dark/light theme toggle (persisted)
- Currency selector: USD, INR, AUD, EUR (persisted, applies everywhere)
- CSV export + clear-all per calculator
- Search/filter on list-heavy pages
- Mobile-friendly nav (hamburger menu below `sm` breakpoint)

## Dev

```
npm install
npm run dev
```

## Deploy to Vercel

```
npm i -g vercel   # if not installed
vercel login
vercel --prod
```

Or import this repo at vercel.com/new — `vercel.json` already handles SPA routing, no config needed.
