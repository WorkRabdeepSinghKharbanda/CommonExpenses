import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'tracking-shared-utility-bills',
  title: 'Tracking shared utility bills without a monthly argument',
  description:
    'Why utility bills cause more roommate friction than rent, and a simple system for splitting and tracking them as they arrive.',
  date: '2026-03-12',
}

export default function SharedUtilityBills() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Rent is fixed and predictable — everyone knows the number in advance. Utilities are
        the opposite: the electric bill swings from $80 in April to $220 in August, the
        internet bill is flat but nobody remembers whose card it's on, and the gas bill
        shows up on a different day every month. That unpredictability, not the dollar
        amount, is what actually causes roommate arguments.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why "just Venmo me later" fails
      </h2>
      <p>
        When bills are tracked in someone's head instead of a shared system, three things
        go wrong: the person who pays fronts the whole bill and has to chase everyone else
        down, nobody has a record of who's actually paid this month versus last month, and
        disputes over a high bill ("why was electric $220 this month?") have no data to
        settle them. All three are solved by writing the bill down the day it arrives, not
        the day someone gets annoyed enough to ask about it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A system that takes 2 minutes per bill
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Log every utility bill as it arrives — amount, due date, which provider.</li>
        <li>Decide the split once (even split, or by usage) and apply it consistently.</li>
        <li>Mark who has paid their share, not just that "the bill is paid."</li>
        <li>Review the log monthly so seasonal spikes (AC in summer, heat in winter) don't feel like a surprise.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Handle usage-based disputes with data, not vibes
      </h2>
      <p>
        If one roommate runs AC constantly and another doesn't, an even split will
        eventually cause resentment. Rather than guessing at a "fair" percentage, track 3-4
        months of bills first. If the pattern is consistent — say, summer electric is
        always 30-40% higher than winter — agree on a seasonal adjustment (e.g., the AC
        user pays an extra flat $20/month June-September) rather than re-negotiating every
        single bill. A record of past bills makes this a five-minute conversation instead
        of a guessing game.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Track your utility spending
      </Link>
    </BlogPostLayout>
  )
}
