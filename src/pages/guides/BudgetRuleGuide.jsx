import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'

const FAQ = [
  {
    q: 'What is the 50/30/20 budget rule?',
    a: 'It splits after-tax income into three buckets: 50% on needs (rent, groceries, utilities), 30% on wants (dining out, entertainment), and 20% on savings and debt repayment. It is a starting ratio, not a strict law — adjust it to your actual cost of living.',
  },
  {
    q: 'What counts as a "need" vs a "want"?',
    a: 'A need is something you would keep paying even in a tight month — rent, utilities, minimum debt payments, groceries. A want is discretionary — subscriptions, dining out, hobbies. When in doubt, ask if cutting it would change your living situation.',
  },
  {
    q: 'How do I actually apply this without a spreadsheet?',
    a: 'Log every expense under a category as it happens, then compare your category totals against the 50/30/20 split at the end of the month. A budget tracker that shows a running by-category breakdown does this without any manual math.',
  },
]

export default function BudgetRuleGuide() {
  useSeo({
    title: 'The 50/30/20 Budget Rule, Explained | Common Expenses Tracker',
    description:
      'How the 50/30/20 budgeting rule works, what counts as a need vs a want, and how to track it against your real spending with a free budget tracker.',
    path: '/50-30-20-budget-rule',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        The 50/30/20 budget rule, explained
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        The 50/30/20 rule is a starting point for splitting your income, not a formula you
        need to hit exactly: 50% needs, 30% wants, 20% savings and debt repayment. Its real
        value is giving you three buckets to check your actual spending against.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Putting it into practice</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Log income and every expense with a category as it happens.</li>
          <li>Group categories into needs, wants, and savings.</li>
          <li>Compare each bucket's share of income against 50/30/20.</li>
          <li>Adjust spending in the bucket that's furthest off, not everything at once.</li>
        </ol>
      </section>

      <FaqSection id="faq-budget-rule" items={FAQ} />

      <Link to="/budget" className="btn-primary inline-block">
        Try the free budget tracker
      </Link>
    </div>
  )
}
