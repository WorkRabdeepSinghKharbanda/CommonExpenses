import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'audit-your-recurring-bills')

const FAQ = [
  {
    q: 'How often should I audit recurring bills?',
    a: 'Once a year at minimum, plus a quick check any time your bank statement surprises you. Some people tie it to a fixed date, like the start of the year, so it does not get skipped.',
  },
  {
    q: 'What counts as a recurring bill versus a one-off purchase?',
    a: 'Anything that charges automatically on a schedule without you actively re-approving it each time — subscriptions, memberships, insurance premiums, software plans, utilities. A one-off purchase only happens once unless you buy it again.',
  },
  {
    q: 'Why do free trials cause so many surprise charges?',
    a: 'A free trial is designed to convert automatically unless you cancel before the deadline, and that deadline is rarely prominent. By the time the first charge hits your statement, the trial period has already ended and you are already a paying customer.',
  },
  {
    q: 'Should I cancel something I use occasionally but not often?',
    a: 'Compare the cost per use against what you would pay if you bought access only when you needed it. If a service costs more per month than you would spend using it a few times a year on demand, it is a candidate to cancel and re-subscribe later if needed.',
  },
  {
    q: "What's the fastest way to find every recurring charge?",
    a: 'Scan two to three months of bank and card statements rather than relying on memory, since memory tends to skip small or annual charges. A dedicated bills tracker that holds the full list going forward makes every future audit faster than starting from statements again.',
  },
  {
    q: 'Does it matter if a bill is small?',
    a: 'Small recurring charges are the ones most likely to be forgotten, and they add up the same as larger ones over a year. A $4.99 charge ignored for two years costs more than a single $100 purchase you actually noticed.',
  },
]

export default function AuditRecurringBills() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-audit-your-recurring-bills">
      <p>
        Subscriptions rarely get cancelled the moment you stop using them — they just sit
        on a card, renewing quietly, until you happen to scroll past a statement and
        wonder what "Streamify Plus" even is. A yearly audit catches this before it adds
        up to real money, and it takes a lot less time than people assume once you have a
        system for it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What a recurring-bill audit actually is
      </h2>
      <p>
        A recurring-bill audit is a deliberate pass through everything that charges you
        automatically on a schedule — monthly, yearly, or otherwise — to confirm each
        charge is still something you want and still priced the way you remember. It is
        different from budgeting, which looks at how much you are spending overall.
        An audit looks at whether each individual recurring line item still earns its
        place, independent of whether you can technically afford it.
      </p>
      <p>
        The reason this needs to be a separate, deliberate exercise is that recurring
        charges are designed to be invisible after the first one. You approve a
        subscription once, and from then on it renews without asking you again. Nothing
        in the process prompts you to reconsider it, so without an audit the only thing
        that ever removes a subscription is you noticing it by accident.
      </p>
      <p>
        It helps to separate recurring bills into two groups when you think about this:
        things you chose deliberately and still actively use, and things that became
        recurring almost by accident — a trial, a one-time purchase that turned out to be
        a subscription, a plan you upgraded once and never downgraded. The audit is
        mostly about finding and clearing out the second group, since the first group
        rarely needs much scrutiny beyond confirming the price hasn't quietly changed.
      </p>
      <p>
        It's also worth distinguishing a bill audit from simply cutting costs. The goal
        isn't to cancel as much as possible — it's to make sure every recurring charge is
        one you'd still sign up for today, at today's price, knowing what you actually use
        it for. Some of what survives an honest audit is worth keeping at a higher price
        than you'd expect, because you genuinely use it. The point is making that call
        deliberately instead of by default.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to run the audit
      </h2>
      <p>
        None of this requires special tools or a full afternoon. The steps below are
        designed to be done in one sitting, working directly off statements rather than
        memory, which is the part that actually makes the audit reliable.
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Pull the last 2-3 months of card and bank statements.</li>
        <li>List every recurring charge you find, however small, in one place.</li>
        <li>For each one, write down what it is for and when it last renewed.</li>
        <li>Ask, honestly, whether you used it in the last 30 days.</li>
        <li>Cancel anything you can't answer "yes" to without pausing to check.</li>
        <li>
          Log the survivors with their amount and due date in a{' '}
          <Link to="/bills">bills tracker</Link> so next year's audit takes five minutes
          instead of fifteen.
        </li>
      </ol>
      <p>
        That last step is what turns this from a one-time cleanup into something that
        compounds. Once the full list of recurring bills lives somewhere durable, next
        year's audit is just a review of an existing list rather than a from-scratch
        statement search — and reviewing a known list is a fraction of the effort of
        rebuilding one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this is worth doing
      </h2>
      <p>
        Most people underestimate their total recurring spend because it is spread across
        many small charges instead of one visible number. Seeing the full list in one
        place turns an abstract "I probably have some subscriptions" into a concrete total
        you can actually make decisions about. It also surfaces price increases that
        happen quietly over time — a service that started at $6 a month rarely announces
        when it becomes $11.
      </p>
      <p>
        There's also a decision-making benefit that has nothing to do with the money
        itself: once every recurring bill is visible in one place, it's much easier to
        tell whether a new subscription is actually additive or whether it overlaps with
        something you already pay for. Without that visibility, the natural tendency is
        to just add the new thing on top, because comparing it against an invisible list
        isn't really possible.
      </p>
      <p>
        There's a timing benefit too. Catching a bill before it renews, rather than after,
        means you're making the cancel-or-keep decision on your own schedule instead of
        reacting to a charge that already went through. Reacting after the fact usually
        means waiting for the next renewal to actually cancel, since most people don't
        bother chasing a refund for a charge that's already small.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        Trying to keep tabs on recurring bills from memory or a note on your phone fails
        in predictable ways. Annual charges are the easiest to forget, since a full year
        passes between one reminder and the next. Notes drift out of date the moment a
        price changes or a new subscription gets added, because updating a scattered note
        requires remembering it exists in the first place. And without a running total,
        it is easy to approve "just one more" small subscription without realizing how
        many of those you already have.
      </p>
      <p>
        There's also no built-in prompt to revisit anything. A spreadsheet or note only
        tells you what you wrote down the day you wrote it, not what's happening to your
        statement six months later. Catching a renewal before it charges you, instead of
        after, requires something that actually holds due dates and surfaces them —
        not a list you have to remember to reopen.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <p>
        An audit tends to surface the same handful of patterns in almost every household,
        even though the specific services differ. Recognizing the pattern is often enough
        to know what to look for in your own statements.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>A streaming trial that converted to a paid plan eight months ago, unused since month two.</li>
        <li>An annual software license that renewed last week and only gets noticed this week.</li>
        <li>A gym membership kept "just in case," never checked against your actual gym attendance.</li>
        <li>A cloud storage plan upgraded for one large file transfer, never downgraded afterward.</li>
        <li>Two overlapping subscriptions covering the same thing, like two music services at once.</li>
        <li>A family plan you're still paying for after everyone else quietly moved to their own account.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Only checking the current statement instead of a few months, which hides anything annual.</li>
        <li>Judging a subscription by its price instead of actual recent use.</li>
        <li>Cancelling in a browser tab and forgetting to also cancel in the app store or vice versa.</li>
        <li>Not writing down renewal dates, so the same bill surprises you again next year.</li>
        <li>Treating the audit as a one-time cleanup instead of a recurring habit.</li>
        <li>Assuming a subscription is cancelled just because you stopped using the service.</li>
      </ul>
      <p>
        That last one trips up more people than it should. Plenty of services keep
        charging a card long after someone has mentally moved on, because stopping use
        and cancelling the account are two separate actions — only one of them actually
        stops the bill.
      </p>

      <Link to="/bills" className="btn-primary inline-block">
        Track your recurring bills
      </Link>
    </BlogPostLayout>
  )
}
