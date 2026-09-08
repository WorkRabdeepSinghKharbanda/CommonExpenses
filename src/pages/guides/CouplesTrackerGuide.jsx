import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'Do we need a joint bank account to split expenses fairly as a couple?',
    a: "No. A joint account is one way to manage shared money, but it's not required to split costs fairly — you can keep separate accounts and simply log shared expenses (rent, groceries, utilities) in a shared tracker, then have one partner settle up with the other periodically. This works well for couples who aren't ready to merge finances, or who each want to keep some financial independence while still sharing costs cleanly.",
  },
  {
    q: 'How should we split expenses if we earn very different amounts?',
    a: "A straight 50/50 split can feel unfair when incomes are uneven, since the same dollar amount is a bigger sacrifice for the lower earner. A common alternative is proportional splitting: each partner pays the same percentage of their own income, not the same dollar amount. For example, on a combined $6,000 shared-expense need, someone earning 60% of household income pays 60% of costs, not half. Recalculate the ratio when either income changes meaningfully.",
  },
  {
    q: 'What expenses should actually be shared vs. kept separate?',
    a: 'Shared expenses are usually things that benefit both partners regardless of who "uses" them more — rent, utilities, groceries, shared subscriptions, joint trips. Personal expenses — individual hobbies, personal debt, gifts for one partner\'s own family — are typically kept separate. The exact line is a conversation, not a rule, but writing it down explicitly (rather than assuming) avoids the recurring "was that shared?" argument.',
  },
]

export default function CouplesTrackerGuide() {
  useSeo({
    title: 'Couples Expense Tracker for Shared Costs | Common Expenses Tracker',
    description:
      'Track and split shared expenses as a couple without merging bank accounts, including how to handle uneven incomes fairly.',
    path: '/couples-expense-tracker',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Couples expense tracker for shared costs
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Plenty of couples want to share costs fairly without combining every account into
        one. That's a reasonable choice, not a red flag — it just means the fairness has to
        be handled by how you log and split expenses, rather than by a bank automatically
        pooling the money.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">
          Two ways to split shared costs
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li><strong>Even split:</strong> simplest, works well when incomes are close.</li>
          <li><strong>Proportional split:</strong> each partner pays the same percentage of their own income toward shared costs — fairer when incomes differ noticeably.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Setting it up so it doesn't cause friction</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Agree in writing on which categories count as "shared" vs personal.</li>
          <li>Pick a split method (even or proportional) and revisit it if income changes.</li>
          <li>Log shared expenses as they happen, from either partner's card or cash.</li>
          <li>Settle the balance on a fixed schedule — weekly or monthly — not ad hoc.</li>
        </ol>
      </section>

      <FaqSection id="faq-couples-tracker" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Track expenses as a couple
      </Link>
    </div>
  )
}
