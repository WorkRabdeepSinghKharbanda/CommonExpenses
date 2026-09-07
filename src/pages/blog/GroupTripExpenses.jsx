import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'splitting-expenses-on-a-group-trip')

export default function GroupTripExpenses() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Group trips break down financially for a predictable reason: everyone pays for
        different things at different times — one person books the Airbnb, another
        covers dinner, a third grabs the cab — and nobody remembers the full picture by
        the last night.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Log it as it happens, not after
      </h2>
      <p>
        The fix isn't a stricter memory, it's removing memory from the equation. Every
        time someone pays for something shared, log it immediately: what it was, who
        paid, and who it was for. Not everyone needs to be on every expense — a taxi four
        of you took shouldn't be split across all eight travelers.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Settle up once, at the end
      </h2>
      <p>
        With everything logged, you don't need to settle up after every meal — let it
        net out over the whole trip and settle once. A good splitter computes the fewest
        transfers needed to make everyone even, instead of everyone paying everyone back
        individually.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Split your next trip's expenses
      </Link>
    </BlogPostLayout>
  )
}
