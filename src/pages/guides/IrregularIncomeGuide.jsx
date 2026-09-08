import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'Should I budget off my average monthly income if it varies a lot?',
    a: "No — averaging is the most common mistake with variable income. An average smooths over the low months, so a budget built on it looks fine on paper but fails the moment you hit a month below average, which happens roughly half the time by definition. Budget instead against your lowest realistic month (a 'baseline month'), and treat anything earned above that as a bonus to save or invest, not as money you've already committed to spending.",
  },
  {
    q: 'What counts as a realistic "baseline month" for freelance or commission income?',
    a: "Look at your last 6-12 months of income, exclude the single best month as an outlier, and use something close to the lowest or bottom-quartile month you actually hit. It should be a number you're confident you'll clear in a bad month, not a hopeful one. If you don't have 6 months of history yet, be conservative and revisit the baseline once you do — it's meant to be corrected as real data comes in.",
  },
  {
    q: 'How do I handle bills that are due before a good-income month arrives?',
    a: "Build a buffer fund equal to one baseline month's worth of essential expenses before you rely on this method at all — it exists specifically to cover the timing gap between a bill's due date and an irregular paycheck's arrival. Refill the buffer from above-baseline months before spending the surplus on anything else. Without a buffer, even a correct baseline budget will still cause missed payments during a slow stretch that happens to fall before a big invoice clears.",
  },
]

export default function IrregularIncomeGuide() {
  useSeo({
    title: 'Budget Planner for Irregular or Freelance Income | Common Expenses Tracker',
    description:
      'How to budget on variable income using a baseline-month strategy instead of an average, with a free tracker for income and expenses.',
    path: '/irregular-income-budget-planner',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Budget planner for irregular or freelance income
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        A fixed salary makes budgeting easy: you know what's coming, so you can plan around
        it. Freelance, commission, or gig income doesn't offer that certainty, and the
        standard advice — "budget off your average" — quietly sets you up to fail in every
        month that comes in below average, which is close to half of them.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">
          Budget against a baseline, not an average
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Instead of averaging, pick a conservative "baseline month" — close to your lowest
          realistic month, not your typical one. Build your fixed expenses (rent, utilities,
          insurance, minimum debt payments) to fit comfortably inside that baseline. Anything
          you earn above it in a given month is a surplus, not committed spending.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Where the surplus should go</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>First, top up a buffer fund until it covers one baseline month of expenses.</li>
          <li>Next, catch up on any variable costs you deferred during a lean month.</li>
          <li>Only after both are covered, treat the rest as discretionary or savings.</li>
        </ol>
      </section>

      <FaqSection id="faq-irregular-income" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/budget" className="btn-primary inline-block">
        Track variable income and expenses
      </Link>
    </div>
  )
}
