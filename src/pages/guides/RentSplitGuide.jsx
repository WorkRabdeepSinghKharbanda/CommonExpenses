import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'Is it fair to split rent evenly when rooms are different sizes?',
    a: 'Only if the rooms are genuinely close in size and amenities. Once one bedroom is noticeably bigger, has an en-suite bathroom, or has a walk-in closet, an even split effectively means the person in the smaller room subsidizes the person in the bigger one. Most roommates find a size-weighted or amenity-weighted split feels fairer and avoids resentment building up over the lease term.',
  },
  {
    q: 'What is the square-footage method for splitting rent?',
    a: 'Measure or estimate each bedroom\'s square footage, add them up, and give each person a share of rent equal to their room\'s percentage of that total. For example, if bedroom A is 150 sq ft and bedroom B is 100 sq ft out of 250 sq ft total, A pays 60% of rent and B pays 40%. It ignores shared space, so many households add a flat adjustment for a private bathroom or extra closet on top.',
  },
  {
    q: 'Should a private bathroom or extra closet change the split further?',
    a: 'Yes — treat them as line items rather than folding them into the square-footage math. A common approach is to agree on a flat monthly premium (say $50-150 depending on your market) for a private bathroom, and a smaller one for significantly more closet or storage space, then apply the square-footage split to what remains. This keeps the adjustment transparent instead of buried in a percentage everyone has to trust blindly.',
  },
]

export default function RentSplitGuide() {
  useSeo({
    title: 'Rent Split Calculator for Rooms of Different Sizes | Common Expenses Tracker',
    description:
      'How to split rent fairly when bedrooms differ in size, private bathrooms, or closet space — plus a free calculator to track the split.',
    path: '/rent-split-calculator-different-room-sizes',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Rent split calculator for rooms of different sizes
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        An even split works fine when bedrooms are basically identical. It stops being fair
        the moment one room is bigger, has its own bathroom, or comes with a walk-in closet
        while the other doesn't. The fix isn't guilt-tripping whoever got the small room into
        accepting an even split — it's agreeing on a method up front, before move-in, so the
        numbers do the negotiating instead of a conversation nobody wants to have every month.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A method that holds up over a full lease</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Get (or estimate) each bedroom's square footage from the listing or a tape measure.</li>
          <li>Split rent proportionally to each room's share of the total bedroom square footage.</li>
          <li>Add a flat premium on top for a private bathroom, then a smaller one for extra closet or storage space.</li>
          <li>Write the agreed split down before anyone signs, and log the actual monthly payments so it's never a memory dispute.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Why this beats "just split it evenly"</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>It's based on measurable facts (square footage, amenities), not vibes or negotiating power.</li>
          <li>It survives roommate turnover — a new person moving into the small room inherits the same logic, not a fresh argument.</li>
          <li>Tracking the agreed split monthly catches drift early, before "I'll pay you back" turns into a running tab nobody trusts.</li>
        </ul>
      </section>

      <FaqSection id="faq-rent-split" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Try the rent split calculator
      </Link>
    </div>
  )
}
