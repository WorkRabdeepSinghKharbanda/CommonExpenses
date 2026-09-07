import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'budgeting-with-irregular-income',
  title: 'How to budget when your income changes every month',
  description: 'A budgeting approach for freelancers and commission-based earners built around a baseline income instead of an average.',
  date: '2026-04-30',
}

export default function IrregularIncomeBudgeting() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Budgeting off a 12-month average is the first mistake most people with irregular
        income make. If you earned $3,000, $6,500, $2,800, and $7,200 over four months,
        the average is $4,875 — but you never actually have $4,875 in a given month.
        Budgeting to the average means overspending in the low months and only noticing
        when the rent is due.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Use your lowest realistic month, not your average
      </h2>
      <p>
        Look at your last 6–12 months of income and find the lowest one that wasn't a
        fluke (an unpaid vacation month, say). In the example above, that's $2,800. That
        number — call it your baseline — is what your fixed monthly budget is built on:
        rent, utilities, groceries, minimum debt payments, insurance. If your fixed costs
        fit inside $2,800, every month you earn more than that is a month you're ahead,
        not behind.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Build a buffer month, then pay yourself a salary
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Save one full baseline month's worth of expenses (here, ~$2,800) in a separate
          account first, before optimizing anything else. This is what actually protects
          you from a bad month, not a spreadsheet.
        </li>
        <li>
          Once that buffer exists, route all client/commission income into that account
          as it arrives, whatever the amount.
        </li>
        <li>
          Pay yourself a fixed "salary" out of it every month — your baseline amount, or
          a bit more once the buffer is comfortably above one month's expenses.
        </li>
        <li>
          In a $7,200 month, the extra $4,400 above your $2,800 salary stays in the
          buffer account. In a $2,800 month, you draw your normal salary and the buffer
          doesn't move. You never feel the swing directly.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Treat taxes and slow seasons as fixed costs, not surprises
      </h2>
      <p>
        If you're self-employed, set aside a fixed percentage (25–30% is a reasonable
        starting estimate for combined federal, state, and self-employment tax, though
        your actual rate depends on your bracket) of every payment the moment it lands,
        into its own account — before it ever reaches your salary calculation. Do the
        same for a known slow season: if work reliably dries up for six weeks a year,
        that's not bad luck, it's a predictable expense, and your baseline salary should
        already assume it's coming.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Track income that varies
      </Link>
    </BlogPostLayout>
  )
}
