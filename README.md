# Common Expenses Tracker

Live: https://common-expenses-tracker.vercel.app

Vite + React + Tailwind. Four client-side calculators, data stored in `localStorage`, no backend.

- **Split Expense** — split a bill among people, edit/remove entries, settle-up suggestions, select-all/clear-all participants
- **Budget Tracker** — income/expense log with edit support, category totals shown as bars
- **Recurring Bills** — subscriptions/bills with edit support, "due soon" badge (within 7 days), monthly total
- **Savings Goal** — required monthly saving to hit a target, with a progress bar

Other features:
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
