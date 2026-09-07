import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'tracking-expenses-as-a-couple',
  title: 'Tracking shared expenses as a couple without merging every account',
  description: 'A system for splitting and tracking shared costs as a couple while keeping separate accounts, including how to handle uneven incomes.',
  date: '2026-05-07',
}

export default function CouplesExpenseTracking() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Merging finances entirely works for some couples and feels wrong for others —
        wanting separate accounts isn't a red flag, it's a preference. The problem it
        creates is purely logistical: shared costs like rent, groceries, and utilities
        still need to get paid and split from two separate pools of money, and "I'll get
        the next one" tracking breaks down within a few weeks.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Define what's actually shared
      </h2>
      <p>
        Not every joint-household cost needs the same split. Split it into three
        buckets: fully shared (rent, utilities, shared groceries), individually owned
        (personal subscriptions, individual debt, personal spending money), and
        occasional shared (a joint trip, a gift for a mutual friend). Only the first and
        third buckets need a splitting system — the second bucket stays entirely
        separate, no tracking needed.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Proportional splits handle uneven incomes better than 50/50
      </h2>
      <p>
        If one partner earns $5,000/month and the other earns $3,000/month, a flat 50/50
        split on $2,000 of shared costs takes 40% of the lower earner's income and only
        20% of the higher earner's. Split proportionally to income instead: combined
        income is $8,000, so the higher earner covers 62.5% ($1,250) and the lower earner
        covers 37.5% ($750) of shared costs. Recalculate the ratio when either income
        changes meaningfully — a raise or a job change — not every month.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Log it as it happens, settle on a fixed schedule
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Whoever pays for a shared expense logs it immediately with the amount and what
          it was — don't rely on either person remembering a month of receipts.
        </li>
        <li>
          Pick a fixed settle-up day (the 1st and 15th works well) instead of settling
          after every purchase — this is what actually keeps the system going instead of
          fizzling out after two weeks.
        </li>
        <li>
          For a big occasional shared cost like a vacation, agree on the split ratio
          before booking anything, not after the bill arrives.
        </li>
      </ul>
      <p>
        The system doesn't require merging accounts, a joint card, or a shared budget
        for personal spending — it only needs the shared-cost bucket to be logged
        consistently and settled on a schedule both people actually stick to.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Track shared expenses together
      </Link>
    </BlogPostLayout>
  )
}
