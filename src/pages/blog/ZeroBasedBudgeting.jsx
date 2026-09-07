import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'zero-based-budgeting-explained',
  title: 'Zero-based budgeting explained: give every dollar a job',
  description:
    'How zero-based budgeting works, why it forces better spending decisions than a percentage rule, and how to start this month.',
  date: '2026-03-26',
}

export default function ZeroBasedBudgeting() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Zero-based budgeting means your income minus every planned expense, savings
        contribution, and debt payment equals exactly zero. Not "spend less than you earn"
        — every single dollar gets assigned to a category before the month starts, so there
        is no unassigned leftover sitting around to get spent on nothing in particular.
        That's the whole idea, and it's more restrictive than it sounds — deliberately so.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this beats a flat percentage rule
      </h2>
      <p>
        A rule like 50/30/20 (needs/wants/savings) is a decent starting ratio, but it
        doesn't ask whether your $600 "wants" allocation actually matches what you value.
        Zero-based budgeting forces you to name every category by hand: $400 groceries,
        $150 dining out, $80 haircuts, $300 into an emergency fund. If the categories don't
        add up to your income, you have to consciously cut one — not just watch a
        percentage silently absorb the difference.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Setting it up this month
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>List your total expected income for the month.</li>
        <li>List every expense category, starting with fixed bills (rent, utilities, loan payments).</li>
        <li>Add savings and debt paydown as line-item categories, not what's left over.</li>
        <li>List variable categories (groceries, gas, entertainment) using last month's actuals as a starting guess.</li>
        <li>Add it all up. If it's below your income, assign the remainder somewhere on purpose — extra savings, a sinking fund, whatever you want it to do.</li>
        <li>If it's above your income, cut a variable category until it balances to zero.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The part people skip: mid-month adjustments
      </h2>
      <p>
        Zero-based budgets aren't set-and-forget — if groceries run over by $60 halfway
        through the month, that $60 has to come from another category, not from thin air.
        This is the step that actually teaches trade-offs: moving $60 out of "dining out"
        feels different than just watching a bank balance drop. Check your categories
        weekly, not just at month-end, so you catch the overspend while there's still time
        to adjust something else.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Build your zero-based budget
      </Link>
    </BlogPostLayout>
  )
}
