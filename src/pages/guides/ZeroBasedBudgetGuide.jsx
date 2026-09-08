import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'What does "zero-based" actually mean in a zero-based budget?',
    a: 'It means income minus all assigned spending, savings, and debt payments should equal zero — not that you spend everything. Every dollar gets a named job (rent, groceries, savings, debt payoff, "fun money") before the month starts, so a leftover $200 isn\'t untracked cash sitting in checking, it\'s assigned to savings or debt on purpose.',
  },
  {
    q: 'How is zero-based budgeting different from the 50/30/20 rule?',
    a: '50/30/20 sets broad percentage targets (50% needs, 30% wants, 20% savings/debt) and lets you spend freely within each bucket. Zero-based budgeting goes further and assigns every dollar to a specific category before you spend, which gives more control but takes more upkeep. 50/30/20 suits people who want guardrails; zero-based suits people who want to actively direct every dollar, especially while paying off debt or saving aggressively.',
  },
  {
    q: 'What if my income is irregular and I can\'t predict it month to month?',
    a: 'Budget against your lowest realistic monthly income (e.g. your worst month from the last six), assign every dollar of that baseline first, and treat any income above it as a bonus you assign fresh each time it arrives — split between savings, debt, and a buffer category for next month\'s dip. This keeps the "every dollar has a job" principle intact without pretending irregular income is predictable.',
  },
]

export default function ZeroBasedBudgetGuide() {
  useSeo({
    title: 'Zero-Based Budget Calculator | Common Expenses Tracker',
    description:
      'Give every dollar of income a job with zero-based budgeting — how it works, how it differs from the 50/30/20 rule, and a free tracker to run it.',
    path: '/zero-based-budget-calculator',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Zero-based budget calculator
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Most budgets fail quietly: money gets spent, some gets saved, and at the end of the
        month there's a vague sense of "where did it go." Zero-based budgeting fixes this by
        assigning every dollar of income a specific job before the month starts — rent,
        groceries, debt payoff, savings, even discretionary spending — until income minus
        assignments equals zero. Nothing is unaccounted for, including the money you're
        choosing to spend on fun.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">How to build one from scratch</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>List your total expected income for the month.</li>
          <li>List every category you spend on: fixed bills, variable costs, savings goals, debt payments, discretionary spending.</li>
          <li>Assign a dollar amount to each category until the total equals your income exactly.</li>
          <li>Track actual spending against each category through the month, and re-assign leftover or overspent amounts rather than letting them disappear.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">When zero-based budgeting is worth the extra effort</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>You're paying off debt aggressively and want every spare dollar working toward it, not sitting idle.</li>
          <li>You've tried percentage-based budgets and kept "leaking" money into unassigned spending.</li>
          <li>Your income or expenses are variable enough that a static plan doesn't hold up month to month.</li>
        </ul>
      </section>

      <FaqSection id="faq-zero-based-budget" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/zero-based-budget-calculator"
      />

      <Link to="/budget" className="btn-primary inline-block">
        Build your zero-based budget
      </Link>
    </div>
  )
}
