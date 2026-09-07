import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'audit-your-recurring-bills')

export default function AuditRecurringBills() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Subscriptions rarely get cancelled the moment you stop using them — they just sit
        on a card, renewing quietly, until you happen to scroll past a statement and
        wonder what "Streamify Plus" even is. A yearly audit catches this before it adds
        up to real money.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The 15-minute audit
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Pull the last 2 months of card/bank statements.</li>
        <li>List every recurring charge, however small.</li>
        <li>For each one, ask: did I use this in the last 30 days?</li>
        <li>Cancel anything you can't answer "yes" to without checking.</li>
        <li>Log the survivors in a bills tracker so next year's audit takes 5 minutes, not 15.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why they creep back
      </h2>
      <p>
        Free trials that auto-convert and annual plans that renew 12 months after you
        forgot signing up are the two biggest offenders. Tracking a bill's due date, not
        just its existence, is what actually prevents both — you get a heads-up before
        the charge, not a surprise after it.
      </p>

      <Link to="/bills" className="btn-primary inline-block">
        Track your recurring bills
      </Link>
    </BlogPostLayout>
  )
}
