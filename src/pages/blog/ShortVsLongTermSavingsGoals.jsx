import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'short-term-vs-long-term-savings-goals',
  title: 'Short-term vs. long-term savings goals: should you keep them separate?',
  description:
    'Why mixing a vacation fund with a house down payment in one pool causes problems, and how to structure separate goals without overcomplicating things.',
  date: '2026-06-04',
  category: 'savings',
}

const FAQ = [
  {
    q: 'Why not just keep all my savings in one pool?',
    a: "One pool works until you need to spend from it for one goal and aren't sure how much that leaves for the other. A vacation withdrawal from a pool that also holds your house down payment fund means you have to do mental math every time to know if you're still on track for the bigger goal.",
  },
  {
    q: 'How many separate savings goals is too many?',
    a: "There's no fixed number, but the point of separating goals is clarity, not complexity. If you have so many separate goals that you can't remember what each one is for without checking, you've gone past the point where separation was helping.",
  },
  {
    q: 'Does a short-term goal need a different approach than a long-term one?',
    a: "The structure is the same — a target amount and a timeline — but a short-term goal usually has a firmer deadline (a trip booked for a specific date) while a long-term goal has more flexibility in exactly when it's reached. That difference affects how much you save monthly, not whether you track it.",
  },
  {
    q: "What if a short-term goal and a long-term goal compete for the same money?",
    a: "This is exactly the problem separate tracking is meant to surface. If funding a vacation next month would eat into progress on a multi-year goal, you want to see that clearly before you commit, not discover it after the fact.",
  },
  {
    q: "Should I prioritize short-term or long-term goals when money is tight?",
    a: "There's no universal answer, but it should be a decision you make deliberately — looking at both targets side by side — rather than whichever goal happens to be top of mind that week. Separate tracking is what makes that side-by-side comparison possible.",
  },
  {
    q: "Do I need separate bank accounts for each goal, or is tracking enough?",
    a: "Separate accounts can help with the temptation to dip into one goal for another, but they're not required. What matters more is that each goal has its own clearly tracked target and progress, whether that lives in one account or several.",
  },
]

export default function ShortVsLongTermSavingsGoals() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-short-term-vs-long-term-savings-goals">
      <p>
        It's common to start with one general "savings" pool and add every goal to it —
        vacation money, a house down payment, a new laptop, an emergency cushion — all sitting
        in the same number. It feels simple at first. It stops feeling simple the first time you
        need to spend from it and aren't sure what that leaves for everything else.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Separating short-term and long-term savings goals means giving each goal its own target
        amount and its own tracked progress, rather than letting them share one combined total.
        A short-term goal is typically something with a near deadline and a fixed cost — a trip,
        a piece of equipment, a holiday gift budget. A long-term goal is something further out
        with more flexibility in timing — a down payment, a wedding, a fund you're building over
        years. Both deserve a number you can check on their own.
      </p>
      <p>
        The distinction matters less for the label itself — short-term versus long-term — and
        more for the fact that each goal needs its own visibility. A vacation and a down payment
        have very different timelines and very different tolerance for being dipped into, and
        that difference gets lost the moment they're tracked as one number instead of two.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>List out every goal you're currently saving toward, with a rough target amount for each.</li>
        <li>Sort them into short-term (next few months) and long-term (a year or more out).</li>
        <li>Give each one its own entry in a <Link to="/savings">savings tracker</Link> rather than one combined figure.</li>
        <li>Decide how much goes toward each goal per month, prioritizing deliberately rather than defaulting to whichever feels most urgent.</li>
        <li>When you need to spend from a short-term goal, check it against its own total — not the combined number — so the long-term goal's progress stays visible and untouched.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <p>
        Keeping goals separate means you always know exactly how close you are to each one,
        independently. It prevents the common mistake of spending what you thought was "extra"
        savings, only to realize it was actually earmarked for something bigger. It also makes
        trade-offs visible — if funding a short-term goal would meaningfully slow down a
        long-term one, you see that before you commit the money, not after.
      </p>
      <p>
        It also makes celebrating progress more meaningful. Hitting a short-term goal feels like
        an actual milestone when you can see its own total reach the target, rather than being
        buried inside one large number that never seems to move much because a bigger, slower
        goal is also drawing from it. Separate goals give you more frequent, visible wins along
        the way.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        A single combined number hides exactly the information you need most: how much of it is
        actually free to spend versus already spoken for. Without separate totals, it's easy to
        make a withdrawal that feels reasonable in isolation but quietly sets back a goal you
        weren't even thinking about at the time. And if more than one goal is being funded by one
        person doing all the mental tracking, that person is the only one who can say with
        confidence where things stand.
      </p>
      <p>
        This also tends to distort how progress feels over time. A combined pool that grows
        steadily can hide the fact that one specific goal inside it hasn't moved in months,
        because the other goal's contributions are masking the lack of progress. By the time
        that imbalance is noticed, the short-term goal's deadline may already be close.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A vacation fund and a house down payment fund sitting in the same account, with no way to tell how much of the total is actually "spendable."</li>
        <li>An emergency fund accidentally dipped into for a short-term purchase because it wasn't tracked separately from other savings.</li>
        <li>A couple saving for a wedding and a home at the same time, needing to see both targets clearly to decide how to split monthly contributions.</li>
        <li>Someone saving for a laptop upgrade who doesn't realize it's slowing down a multi-year goal until the totals are separated.</li>
        <li>A holiday gift budget that quietly borrows from a long-term goal every December because it was never given its own line.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Combining every goal into one number because it feels easier to manage at first.</li>
        <li>Spending from a long-term goal's balance for a short-term need without updating the target or noticing the setback.</li>
        <li>Creating so many separate goals that tracking them becomes its own burden.</li>
        <li>Never revisiting monthly allocations as priorities shift between short-term and long-term goals.</li>
        <li>Assuming a shared household goal is being tracked by someone else when nobody actually owns it.</li>
      </ul>

      <Link to="/savings" className="btn-primary inline-block">
        Set up your savings goals
      </Link>
    </BlogPostLayout>
  )
}
