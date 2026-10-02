// Single source of truth for blog post metadata — used by BlogIndex to list
// posts and by each post to fill its own SEO/JSON-LD without duplicating strings.
//
// `title` is the on-page H1/headline (can be long, readable). `seoTitle` is
// what goes in <title>/og:title/twitter:title — kept short so it doesn't
// truncate in search results once the site suffix is appended.
// `image` is the filename in public/blog-images/ (omitted if none).
export const POSTS = [
  {
    slug: 'audit-your-recurring-bills',
    title: 'Your subscriptions are quietly eating your budget — here\'s how to audit them',
    seoTitle: 'How to Audit Your Recurring Bills',
    description:
      'A step-by-step way to find and cut subscriptions you forgot you had, and keep new ones from creeping back in.',
    date: '2026-01-15',
    category: 'bills',
    image: 'audit-your-recurring-bills.jpg',
  },
  {
    slug: 'splitting-expenses-on-a-group-trip',
    title: 'Splitting expenses on a group trip without the awkward math at the end',
    seoTitle: 'Splitting Group Trip Expenses',
    description:
      'A method for tracking shared trip costs as they happen, so settling up at the end takes one look, not a group chat argument.',
    date: '2026-02-03',
    category: 'split',
    image: 'splitting-expenses-on-a-group-trip.jpg',
  },
  {
    slug: 'how-big-should-your-emergency-fund-be',
    title: 'How many months of expenses should your emergency fund actually cover?',
    seoTitle: 'Sizing Your Emergency Fund',
    description:
      'Why "3 to 6 months" is a starting point, not a rule, and how to size an emergency fund to your actual job and expense stability.',
    date: '2026-02-20',
    category: 'savings',
    image: 'how-big-should-your-emergency-fund-be.jpg',
  },
  {
    slug: 'splitting-rent-different-room-sizes',
    title: 'How to split rent fairly when bedrooms are different sizes',
    seoTitle: 'Splitting Rent by Room Size',
    description:
      "A method for splitting rent proportionally by room size and amenities, instead of splitting a shared apartment's rent evenly when it isn't fair.",
    date: '2026-03-05',
    category: 'split',
    image: 'splitting-rent-different-room-sizes.jpg',
  },
  {
    slug: 'tracking-shared-utility-bills',
    title: 'Tracking shared utility bills without a monthly argument',
    seoTitle: 'Tracking Shared Utility Bills',
    description:
      'Why utility bills cause more roommate friction than rent, and a simple system for splitting and tracking them as they arrive.',
    date: '2026-03-12',
    category: 'split',
    image: 'tracking-shared-utility-bills.jpg',
  },
  {
    slug: 'cash-envelope-vs-app-budgeting',
    title: 'Cash envelope method vs. app-based budgeting: which actually works?',
    seoTitle: 'Cash Envelope vs. App Budgeting',
    description:
      'A comparison of the cash envelope system and digital budget tracking, and who each one actually fits.',
    date: '2026-03-19',
    category: 'budget',
    image: 'cash-envelope-vs-app-budgeting.jpg',
  },
  {
    slug: 'zero-based-budgeting-explained',
    title: 'Zero-based budgeting explained: give every dollar a job',
    seoTitle: 'Zero-Based Budgeting Explained',
    description:
      'How zero-based budgeting works, why it forces better spending decisions than a percentage rule, and how to start this month.',
    date: '2026-03-26',
    category: 'budget',
  },
  {
    slug: 'how-to-negotiate-lower-bills',
    title: 'How to negotiate lower bills (internet, phone, insurance) — a script that works',
    seoTitle: 'How to Negotiate Lower Bills',
    description:
      'A step-by-step call script and timing strategy for negotiating recurring bills down, without switching providers.',
    date: '2026-04-02',
    category: 'bills',
    image: 'how-to-negotiate-lower-bills.jpg',
  },
  {
    slug: 'debt-snowball-vs-avalanche',
    title: 'Debt snowball vs. debt avalanche: which pays off debt faster?',
    seoTitle: 'Debt Snowball vs. Avalanche',
    description:
      "The math behind both debt payoff methods, why the mathematically optimal one isn't always the one that works, and how to pick between them.",
    date: '2026-04-09',
    category: 'budget',
    image: 'debt-snowball-vs-avalanche.jpeg',
  },
  {
    slug: 'saving-for-a-vacation',
    title: 'How to save for a vacation without putting it on a credit card',
    seoTitle: 'How to Save for a Vacation',
    description:
      'A month-by-month savings plan for a trip, including how to size your target and avoid the last-minute scramble.',
    date: '2026-04-16',
    category: 'savings',
    image: 'saving-for-a-vacation.jpg',
  },
  {
    slug: 'splitting-costs-for-a-shared-car',
    title: 'Splitting costs for a shared or carpooled car, fairly',
    seoTitle: 'Splitting Costs for a Shared Car',
    description:
      'How to split gas, insurance, and maintenance for a car used by multiple people, based on usage instead of a flat split.',
    date: '2026-04-23',
    category: 'split',
    image: 'splitting-costs-for-a-shared-car.jpg',
  },
  {
    slug: 'budgeting-with-irregular-income',
    title: 'How to budget when your income changes every month',
    seoTitle: 'Budgeting with Irregular Income',
    description:
      'A budgeting approach for freelancers and commission-based earners built around a baseline income instead of an average.',
    date: '2026-04-30',
    category: 'budget',
    image: 'budgeting-with-irregular-income.jpg',
  },
  {
    slug: 'tracking-expenses-as-a-couple',
    title: 'Tracking shared expenses as a couple without merging every account',
    seoTitle: 'Tracking Expenses as a Couple',
    description:
      'A system for splitting and tracking shared costs as a couple while keeping separate accounts, including how to handle uneven incomes.',
    date: '2026-05-07',
    category: 'split',
    image: 'tracking-expenses-as-a-couple.jpg',
  },
  {
    slug: 'free-trials-that-convert-to-paid',
    title: 'Free trials that convert to paid: how to stop getting charged without noticing',
    seoTitle: 'Stop Forgotten Free Trial Charges',
    description:
      'Why free-trial-to-paid conversions are the most common source of forgotten subscriptions, and a simple habit that catches them before the charge hits.',
    date: '2026-05-14',
    category: 'bills',
  },
  {
    slug: 'recurring-bill-tracker-vs-spreadsheet',
    title: 'Recurring bill tracker vs. spreadsheet: when a spreadsheet is still the better tool',
    seoTitle: 'Bill Tracker vs. Spreadsheet',
    description:
      'An honest comparison of tracking recurring bills in a spreadsheet versus a dedicated tracker, and which one actually fits your situation.',
    date: '2026-05-21',
    category: 'bills',
    image: 'recurring-bill-tracker-vs-spreadsheet.jpg',
  },
  {
    slug: 'automate-your-savings',
    title: "How to automate your savings so you don't have to think about it",
    seoTitle: 'How to Automate Your Savings',
    description:
      "A step-by-step approach to automating transfers toward a savings goal, so hitting the target doesn't depend on remembering to do it manually.",
    date: '2026-05-28',
    category: 'savings',
    image: 'automate-your-savings.jpg',
  },
  {
    slug: 'short-term-vs-long-term-savings-goals',
    title: 'Short-term vs. long-term savings goals: should you keep them separate?',
    seoTitle: 'Short- vs. Long-Term Savings Goals',
    description:
      'Why mixing a vacation fund with a house down payment in one pool causes problems, and how to structure separate goals without overcomplicating things.',
    date: '2026-06-04',
    category: 'savings',
    image: 'short-term-vs-long-term-savings-goals.jpg',
  },
  {
    slug: 'how-to-budget-money-for-the-first-time',
    title: "How to budget money for the first time: a beginner's framework",
    seoTitle: 'Budgeting for the First Time',
    description:
      "A simple starting framework for anyone budgeting for the first time — first paycheck, first apartment, or just tired of not knowing where money goes.",
    date: '2026-06-11',
    category: 'budget',
    image: 'how-to-budget-money-for-the-first-time.png',
  },
  {
    slug: 'splitting-bills-based-on-income',
    title: 'Splitting bills when someone earns a lot more than everyone else',
    seoTitle: 'Splitting Bills Based on Income',
    description:
      'How to split shared expenses proportionally to income instead of splitting everything evenly, and how to bring it up without it being awkward.',
    date: '2026-06-18',
    category: 'split',
    image: 'splitting-bills-based-on-income.jpg',
  },
]
