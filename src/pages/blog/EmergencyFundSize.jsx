import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'how-big-should-your-emergency-fund-be')

export default function EmergencyFundSize() {
  return (
    <BlogPostLayout post={post}>
      <p>
        "Three to six months of expenses" is the number everyone repeats, but it's a
        starting range, not a rule that fits every situation. The right size depends on
        how stable your income is and how quickly you could replace it if it stopped.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What actually moves the number
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Stable salary, easily replaceable job → closer to 3 months.</li>
        <li>Variable income (freelance, commission, single-income household) → closer to 6-9 months.</li>
        <li>Specialized role with a long job-search history → lean toward the higher end.</li>
        <li>Dependents relying solely on your income → add a buffer on top of the above.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Calculate it against your real expenses, not income
      </h2>
      <p>
        The fund should cover essential monthly expenses — rent, utilities, groceries,
        minimum debt payments — not your full income. Add those up, multiply by your
        target number of months, and that's the target to set as a savings goal.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Set your emergency fund goal
      </Link>
    </BlogPostLayout>
  )
}
