// Category metadata for hub pages (src/pages/hubs/CategoryHub.jsx). Each
// category's hub lists its guides (guides.js), posts (posts.js), and
// alternative pages (alternatives.js) filtered by this `key`.
export const CATEGORIES = [
  {
    key: 'split',
    title: 'Splitting Expenses',
    route: '/guides/split',
    toolRoute: '/split',
    toolLabel: 'Try the free split expense calculator',
    description: 'Guides, comparisons, and tools for splitting bills, rent, trips, and shared costs fairly among any group.',
    pillarRoute: '/how-to-split-expenses-fairly',
    pillarTitle: 'How to split shared expenses fairly (start here)',
  },
  {
    key: 'budget',
    title: 'Budgeting',
    route: '/guides/budget',
    toolRoute: '/budget',
    toolLabel: 'Try the free budget tracker',
    description: 'Guides and comparisons for building a budget that works, whether income is steady or irregular.',
    pillarRoute: '/how-to-build-a-budget-that-works',
    pillarTitle: 'How to build a budget that actually works (start here)',
  },
  {
    key: 'bills',
    title: 'Recurring Bills & Subscriptions',
    route: '/guides/bills',
    toolRoute: '/bills',
    toolLabel: 'Try the free recurring bills tracker',
    description: 'Guides for tracking subscriptions, auditing recurring costs, and negotiating bills down.',
  },
  {
    key: 'loans',
    title: 'Loans & EMI',
    route: '/guides/loans',
    toolRoute: '/loan-calculator',
    toolLabel: 'Try the free loan / EMI calculator',
    description: 'How loan interest actually works, and a calculator for your real monthly payment and full amortization schedule.',
  },
  {
    key: 'savings',
    title: 'Savings Goals',
    route: '/guides/savings',
    toolRoute: '/savings',
    toolLabel: 'Try the free savings goal calculator',
    description: 'Guides for setting a savings target and figuring out exactly how much to set aside each month.',
  },
]
