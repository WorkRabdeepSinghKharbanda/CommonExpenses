import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'Should we split a shared car 50/50 or by how much each person drives?',
    a: 'It depends on the cost type. Fixed costs — insurance, registration, loan payments, parking permits — stay the same no matter who drives, so splitting those evenly (or by ownership share) is fairest. Variable costs — gas, mileage-based maintenance like tires and oil changes — track wear and should be split by miles driven or by trip, not evenly. Mixing the two into one flat 50/50 split usually shortchanges the person who drives less.',
  },
  {
    q: 'How do we track who owes what without logging every gas receipt?',
    a: "You don't need every receipt if you agree on a rhythm: whoever fills up logs the amount and the odometer reading at the pump, and fixed costs (insurance, registration) get logged once when the bill arrives. At the end of the month, add up each person's mileage share and their paid-for share, and the tracker settles the difference. Ten seconds per fill-up beats reconciling a shoebox of receipts later.",
  },
  {
    q: 'What if one person drives the car way more often — is an even split still fair?',
    a: "No — an even split only makes sense for costs that don't depend on usage, like insurance and the loan payment. For gas and mileage-driven maintenance, the heavier driver should cover a proportionally larger share, calculated from logged mileage. A tracker that separates fixed and variable categories and lets you set a usage ratio (e.g. 70/30 instead of 50/50) handles this without manual math every month.",
  },
]

export default function CarCostSplitGuide() {
  useSeo({
    title: 'Car Cost Splitting Calculator for Shared Cars | Common Expenses Tracker',
    description:
      'Split gas, insurance, and maintenance costs for a shared or carpooled car based on usage, with a free calculator to track who owes what.',
    path: '/car-cost-splitting-calculator',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Car cost splitting calculator for shared cars
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Sharing a car with a partner, roommate, or sibling saves money, but it only stays
        fair if the costs are split the right way. The mistake most people make is treating
        every car expense the same — insurance and gas are not the same kind of cost, and
        splitting both 50/50 quietly favors whoever drives less.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Fixed costs vs. usage costs</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Split these two buckets differently:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li><strong>Fixed:</strong> insurance, registration, loan or lease payment, parking permits — split evenly or by ownership share, since they don't change with mileage.</li>
          <li><strong>Usage-based:</strong> gas, oil changes, tire wear, routine servicing — split by miles driven, since these track directly with who's behind the wheel.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A simple way to track it monthly</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Log the odometer reading whenever someone fills up or the car changes hands.</li>
          <li>Record fixed bills once, as they come in, under a shared "car" category.</li>
          <li>At month end, total each person's logged mileage share and paid-for share.</li>
          <li>Settle the gap: whoever paid less than their share owes the difference.</li>
        </ol>
      </section>

      <FaqSection id="faq-car-cost-split" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Split your shared car costs
      </Link>
    </div>
  )
}
