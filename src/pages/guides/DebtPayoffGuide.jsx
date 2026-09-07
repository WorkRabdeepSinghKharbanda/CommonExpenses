import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'

const FAQ = [
  {
    q: 'What is the difference between the debt snowball and debt avalanche methods?',
    a: 'The snowball method pays minimums on every debt and puts extra money toward the smallest balance first, regardless of interest rate, then rolls that payment into the next-smallest once it\'s paid off. The avalanche method does the same thing but targets the highest interest rate first. Snowball optimizes for motivation via quick wins; avalanche optimizes for paying the least total interest over time.',
  },
  {
    q: 'Which method actually saves more money?',
    a: 'Avalanche almost always saves more in total interest, sometimes significantly, especially when one balance carries a much higher rate (like a credit card at 24% next to a student loan at 5%). The gap is smaller when balances and rates are similar across debts. Snowball can still be the better real-world choice if the psychological win of clearing a full balance early is what keeps you actually sticking to the plan.',
  },
  {
    q: 'Can I mix the two methods instead of picking one?',
    a: 'Yes — a common hybrid is to snowball any very small balance first (to reduce the number of accounts you\'re juggling) and then switch to avalanche ordering for the rest. There\'s no rule requiring purity; the method that gets followed consistently for the next 12-24 months beats the mathematically optimal one you abandon after two.',
  },
]

export default function DebtPayoffGuide() {
  useSeo({
    title: 'Debt Snowball vs. Avalanche Calculator | Common Expenses Tracker',
    description:
      'Compare the debt snowball and debt avalanche payoff methods and see which fits your situation, with a free tracker to log progress.',
    path: '/debt-payoff-snowball-vs-avalanche',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Debt snowball vs. avalanche calculator
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Both debt payoff methods work the same way at the core: pay the minimum on every
        debt, then throw every extra dollar at one target debt until it's gone, then move to
        the next. The only difference is which debt you target first — smallest balance
        (snowball) or highest interest rate (avalanche). The math favors avalanche almost
        every time; whether that matters depends on whether you'll actually stick with a plan
        that takes longer to feel like progress.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">How to pick between them</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>List every debt with its balance, minimum payment, and interest rate.</li>
          <li>For snowball, sort smallest balance to largest. For avalanche, sort highest rate to lowest.</li>
          <li>Pay minimums on everything, and put all extra money toward the first debt in your sorted list.</li>
          <li>Once it's paid off, roll its full payment (minimum + extra) into the next debt on the list, and repeat.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Signs one method fits you better than the other</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Avalanche fits if you're disciplined about long-term plans and mainly care about minimizing total interest paid.</li>
          <li>Snowball fits if you've stalled on debt payoff before and need visible wins (a fully closed account) to stay motivated.</li>
          <li>If your rates are all similar, the total-interest gap between the two methods is small — pick whichever keeps you consistent.</li>
        </ul>
      </section>

      <FaqSection id="faq-debt-payoff" items={FAQ} />

      <Link to="/budget" className="btn-primary inline-block">
        Track your debt payoff
      </Link>
    </div>
  )
}
