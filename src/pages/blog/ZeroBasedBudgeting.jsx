import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'zero-based-budgeting-explained')

const FAQ = [
  {
    q: 'What does "zero-based" actually mean?',
    a: "It means your income minus every planned expense, savings contribution, and debt payment equals exactly zero — not that you spend everything, but that every dollar is assigned a category on purpose, including dollars assigned to savings.",
  },
  {
    q: 'How is this different from the 50/30/20 rule?',
    a: "50/30/20 sets percentage targets for needs, wants, and savings but doesn't ask whether your specific categories actually match those percentages. Zero-based budgeting has you name every category by dollar amount, so you consciously decide what $150 of 'dining out' looks like instead of letting a percentage silently cover for it.",
  },
  {
    q: "What if my expenses don't add up to exactly my income?",
    a: "If total planned expenses are below your income, assign the leftover somewhere on purpose — extra savings, a sinking fund, whatever you want it to do. If they're above your income, cut a variable category like dining out or entertainment until the budget balances to zero.",
  },
  {
    q: 'Do I need to redo my whole budget every month?',
    a: "You need to review it every month, since income and bills shift, but you're not starting from scratch — most categories carry over with small adjustments. The work is in catching overspending mid-month, not rebuilding the list from nothing each time.",
  },
  {
    q: 'What happens when I overspend a category mid-month?',
    a: "That $60 of overspend has to come from another category, not from thin air — the whole point of zero-based budgeting is that money doesn't appear from nowhere. Moving $60 out of 'dining out' to cover a grocery overrun is the step that actually teaches trade-offs.",
  },
  {
    q: 'Is zero-based budgeting too restrictive for irregular income?',
    a: "It actually works well for irregular income if you budget off your lowest expected amount for the month and treat anything above that as a bonus to assign afterward, rather than planning against an income number you're not sure you'll hit.",
  },
]

export default function ZeroBasedBudgeting() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-zero-based-budgeting-explained">
      <p>
        Zero-based budgeting means your income minus every planned expense, savings
        contribution, and debt payment equals exactly zero. Not "spend less than you earn"
        — every single dollar gets assigned to a category before the month starts, so there
        is no unassigned leftover sitting around to get spent on nothing in particular.
        That's the whole idea, and it's more restrictive than it sounds — deliberately so.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What the "zero" is actually doing
      </h2>
      <p>
        The zero isn't a target balance in your bank account — it's a target balance in your
        plan. Every dollar of income gets a named job before the month starts: rent,
        groceries, a line in savings, a line toward debt. If you can't name where a dollar
        is going, it doesn't get left "unassigned" — it gets argued over and assigned
        somewhere specific, even if that somewhere is just "extra savings." The discipline
        isn't in spending it all; it's in deciding on purpose rather than by default.
      </p>
      <p>
        This is also why zero-based budgeting feels harder than a percentage rule at
        first: a percentage lets you stop thinking once the split is set, while naming
        every category forces a small decision for every dollar, every month. That extra
        friction is the actual mechanism — it's much harder to let $150 quietly become $220
        of dining out when you had to write "$150" down on purpose at the start of the
        month.
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
        <li>
          Set each category up in a free <Link to="/budget" className="text-brand-600 hover:underline">budget tracker</Link>{' '}
          so you can see your running total against each one as the month goes, not just at the end.
        </li>
        <li>Add it all up. If it's below your income, assign the remainder somewhere on purpose. If it's above, cut a variable category until it balances to zero.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Benefits beyond the budget itself
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Every dollar has a named destination, so "where did my money go?" stops being a mystery.</li>
        <li>Savings and debt payments get treated as non-negotiable line items, not leftovers.</li>
        <li>Overspending in one category becomes a visible trade-off against another, not a vague sense of guilt.</li>
        <li>It surfaces categories you're quietly over-allocating to, like subscriptions, long before they pile up.</li>
        <li>Because the plan is made before the month starts, decisions happen with a clear head instead of mid-swipe.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        A zero-based budget is only as good as the record you keep against it, and that's
        where a spreadsheet or a mental tally usually breaks down. Categories get updated
        sporadically instead of as spending happens, so by the time you check, three
        overspends have already piled up invisibly. One person in a household often ends up
        doing all the category math alone, and a single arithmetic slip on a manual total
        can make a balanced budget look broken or a broken one look fine. Without a running,
        per-category total you can glance at any time, the "give every dollar a job" promise
        quietly turns into "assign every dollar a job once, then lose track of it."
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A single earner assigning every paycheck dollar to rent, groceries, savings, and a small fun-money line.</li>
        <li>A couple naming "extra" income from a bonus month as a specific line instead of letting it blend into checking.</li>
        <li>A freelancer budgeting off their lowest expected month and assigning anything above that afterward.</li>
        <li>Someone building an emergency fund who assigns it a fixed dollar line every month, same as rent.</li>
        <li>A household catching a grocery overspend mid-month and consciously trimming entertainment to cover it.</li>
        <li>Someone paying off a credit card who assigns a fixed extra-payment line every month instead of "whatever's left."</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Treating savings as whatever's left over instead of a named line item at the start.</li>
        <li>Building the budget once and never checking it against actual spending mid-month.</li>
        <li>Using last month's guess for variable categories without ever updating it as patterns change.</li>
        <li>Letting an overspend in one category just "happen" instead of consciously cutting another to balance it.</li>
        <li>Making categories too broad (one giant "spending" bucket) so the zero stops meaning anything specific.</li>
      </ul>

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
