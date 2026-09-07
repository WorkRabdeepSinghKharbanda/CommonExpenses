import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'splitting-costs-for-a-shared-car',
  title: 'Splitting costs for a shared or carpooled car, fairly',
  description: 'How to split gas, insurance, and maintenance for a car used by multiple people, based on usage instead of a flat split.',
  date: '2026-04-23',
}

export default function SharedCarCosts() {
  return (
    <BlogPostLayout post={post}>
      <p>
        A 50/50 split feels fair until one roommate uses the car for a daily 20-minute
        commute and the other drives it once a week to the grocery store. Flat splits
        work for costs that don't scale with use; they break down for costs that do. The
        fix is splitting each cost category by the driver most likely to have caused it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Not every cost should split the same way
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Gas:</strong> split by miles driven, not by person. Whoever drives more
          pays more — this is the easiest category to make usage-based since it's
          directly tied to distance.
        </li>
        <li>
          <strong>Insurance and registration:</strong> split flat, evenly, or by ownership
          share if one person owns the car and the other just uses it. These costs exist
          regardless of how much the car is driven, so usage-based splitting doesn't
          apply.
        </li>
        <li>
          <strong>Routine maintenance (oil changes, tires):</strong> split by miles, same
          logic as gas — more driving wears the car down faster.
        </li>
        <li>
          <strong>Damage from a specific incident</strong> (a parking scrape, a pothole
          blowout): whoever was driving at the time pays it, full stop. Don't let this
          get absorbed into the shared pool.
        </li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A simple mileage-split formula
      </h2>
      <p>
        Track odometer readings at the start and end of each month (or use a phone's trip
        log). Say Driver A puts on 600 miles and Driver B puts on 200 miles — that's a
        75/25 split. Apply that ratio to gas and maintenance for the month: on a $180 gas
        bill, A owes $135 and B owes $45. Insurance, at a flat $120/month, still splits
        evenly or by whatever ownership arrangement you agreed on up front — don't fold
        it into the mileage ratio.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Settle monthly, not per fill-up
      </h2>
      <p>
        Log every gas fill-up and maintenance bill as it happens with the odometer
        reading at the time, then settle the mileage-based categories once a month
        against the flat categories. Trying to settle after every tank of gas turns a
        shared car into a running argument; a monthly reconciliation turns it into
        bookkeeping.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Split your shared car costs
      </Link>
    </BlogPostLayout>
  )
}
