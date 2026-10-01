import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'cash-envelope-vs-app-budgeting')

const FAQ = [
  {
    q: 'What exactly is the cash envelope method?',
    a: "You withdraw your budgeted spending money in cash at the start of the month and physically divide it into envelopes labeled by category — groceries, gas, entertainment. When an envelope is empty, spending in that category stops until next month, by design.",
  },
  {
    q: 'Is cash really harder to overspend than cards?',
    a: "For most people, yes — handing over physical bills registers as a loss in a way a card tap doesn't, so the spending decision feels more real in the moment. That's the entire mechanism behind envelopes: friction, not willpower.",
  },
  {
    q: "Can I use envelopes for rent or subscriptions?",
    a: "Not practically. Anything paid by auto-draft, card, or bank transfer doesn't fit a cash system at all, so envelopes only ever cover a slice of a real budget — the discretionary, pay-in-person categories.",
  },
  {
    q: 'Why would I pick an app over envelopes if cash controls spending better?',
    a: "Because control isn't the only problem. If you don't actually know where your money goes — not just that you overspent, but on what, and how it compares to last month — an app's transaction history gives you that visibility, which cash with no receipts never will.",
  },
  {
    q: 'Can I combine both methods?',
    a: "Yes, and it's often the most realistic setup: track fixed bills and card spending in an app, since you can't envelope a subscription anyway, and withdraw cash only for the one or two categories where you consistently overspend, like dining out or takeout.",
  },
  {
    q: "What's the actual failure mode if I just use an app and no cash?",
    a: "An app will tell you exactly how much you overspent on dining out this month — it just won't stop you from doing it again next week. If your problem is sticking to a limit rather than seeing one, a purely digital system without any physical constraint can feel like watching the same overspend happen on repeat.",
  },
]

export default function EnvelopeVsAppBudgeting() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-cash-envelope-vs-app-budgeting">
      <p>
        The cash envelope method — withdrawing your budget in cash and physically dividing
        it into envelopes labeled "groceries," "gas," "entertainment" — predates smartphones
        by decades, and it still works for a specific kind of spender. Whether it works
        better than a budgeting app depends less on the method and more on why your budget
        breaks down in the first place.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What each method actually is
      </h2>
      <p>
        Envelopes are a physical constraint: a fixed amount of cash per category, and once
        it's gone, spending in that category stops for the month. An app is a visibility
        tool: it records every transaction as it happens and shows you category totals
        against a limit you set, but it doesn't physically stop a card swipe. They solve two
        different failure modes — one is about stopping power, the other is about seeing the
        pattern in the first place — and most people's budgets break down for one of those
        two reasons, not both equally.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to figure out which one fits
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Look back at your last 2-3 months: did you know you were overspending as it happened, or only after the fact?</li>
        <li>If you knew and spent anyway, your problem is stopping power — start with cash envelopes for your worst 1-2 categories.</li>
        <li>If you had no idea until the bank balance dropped, your problem is visibility — log every transaction in a category-based tracker first.</li>
        <li>
          Set up your categories in a free <Link to="/budget" className="text-brand-600 hover:underline">budget tracker</Link>{' '}
          either way — even an envelope system benefits from a monthly record of what each category actually cost.
        </li>
        <li>Reassess after a full month; most people end up using a mix, not one method exclusively.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Envelopes win when the problem is overspending
      </h2>
      <p>
        Cash is a hard stop. When the "dining out" envelope is empty, you cannot spend more
        on dining out that month — there's no swipe-and-worry-later. People consistently
        spend more with cards than cash because a card swipe doesn't feel like losing money
        the way handing over bills does. If your pattern is "I know my budget, I just don't
        stick to it," a physical constraint beats a digital reminder every time.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Apps win when the problem is visibility
      </h2>
      <p>
        Envelopes don't work for rent, subscriptions, or anything paid by card or
        auto-draft — which is most fixed expenses today. They also give you zero history:
        once the cash is spent, there's no record of what it went to unless you kept every
        receipt. If your actual problem is "I don't know where my money goes" rather than
        "I can't stop spending," an app that logs every transaction gives you the pattern
        data envelopes can't.
      </p>
      <p>
        Visibility compounds in a way a cash constraint doesn't: once you can see that
        dining out is consistently your biggest discretionary category three months running,
        that's a pattern you can actually plan around — raise the limit on purpose, cut it
        on purpose, or leave it and stop feeling guilty about a number you've now decided is
        acceptable. Cash alone never gives you that comparison across months.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short either way
      </h2>
      <p>
        A plain notebook or a mental running total has the same weaknesses regardless of
        whether you're using cash or cards: entries get forgotten in the moment, there's no
        automatic running total to check against, and small math errors compound unnoticed
        over a month. Envelopes fix the overspending problem but not the record-keeping one —
        you still don't know what you spent the cash on unless you write it down somewhere.
        A tracker that logs transactions as they happen removes that gap without requiring
        you to give up the physical-cash constraint if that part is working for you.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Someone who always "has enough" for groceries but can't explain where $300 of discretionary spending went.</li>
        <li>A couple who overspends on dining out every single month despite knowing the number in advance.</li>
        <li>Someone switching jobs who suddenly has irregular income and needs to see patterns, not just enforce limits.</li>
        <li>A student using cash for weekly spending money but tracking tuition and rent digitally.</li>
        <li>A household that stopped using cash entirely and realized they'd lost all sense of their weekly spend.</li>
        <li>A saver using cash envelopes for gifts and holiday spending to avoid a December card-balance surprise.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Trying to envelope fixed bills that are paid automatically, which cash can't touch anyway.</li>
        <li>Switching to an app expecting it to stop overspending the way cash does, then feeling like it "didn't work."</li>
        <li>Never logging what cash was actually spent on, losing the one advantage a tracker gives you.</li>
        <li>Picking a method based on what worked for someone else instead of your own overspending pattern.</li>
        <li>Giving up after one bad month instead of adjusting which categories get the cash treatment.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A hybrid that covers both
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Track fixed bills and card spending in an app — you can't envelope a subscription anyway.</li>
        <li>Withdraw cash only for the categories where you overspend most: dining out, takeout, impulse retail.</li>
        <li>Log the cash category total in your tracker at month-end so it still shows up in your full picture.</li>
        <li>Revisit after 2-3 months — if the cash categories stop overspending, you may not need the envelope at all.</li>
      </ul>
      <p>
        The honest answer is that neither method fixes a budget with no categories or
        limits at all — both need a real number to spend against before they can help you
        stick to it.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Try digital budget tracking
      </Link>
    </BlogPostLayout>
  )
}
