import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'tracking-expenses-as-a-couple')

const FAQ = [
  {
    q: 'Do we need a joint bank account to split expenses fairly?',
    a: "No. A joint account is one way to handle shared costs, but it isn't required — you can split and settle shared expenses between two separate accounts as long as costs are logged consistently and settled on a schedule you both stick to.",
  },
  {
    q: 'Is a 50/50 split fair if we earn different amounts?',
    a: "Not necessarily. A flat 50/50 split on shared costs takes a much bigger share of a lower earner's income than a higher earner's. Splitting shared costs proportionally to income — each partner covers the same percentage of their own income — is usually fairer when incomes are uneven.",
  },
  {
    q: 'What counts as a shared expense versus a personal one?',
    a: "A useful split is three buckets: fully shared (rent, utilities, shared groceries), individually owned (personal subscriptions, individual debt, personal spending money), and occasional shared (a joint trip, a gift for a mutual friend). Only the first and third buckets need a splitting system.",
  },
  {
    q: 'How often should we settle up shared expenses?',
    a: "A fixed schedule — the 1st and 15th of the month works well for many couples — beats settling after every individual purchase. Settling too often turns shared expenses into a constant back-and-forth; a fixed schedule turns it into routine bookkeeping.",
  },
  {
    q: "What if one partner's income changes significantly?",
    a: "Recalculate the proportional split ratio after a raise, a job change, or a period of reduced income — not every month. Treat it as a periodic check-in rather than something that needs constant adjustment.",
  },
  {
    q: 'How should we handle a big occasional cost like a vacation?',
    a: "Agree on the split ratio before booking anything, not after the bill arrives. Deciding the split in advance avoids a disagreement about who owes what right when you'd rather be enjoying the trip.",
  },
  {
    q: "What's the most common reason couples' expense-splitting systems fall apart?",
    a: "Relying on memory — 'I'll get the next one' — instead of logging each shared expense as it happens. Within a few weeks neither person can reliably reconstruct who actually paid for what, and the system quietly stops being used.",
  },
]

export default function CouplesExpenseTracking() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-couples-expense-tracking">
      <p>
        Merging finances entirely works for some couples and feels wrong for others —
        wanting separate accounts isn't a red flag, it's a preference. The problem it
        creates is purely logistical: shared costs like rent, groceries, and utilities
        still need to get paid and split from two separate pools of money, and "I'll get
        the next one" tracking breaks down within a few weeks.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Tracking shared expenses as a couple without merging accounts means building a
        lightweight system around three questions: what counts as shared, how it's split,
        and how often you settle up. None of those questions requires a joint account —
        they require a clear definition of what's shared, a fair split ratio, and a
        routine both people actually follow. Get those three things right and separate
        accounts work just as well as a joint one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Split your household costs into three buckets: fully shared (rent, utilities,
          shared groceries), individually owned (personal subscriptions, individual debt),
          and occasional shared (a joint trip, a mutual gift).
        </li>
        <li>
          Decide the split ratio for the shared buckets — 50/50 if incomes are similar, or
          proportional to income if they're not. On $8,000 combined income with $5,000 and
          $3,000 individually, a proportional split puts 62.5% of shared costs on the
          higher earner and 37.5% on the lower earner.
        </li>
        <li>Whoever pays for a shared expense logs it immediately with the amount and what it was for.</li>
        <li>Pick a fixed settle-up day — the 1st and 15th works for many couples — instead of settling after every purchase.</li>
        <li>
          For a big occasional cost like a vacation, agree on the split ratio before
          booking. The{' '}
          <Link to="/split" className="text-brand-600 hover:underline">
            expense-splitting calculator
          </Link>{' '}
          handles the math for both the recurring shared bucket and one-off costs like that.
        </li>
      </ol>
      <p>
        None of this requires both partners to use the same bank or the same budgeting
        habits elsewhere — the system only touches the shared-cost bucket, so whatever
        either of you does with the rest of your money stays entirely your own business.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Both partners keep full control over personal spending and individual accounts.</li>
        <li>A proportional split feels fairer than a flat one when incomes differ meaningfully.</li>
        <li>A fixed settle-up schedule removes the awkwardness of bringing up money every time a bill comes in.</li>
        <li>Agreeing on a split ratio before a big shared cost avoids a disagreement right when you'd rather not have one.</li>
      </ul>
      <p>
        Keeping the system this lightweight also makes it easier to actually stick to —
        a plan that requires merging accounts or adopting one partner's budgeting app
        tends to get abandoned by whoever didn't choose it. A shared log and a fixed
        settle-up day ask much less of either person.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Where manual tracking falls short</h2>
      <p>
        "I'll get the next one" tracking relies on both people remembering, roughly
        correctly, who paid for what over the past few weeks — and that memory degrades
        fast once groceries, utilities, and a few one-off costs are mixed together. One
        partner often ends up doing all the mental bookkeeping, which breeds quiet
        resentment even when the actual amounts involved are small. Without a running
        total of who owes whom, a "we're roughly even" feeling can be wrong in either
        direction for months before anyone checks.
      </p>
      <p>
        It also makes it harder to catch when the split itself has quietly gone stale —
        a raise, a new expense, or a change in work hours can shift what's actually fair
        long before either partner thinks to revisit the ratio, and without a running
        total there's no prompt to notice.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Rent and utilities split proportionally between partners earning different amounts.</li>
        <li>A grocery run paid by one partner, logged immediately instead of remembered later.</li>
        <li>A joint vacation with the split ratio agreed on before any flights are booked.</li>
        <li>A gift for a mutual friend, treated as an occasional shared cost rather than either partner's personal expense.</li>
        <li>One partner picking up a shared utility bill while traveling, logged the same day so it doesn't get forgotten.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Splitting everything 50/50 regardless of how different the two incomes are.</li>
        <li>Relying on memory instead of logging shared expenses as they happen.</li>
        <li>Letting one partner handle all the shared-expense bookkeeping by default.</li>
        <li>Settling up after every single purchase instead of on a fixed schedule.</li>
        <li>Agreeing on a vacation's split ratio only after the bill arrives, instead of before booking.</li>
      </ul>
      <p>
        None of this requires either partner to change how they bank or how they manage
        personal money — it only asks that shared costs get logged consistently and
        settled on a schedule you both actually keep.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Track shared expenses together
      </Link>
    </BlogPostLayout>
  )
}
