# Common Expenses Tracker

Vite + React + Tailwind. Four client-side calculators, data stored in `localStorage`, no backend.

- Split Expense — split a bill among people, settle-up suggestions
- Budget Tracker — income/expense log with category totals
- Recurring Bills — subscriptions/bills, monthly total, upcoming due dates
- Savings Goal — required monthly saving to hit a target

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
