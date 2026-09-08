import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'How do I figure out how much to save per month for a trip?',
    a: 'Take your total target budget for the trip (flights, lodging, food, activities, and a buffer for the unexpected), subtract whatever you\'ve already saved toward it, and divide the remainder by the number of months until your travel date. That monthly number is your savings target — treat it like a recurring bill you pay to yourself rather than whatever happens to be left over at month-end.',
  },
  {
    q: 'Should I include a buffer in my vacation budget, and how much?',
    a: 'Yes — a 10-15% buffer on top of your itemized budget covers the things that always come up: a higher exchange rate than expected, an extra excursion you didn\'t plan for, or a baggage fee. Without it, a trip that\'s "exactly on budget" on paper tends to run over in practice, and that overage usually ends up on a credit card instead of coming from savings.',
  },
  {
    q: 'What if I can\'t hit my monthly savings target some months?',
    a: 'Adjust the plan rather than abandoning it — either push out the travel date, cut a specific line item (a shorter trip, a cheaper lodging tier), or increase savings in a later month to catch up. The point of calculating a monthly number up front is that you notice a shortfall in month two, not in month eleven when there\'s no runway left to fix it.',
  },
]

export default function VacationSavingsGuide() {
  useSeo({
    title: 'Vacation Savings Calculator | Common Expenses Tracker',
    description:
      'Figure out exactly how much to save each month for a trip based on your target budget and travel date, with a free savings calculator.',
    path: '/vacation-savings-calculator',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Vacation savings calculator
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        "I'll just save what I can" is how trips get funded on a credit card instead of cash.
        A vacation is a known cost with a known deadline — the travel date — which makes it
        one of the easiest savings goals to actually hit, as long as you turn it into a
        concrete monthly number early instead of hoping it works out closer to the trip.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">How to size your monthly savings target</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Add up your target budget: flights, lodging, food, activities, and a 10-15% buffer.</li>
          <li>Subtract anything you've already saved specifically for this trip.</li>
          <li>Divide the remainder by the number of months left until your travel date.</li>
          <li>Set that amount aside automatically each month, and track progress so a shortfall shows up early, not the week before you leave.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Where vacation budgets typically go wrong</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Pricing flights and lodging but forgetting food, local transport, and activities, which often add up to as much as the flight.</li>
          <li>Skipping the buffer, so the first unplanned cost (a resort fee, a missed connection) blows the whole budget.</li>
          <li>Starting to save only 6-8 weeks out, which turns a manageable monthly amount into an unrealistic one.</li>
        </ul>
      </section>

      <FaqSection id="faq-vacation-savings" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/savings" className="btn-primary inline-block">
        Calculate your vacation savings
      </Link>
    </div>
  )
}
