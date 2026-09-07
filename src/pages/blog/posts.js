// Single source of truth for blog post metadata — used by BlogIndex to list
// posts and by each post to fill its own SEO/JSON-LD without duplicating strings.
export const POSTS = [
  {
    slug: 'audit-your-recurring-bills',
    title: 'Your subscriptions are quietly eating your budget — here\'s how to audit them',
    description:
      'A step-by-step way to find and cut subscriptions you forgot you had, and keep new ones from creeping back in.',
    date: '2026-01-15',
  },
  {
    slug: 'splitting-expenses-on-a-group-trip',
    title: 'Splitting expenses on a group trip without the awkward math at the end',
    description:
      'A method for tracking shared trip costs as they happen, so settling up at the end takes one look, not a group chat argument.',
    date: '2026-02-03',
  },
  {
    slug: 'how-big-should-your-emergency-fund-be',
    title: 'How many months of expenses should your emergency fund actually cover?',
    description:
      'Why "3 to 6 months" is a starting point, not a rule, and how to size an emergency fund to your actual job and expense stability.',
    date: '2026-02-20',
  },
]
