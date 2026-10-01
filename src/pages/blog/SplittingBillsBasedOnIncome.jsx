import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'splitting-bills-based-on-income',
  title: 'Splitting bills when someone earns a lot more than everyone else',
  description:
    'How to split shared expenses proportionally to income instead of splitting everything evenly, and how to bring it up without it being awkward.',
  date: '2026-06-18',
  category: 'split',
}

const FAQ = [
  {
    q: "Is it actually fair to split bills by income instead of evenly?",
    a: "Fairness here depends on what you're optimizing for. An even split treats every dollar the same regardless of income; a proportional split treats the burden the same — the idea being that an equal dollar amount can be a much bigger strain for someone earning less. Neither is objectively correct; it's a choice both people need to agree on.",
  },
  {
    q: "How do you calculate a proportional split?",
    a: "Add both incomes together to get a combined total, then work out what percentage of that total each person earns. Apply those percentages to the shared expenses — so if one person earns 70% of the combined income, they'd cover 70% of the shared bills, rather than a flat half.",
  },
  {
    q: "How do I bring this up without it being awkward?",
    a: "Frame it around the shared goal — both people being able to comfortably cover their costs — rather than making it about judging each other's income. It's usually easier to raise once there's a concrete number to look at together, rather than as an abstract hypothetical conversation.",
  },
  {
    q: "Should the split be based on gross income or take-home pay?",
    a: "Take-home pay is usually more accurate, since it reflects what's actually available to spend after taxes and deductions. Gross income can work as a simpler proxy if both people's deductions are roughly similar, but it can distort the split if one person has significantly different taxes or withholdings.",
  },
  {
    q: "What if income changes — do we recalculate every time?",
    a: "Not every small fluctuation, but it's worth revisiting the split after any meaningful change — a raise, a job change, a reduction in hours. Treating the split as a periodic check-in rather than a one-time decision keeps it fair as circumstances shift.",
  },
  {
    q: "Does a proportional split work for all shared expenses, or just some?",
    a: "It tends to work best for recurring, necessary shared costs — rent, utilities, groceries. Discretionary shared spending, like a vacation, is often easier to handle separately, since it's optional for both people and doesn't carry the same necessary-cost logic.",
  },
]

export default function SplittingBillsBasedOnIncome() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-splitting-bills-based-on-income">
      <p>
        Splitting every shared bill straight down the middle feels fair because it's simple — but
        simple isn't the same as fair when one person earns substantially more than the other.
        An even split can mean one person has plenty left over while the other is stretched thin
        covering the exact same dollar amount. A proportional split fixes that without anyone
        needing to cover more than their share relative to what they actually earn.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Splitting bills based on income means dividing shared expenses in proportion to what each
        person earns, rather than splitting the total evenly regardless of income. Someone
        earning twice as much as their partner would cover roughly twice the dollar amount of
        shared bills — not because they're being penalized for earning more, but because that
        amount represents a comparable share of their income, rather than a disproportionate one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Both people share their take-home income, ideally as an ongoing agreement rather than a one-time disclosure.</li>
        <li>Add the two incomes together to get a combined total, then calculate each person's percentage share of that total.</li>
        <li>List every shared recurring expense — rent, utilities, groceries, shared subscriptions — and apply each person's percentage to the total.</li>
        <li>Log the shared expenses and each person's share in a <Link to="/split">bill-splitting tracker</Link>, so the calculation isn't something either person has to redo by hand every month.</li>
        <li>Revisit the split whenever either income changes meaningfully, rather than letting an outdated split run indefinitely.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <p>
        A proportional split means neither person's share of shared bills eats a disproportionate
        chunk of their actual income. It tends to reduce resentment on both sides — the
        lower earner isn't stretched thin to match an even split, and the higher earner isn't
        covering an arbitrary extra amount with no clear logic behind it. It also gives both
        people a concrete number to refer back to, instead of renegotiating the split informally
        every time a bill comes up.
      </p>
      <p>
        Having the logic written down also removes a lot of the emotional weight from the
        conversation. Instead of one person having to ask for a bigger share or the other
        offering to cover more, the percentages do that work automatically based on numbers both
        people already agreed were fair. That tends to make the whole arrangement feel more like
        a shared system than an ongoing negotiation.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        Without a clear record, proportional splitting tends to drift back toward rough
        guesswork — someone remembers the percentages were "about 60/40" without the actual
        numbers in front of them, and small bills get rounded informally until the running total
        no longer matches what was actually agreed. If incomes change and nobody recalculates,
        the split quietly becomes less fair than either person realizes, simply because no one is
        tracking it against the current numbers.
      </p>
      <p>
        It also tends to surface as a one-sided burden: whoever happens to be better with mental
        math or more comfortable bringing up money ends up doing all the recalculating, while the
        other person just accepts whatever number comes out. A written, shared record keeps the
        split something both people can check independently, rather than something only one
        person actually understands.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A couple moving in together where one person earns significantly more and wants the split to reflect that.</li>
        <li>Roommates with very different jobs and pay, splitting rent and utilities proportionally instead of evenly.</li>
        <li>One partner going part-time or returning to school, prompting a temporary adjustment to the split.</li>
        <li>A couple after a raise or promotion for one person, revisiting the split to reflect the new income gap.</li>
        <li>Two people combining finances for a shared household expense, like groceries, while keeping other spending separate.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Agreeing on a proportional split once and never updating it as incomes change.</li>
        <li>Using gross income when take-home pay would reflect the real difference more accurately.</li>
        <li>Applying the proportional split to discretionary spending that one person didn't actually want to share.</li>
        <li>Avoiding the conversation entirely because it feels awkward, and defaulting to an even split that quietly causes resentment.</li>
        <li>Doing the percentage math from memory each month instead of keeping a consistent, shared record.</li>
      </ul>

      <Link to="/split" className="btn-primary inline-block">
        Split your bills by income
      </Link>
    </BlogPostLayout>
  )
}
