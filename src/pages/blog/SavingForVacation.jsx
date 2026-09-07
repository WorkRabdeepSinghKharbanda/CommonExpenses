import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'saving-for-a-vacation',
  title: 'How to save for a vacation without putting it on a credit card',
  description: 'A month-by-month savings plan for a trip, including how to size your target and avoid the last-minute scramble.',
  date: '2026-04-16',
}

export default function SavingForVacation() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Most vacations end up partly on a credit card not because the trip was
        unaffordable, but because the saving started too late or the target number was
        never set. A week-long trip booked eight months out needs a different plan than
        one booked eight weeks out — the math changes, but the approach doesn't.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Size the target before you save a dollar
      </h2>
      <p>
        Break the trip into four buckets: flights, lodging, daily spend (food, transport,
        activities), and a buffer. For a week-long domestic trip for two, a realistic
        split is roughly $600 flights, $900 lodging, $70/day/person for daily spend
        (~$980 for two over 7 days), and a 10% buffer for the inevitable overrun — call it
        $250. That's about $2,730 total. Round up, not down; a buffer that's "probably
        enough" isn't a buffer.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Work backward from the departure date
      </h2>
      <p>
        Divide the target by the number of months until departure. $2,730 over 8 months
        is about $342/month. Over 3 months, it's $910/month — at that point, either cut
        the trip scope, push the date out, or accept a smaller card balance and pay it
        off in the first month back. The point of doing this division early is that a
        $910/month number three months out tells you something a $342/month number
        eight months out doesn't: whether the trip needs to change size, not just savings
        habits.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Automate it and separate it from everyday cash
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Open a separate savings account or sub-account just for this trip.</li>
        <li>
          Set an automatic transfer for the monthly amount the day after payday — before
          it can get absorbed into everyday spending.
        </li>
        <li>
          Book refundable flights and lodging as early as prices are reasonable, even
          before the fund is full — locking in the price fixes two of your four buckets.
        </li>
        <li>
          Re-check the daily spend bucket a month out using real prices for the
          destination, not the estimate you started with.
        </li>
      </ol>
      <p>
        The last-minute scramble almost always comes from the daily-spend bucket being
        guessed once at the start and never revisited — flights and lodging get booked
        and locked, but food and activities inflate quietly until the trip itself.
        Revisit that number, not just the total.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Set your vacation savings goal
      </Link>
    </BlogPostLayout>
  )
}
