import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'budgeting-with-irregular-income')

const FAQ = [
  {
    q: 'Why not just budget off my average monthly income?',
    a: "An average smooths over the months that actually matter. If you earned $3,000, $6,500, $2,800, and $7,200 over four months, the average is $4,875 — but you never actually hold $4,875 in any single month. Budgeting to the average overspends in the low months and only gets noticed when a bill is due.",
  },
  {
    q: "What exactly is a 'baseline' income?",
    a: "Your baseline is the lowest realistic month from the last 6–12 months, excluding genuine flukes like an unpaid vacation month. It's the number your fixed monthly expenses — rent, utilities, groceries, minimum debt payments — need to fit inside, since it's the amount you can count on in a bad month.",
  },
  {
    q: "How big should my buffer account be before I start 'paying myself a salary'?",
    a: "Aim for at least one full baseline month's worth of expenses saved before relying on the salary system day to day. That buffer is what actually absorbs a bad month — without it, the salary system just delays the problem instead of solving it.",
  },
  {
    q: 'How much should I set aside for taxes if I\'m self-employed?',
    a: "A commonly used starting estimate is 25–30% of every payment, set aside the moment it lands, before it factors into your salary calculation. Your actual rate depends on your tax bracket and situation, so treat that range as a starting point to refine, not a fixed rule.",
  },
  {
    q: "What do I do with income above my baseline in a strong month?",
    a: "It stays in the buffer account rather than getting spent as it arrives. That's what lets a $7,200 month and a $2,800 month both result in the same fixed salary being paid out — the swing gets absorbed by the buffer, not by your spending.",
  },
  {
    q: 'Does this system work for commission-based income, not just freelancing?',
    a: "Yes — the mechanism is the same regardless of why income varies. Route every commission payment into the buffer account as it arrives, pay yourself a fixed baseline salary out of it, and let the buffer smooth out the gap between strong and weak months.",
  },
  {
    q: 'How do I handle a predictable slow season, like a seasonal business?',
    a: "Treat it as a known, fixed cost rather than a surprise. If work reliably dries up for six weeks a year, your baseline salary calculation should already assume that gap is coming, the same way it assumes rent is coming every month.",
  },
]

export default function IrregularIncomeBudgeting() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-irregular-income-budgeting">
      <p>
        Budgeting off a 12-month average is the first mistake most people with irregular
        income make. If you earned $3,000, $6,500, $2,800, and $7,200 over four months,
        the average is $4,875 — but you never actually have $4,875 in a given month.
        Budgeting to the average means overspending in the low months and only noticing
        when the rent is due.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Budgeting with irregular income means separating two things that a steady
        paycheck lets you ignore: what you're allowed to spend each month, and how much
        actually lands in your account that month. The baseline method fixes your
        monthly spending to your worst realistic month, and uses a buffer account to
        absorb the gap between that baseline and whatever you actually earn — so a strong
        month and a weak month both feel the same from a spending standpoint.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Look at your last 6–12 months of income and find the lowest one that wasn't a
          genuine fluke. That number is your baseline — the amount your fixed monthly
          costs need to fit inside.
        </li>
        <li>Save one full baseline month's worth of expenses into a separate buffer account before changing anything else about how you spend.</li>
        <li>Route every client or commission payment into that buffer account as it arrives, regardless of the amount.</li>
        <li>Pay yourself a fixed "salary" out of the buffer every month — your baseline amount, or slightly more once the buffer comfortably exceeds one month's expenses.</li>
        <li>
          Set aside a fixed percentage for taxes the moment each payment lands, before it
          factors into your salary. Use the{' '}
          <Link to="/budget" className="text-brand-600 hover:underline">
            budget tracker
          </Link>{' '}
          to keep your fixed baseline costs and your actual monthly salary draw in one place.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Every month looks the same from a spending perspective, regardless of how much actually came in.</li>
        <li>A strong month builds the buffer instead of getting spent immediately, which is what protects a future weak month.</li>
        <li>Taxes and slow seasons stop being surprises because they're already priced into the baseline.</li>
        <li>You stop making spending decisions based on the most recent payment, which is where irregular-income budgets usually break down.</li>
      </ul>
      <p>
        It also makes it much easier to answer the question that actually matters day to
        day — "can I afford this right now?" — because the answer depends only on your
        fixed salary and the buffer balance, not on whether this particular week happened
        to bring in a big payment or a quiet one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Where manual tracking falls short</h2>
      <p>
        Without a running total of the buffer account's balance, it's easy to lose track
        of whether you're actually ahead or behind your baseline — a few strong months in
        a row can feel like permission to raise your spending, right before a slow stretch
        arrives. Mental math on an average income also hides exactly how far a bad month
        falls short of what's needed, which is the number that matters most when fixed
        bills are due regardless of how the month went.
      </p>
      <p>
        It also makes the tax portion easy to lose. If 25–30% of each payment isn't
        pulled out and labeled the moment it arrives, it quietly blends into the rest of
        the buffer and gets mistaken for spendable money — which is how a tax bill ends
        up being paid partly out of next month's baseline salary instead of the account
        it was always meant to come from.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A freelancer with four client payments a month, each arriving on its own schedule.</li>
        <li>A salesperson whose commission swings from $2,800 in a slow month to $7,200 after a big close.</li>
        <li>A seasonal business owner with six predictable slow weeks every year.</li>
        <li>A gig worker setting aside a fixed percentage of each payout for taxes before spending any of it.</li>
        <li>Someone who just went freelance and is still using their old employer's salary as their mental budget baseline.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Budgeting off a 12-month average instead of the lowest realistic month.</li>
        <li>Spending a strong month's extra income immediately instead of letting it build the buffer.</li>
        <li>Setting aside taxes only once a year instead of the moment each payment lands.</li>
        <li>Treating a predictable slow season as a one-off surprise every time it happens.</li>
        <li>Skipping the buffer account and relying on willpower to under-spend in good months.</li>
      </ul>
      <p>
        The baseline-and-buffer approach trades a small amount of complexity up front —
        picking a baseline, building a buffer, setting aside taxes — for a much simpler
        day-to-day reality afterward: the same fixed salary, deposited on the same
        schedule, no matter how the month actually went.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Track income that varies
      </Link>
    </BlogPostLayout>
  )
}
