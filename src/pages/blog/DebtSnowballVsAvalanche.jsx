import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'debt-snowball-vs-avalanche',
  title: "Debt snowball vs. debt avalanche: which pays off debt faster?",
  description: "The math behind both debt payoff methods, why the mathematically optimal one isn't always the one that works, and how to pick between them.",
  date: '2026-04-09',
}

export default function DebtSnowballVsAvalanche() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Say you're carrying three balances: a $1,200 store card at 27% APR, a $4,500
        personal loan at 11%, and a $9,000 car loan at 6%. You have $400 a month to throw
        at debt beyond the minimums. Which one do you attack first? The snowball and the
        avalanche methods give different answers, and the gap between them is smaller
        than the internet argument about it suggests.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The avalanche: pay the highest interest rate first
      </h2>
      <p>
        Avalanche puts every extra dollar toward the highest-APR balance — here, the
        store card at 27% — while paying minimums on everything else. Once it's gone,
        the money rolls to the next-highest rate. This minimizes total interest paid,
        full stop. In the example above, avalanche typically saves $150–$300 in interest
        over the payoff period compared to snowball, depending on exact minimums and
        timeline.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The snowball: pay the smallest balance first
      </h2>
      <p>
        Snowball ignores interest rate and targets the smallest balance — the $1,200
        store card, coincidentally the same one here, but often not. Once it's paid off,
        you get a fast, visible win, and that payment amount rolls into the next-smallest
        balance. The appeal isn't math, it's momentum: closing an account in month three
        instead of watching a slowly-shrinking number for two years is what keeps people
        from quitting halfway through.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to actually decide
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          If your balances are already ordered smallest-to-largest by roughly matching
          interest rate (as in the example), the methods converge — pick either.
        </li>
        <li>
          If the highest-rate balance is also your largest, avalanche asks you to stare
          at it the longest with no progress to show for months. If you've abandoned a
          payoff plan before, snowball's early win is worth more than the interest you
          give up.
        </li>
        <li>
          If you're disciplined enough to ignore the emotional wins — you've stuck with a
          budget before without needing quick feedback — avalanche is strictly better and
          costs you nothing but patience.
        </li>
        <li>
          A middle path: run avalanche, but if two balances are within a few percentage
          points of each other, order by size instead of rate. You lose almost no
          interest and keep some early momentum.
        </li>
      </ul>
      <p>
        Either way, the variable that matters more than the method is the extra payment
        amount. Doubling your extra payment from $200 to $400 a month cuts payoff time
        roughly in half — that swamps the difference between snowball and avalanche on
        most real balances.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Plan your payoff timeline
      </Link>
    </BlogPostLayout>
  )
}
