import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: "Is splitting grocery costs evenly fair if one roommate eats way less than others?",
    a: "Not really — an even split works fine when everyone eats and shops about the same amount, but it starts to feel unfair fast when one roommate is out of town often, eats out most nights, or has different dietary needs that cost more or less. A common fix is to separate truly shared items (dish soap, paper towels, communal condiments) from personal groceries, and split only the shared portion evenly while everyone logs their own personal grocery runs separately.",
  },
  {
    q: 'How do we split one big grocery run when only one person bought it?',
    a: "The simplest approach: whoever pays logs the total and marks which roommates it covers, then the tracker divides that amount evenly (or by an agreed ratio) among just those people — not automatically among everyone in the house, since not every trip is for the whole group. Doing this at the register, right after the receipt is in hand, avoids the later argument over what was actually shared.",
  },
  {
    q: "What's a fair system for roommates who shop and eat completely differently?",
    a: "When food habits differ a lot (different diets, different schedules, one roommate cooking for the house vs. others eating out), the fairest setup is usually to keep grocery spending mostly individual and only pool costs for genuinely shared items like household supplies or communal staples everyone actually uses. Track both categories separately so nobody is subsidizing another person's personal food choices.",
  },
]

export default function GroceryExpenseGuide() {
  useSeo({
    title: 'Grocery Expense Splitter for Roommates | Common Expenses Tracker',
    description:
      'A fair way to split grocery runs among roommates who shop and eat differently, with a free calculator for shared grocery costs.',
    path: '/grocery-expense-splitter',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Grocery expense splitter for roommates
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Groceries are one of the trickiest shared costs between roommates, because unlike
        rent or utilities, everyone consumes a different amount and buys different things.
        Splitting every grocery bill evenly is the easy default, but it breaks down as soon
        as eating habits, schedules, or diets diverge between roommates.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">
          Separate shared items from personal groceries
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Before splitting anything, decide what's genuinely communal:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li><strong>Shared:</strong> dish soap, paper towels, communal spices, coffee everyone drinks.</li>
          <li><strong>Personal:</strong> individual meals, snacks, specific diets, anything one person buys for themselves.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A workable house routine</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Whoever shops tags the receipt as "shared," "personal," or a mix.</li>
          <li>Split only the shared portion, evenly or by an agreed ratio.</li>
          <li>Track personal grocery spending separately, per person, for visibility.</li>
          <li>Settle shared balances on a fixed cadence — weekly works best for groceries.</li>
        </ol>
      </section>

      <FaqSection id="faq-grocery-split" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Split your grocery expenses
      </Link>
    </div>
  )
}
