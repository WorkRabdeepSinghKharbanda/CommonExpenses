// Factual, nominative comparisons only — no invented stats, no disparagement.
// Every claim here must be publicly verifiable at the time it was written.
export const ALTERNATIVES = [
  {
    slug: 'splitwise-alternative',
    name: 'Splitwise',
    category: 'split',
    searchedBecause:
      'People search "Splitwise alternative" for a few recurring reasons: wanting to avoid creating an account and connecting a bank or email, wanting something that works without installing an app, or wanting to skip the ads and upsells toward Splitwise Pro.',
    rows: [
      { label: 'Account required', us: 'No — nothing to sign up for', them: 'Yes, to sync across devices' },
      { label: 'Data storage', us: "Browser localStorage only, never leaves your device", them: "Synced to Splitwise's servers" },
      { label: 'Ads', us: 'None', them: 'Shown on the free tier' },
      { label: 'Multi-device sync', us: 'No (single-browser only)', them: 'Yes' },
      { label: 'Receipt scanning / currency conversion', us: 'No', them: 'Splitwise Pro (paid) feature' },
      { label: 'Cost', us: 'Free', them: 'Free tier + paid Pro tier' },
    ],
    whenTheyAreBetter: [
      'You need the same group visible on multiple phones/devices for several people in real time.',
      'You want a native mobile app with push notifications for new expenses.',
      'You want built-in receipt photo scanning or multi-currency conversion.',
    ],
    howToSwitch: [
      'Add everyone in the group as a person in the split calculator.',
      'Re-enter any still-open (unsettled) expenses — there is no import, since nothing is stored on a server to export from.',
      'Bookmark the page; since there is no account, the same browser is what "remembers" the group.',
    ],
    toolRoute: '/split',
    toolLabel: 'Try the free split expense calculator',
    faqs: [
      {
        q: 'Is this a direct replacement for Splitwise?',
        a: "Only if what you need is the core splitting/settle-up math without an account. It doesn't sync across devices, doesn't scan receipts, and doesn't convert currencies — if you need any of those, Splitwise (including its paid Pro tier) is the better fit.",
      },
      {
        q: 'Can multiple people use the same group from different phones?',
        a: 'No. Since there is no account or server sync, the group only exists in the browser that created it. For a group that needs to be edited by several people from their own devices, Splitwise is built for that and this tool is not.',
      },
      {
        q: 'Does switching lose my Splitwise history?',
        a: "Yes — there is no import tool, since this calculator has no server to pull data from. The practical approach is to only move once a group's balances are settled to zero, and start fresh here for new expenses.",
      },
    ],
  },
  {
    slug: 'tricount-alternative',
    name: 'Tricount',
    category: 'split',
    searchedBecause:
      'Tricount is already free and account-light (you can create a "tricount" without signing up), so people searching for an alternative are usually after one specific thing: not installing an app, or wanting data to never touch a third-party server at all.',
    rows: [
      { label: 'App install required', us: 'No — works in any browser', them: 'Best experience is via their app' },
      { label: 'Data storage', us: 'Browser localStorage only', them: "Synced to Tricount's (Rakuten) servers" },
      { label: 'Multi-device sync', us: 'No', them: 'Yes' },
      { label: 'Cost', us: 'Free', them: 'Free' },
      { label: 'Currencies', us: 'USD/INR/AUD/EUR built in', them: 'Wider currency list' },
    ],
    whenTheyAreBetter: [
      'Several people need to add expenses to the same group from their own phones.',
      'You want a dedicated mobile app rather than a browser page.',
      'You need a currency this tool does not yet support.',
    ],
    howToSwitch: [
      'Recreate the group (people + any still-open expenses) in the split calculator.',
      'Settle up in Tricount first if possible, then start fresh here — there is no import between the two.',
    ],
    toolRoute: '/split',
    toolLabel: 'Try the free split expense calculator',
    faqs: [
      {
        q: "What's actually different from Tricount, since both are free?",
        a: 'The difference is where data lives, not price: Tricount syncs your group to its own servers so everyone sees updates in real time; this tool only ever stores data in the browser that created it, with no server involved at all. That makes it more private but single-device.',
      },
      {
        q: 'Does this need an app?',
        a: "No — it's a regular web page, nothing to install. Tricount works in a browser too, but is built primarily around its app.",
      },
    ],
  },
  {
    slug: 'ynab-alternative',
    name: 'YNAB (You Need A Budget)',
    category: 'budget',
    searchedBecause:
      "YNAB is a paid subscription (after a trial period), so most \"YNAB alternative\" searches are from people who want zero-based-budgeting-style category tracking without a recurring subscription, or who don't need YNAB's bank-sync.",
    rows: [
      { label: 'Cost', us: 'Free', them: 'Paid subscription after a free trial' },
      { label: 'Bank sync', us: 'No — manual entry', them: 'Yes' },
      { label: 'Account required', us: 'No', them: 'Yes' },
      { label: 'Methodology', us: 'Simple category totals + running balance', them: "YNAB's specific zero-based, \"age of money\" rules" },
      { label: 'Data storage', us: 'Browser localStorage only', them: "Synced to YNAB's servers" },
    ],
    whenTheyAreBetter: [
      "You specifically want YNAB's zero-based-budgeting methodology and its teaching material/community around it.",
      'You want transactions to auto-import from your bank instead of typing them in.',
      'You need multi-device sync or to share a budget with a partner in real time.',
    ],
    howToSwitch: [
      'Export your current month\'s categories and balances from YNAB (its export feature) and re-enter them as starting entries.',
      'Going forward, log income/expenses manually under a category each time, same as the running habit YNAB requires anyway.',
    ],
    toolRoute: '/budget',
    toolLabel: 'Try the free budget tracker',
    faqs: [
      {
        q: 'Is this as powerful as YNAB?',
        a: "No, and it isn't trying to be — YNAB is a full methodology with bank sync, goal tracking, and reporting. This is a free, simple category-and-balance tracker for people who want the basic habit without a subscription.",
      },
      {
        q: 'Can I import my YNAB data?',
        a: 'Not automatically. YNAB can export your data (Settings > Export), and you can manually re-enter current balances by category as a starting point here.',
      },
    ],
  },
  {
    slug: 'mint-alternative',
    name: 'Mint',
    category: 'budget',
    searchedBecause:
      'Intuit shut down Mint in March 2024 and directed users toward Credit Karma, which is a credit-monitoring product, not a direct budgeting replacement — so "Mint alternative" searches are largely from displaced Mint users who specifically want budget tracking back, not credit monitoring.',
    rows: [
      { label: 'Status', us: 'Active', them: 'Shut down by Intuit, March 2024' },
      { label: 'Cost', us: 'Free', them: 'Was free; Intuit now points users to Credit Karma' },
      { label: 'Bank sync', us: 'No — manual entry', them: 'Mint had bank sync; Credit Karma is not a budgeting app' },
      { label: 'Account required', us: 'No', them: 'Yes (Credit Karma account)' },
      { label: 'Data storage', us: 'Browser localStorage only', them: 'N/A — Mint no longer exists' },
    ],
    whenTheyAreBetter: [
      'N/A for Mint itself — it no longer exists. If you specifically want bank-sync and credit-score monitoring in one place, Credit Karma (Intuit\'s suggested replacement) covers that, though it is not a category-budget tracker in the way Mint was.',
    ],
    howToSwitch: [
      'If you still have access, export your Mint transaction history before it becomes unavailable.',
      'Re-create your budget categories here and start logging income/expenses manually going forward.',
    ],
    toolRoute: '/budget',
    toolLabel: 'Try the free budget tracker',
    faqs: [
      {
        q: 'Why did Mint shut down?',
        a: 'Intuit (Mint\'s owner) announced in late 2023 that it would shut Mint down on March 23, 2024, consolidating budgeting-adjacent features into Credit Karma, which it also owns.',
      },
      {
        q: 'Is Credit Karma a replacement for Mint?',
        a: "Not directly — Credit Karma is built around credit monitoring and recommendations, not category-based budget tracking. If what you actually used Mint for was watching income/expenses by category, a dedicated budget tracker like this one is closer to that original use case.",
      },
    ],
  },
]
