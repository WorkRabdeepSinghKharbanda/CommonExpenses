import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'tracking-shared-utility-bills')

const FAQ = [
  {
    q: 'Why do utility bills cause more arguments than rent?',
    a: "Rent is a fixed number everyone agrees to up front. Utilities fluctuate month to month, arrive on different days, and often sit on one roommate's card by default — so there's no single agreed-on number to check against, which is exactly what creates disputes.",
  },
  {
    q: 'Should we split utilities evenly or by usage?',
    a: "Either works as long as you pick one and stick to it. An even split is simplest and fine for bills like internet or trash where usage doesn't really vary by person. Usage-based splits make more sense for bills like electric, where one person's AC or home-office setup clearly drives the cost up.",
  },
  {
    q: 'One roommate always forgets to pay their share — what do we do?',
    a: "Separate 'the bill got paid' from 'everyone paid their share.' If you only track the first, a roommate who forgets looks the same as one who paid on time. Log each person's share as a separate line so the gap is visible immediately, not discovered weeks later.",
  },
  {
    q: 'How do we handle a bill that spikes unexpectedly?',
    a: "Check it against your own history before assuming it's unfair. If you've logged a few months of bills, you can see whether a $220 electric bill is a genuine seasonal spike (summer AC, winter heat) or an outlier worth asking about. Without that record, every high bill looks like a dispute waiting to happen.",
  },
  {
    q: "Do we need an app for this, or is a shared note enough?",
    a: "A shared note works until someone forgets to update it, which is the usual failure point. What matters is a running, dated log that shows amount, who paid, and who still owes — a plain budget tracker that lets you tag shared expenses does this with less friction than a note everyone has to remember to open.",
  },
  {
    q: 'What if one roommate wants to switch providers to save money?',
    a: "That's a separate decision from tracking, but tracking makes it an easier one — if you already have several months of bills logged, you have real numbers to compare a new plan against instead of guessing whether switching is actually worth the hassle.",
  },
]

export default function SharedUtilityBills() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-tracking-shared-utility-bills">
      <p>
        Rent is fixed and predictable — everyone knows the number in advance. Utilities are
        the opposite: the electric bill swings from $80 in April to $220 in August, the
        internet bill is flat but nobody remembers whose card it's on, and the gas bill
        shows up on a different day every month. That unpredictability, not the dollar
        amount, is what actually causes roommate arguments.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What "tracking shared utilities" actually means
      </h2>
      <p>
        It isn't a budgeting exercise — it's a record-keeping one. A shared utility bill is
        any recurring cost (electric, gas, water, internet, trash) that one person pays on
        behalf of a household and gets reimbursed for. The system only needs to answer two
        questions at a glance: how much was this bill, and who has paid their share of it.
        Everything else — the exact split formula, who's "right" about usage — is a separate
        conversation that gets a lot calmer once those two facts are no longer in dispute.
      </p>
      <p>
        It also matters who the bill is in. Most providers only let one name sit on the
        account, which means one roommate is always the one fronting the money and the
        others are always the ones reimbursing. That's fine as a logistics choice, but it's
        worth saying out loud rather than leaving it as an assumption — the person on the
        account is doing unpaid admin work for the household every single month, and a
        shared log is partly a way of making that work visible instead of invisible.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A system that takes 2 minutes per bill
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Log every utility bill as it arrives — amount, due date, which provider.</li>
        <li>Decide the split once (even split, or by usage) and apply it consistently.</li>
        <li>Mark who has paid their share, not just that "the bill is paid."</li>
        <li>
          Use a free <Link to="/budget" className="text-brand-600 hover:underline">budget tracker</Link>{' '}
          with a shared or household category so the log lives somewhere everyone can check,
          instead of in one person's head or a single phone's notes app.
        </li>
        <li>Review the log monthly so seasonal spikes (AC in summer, heat in winter) don't feel like a surprise.</li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this is worth the two minutes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Nobody has to front an entire bill and then chase three people for Venmo.</li>
        <li>Disputes over a high bill get settled with last month's number, not a guess.</li>
        <li>A new roommate can see exactly what to expect before moving in.</li>
        <li>Nobody has to remember whose turn it was to pay — the log says so.</li>
        <li>Moving out at lease-end is simpler because there's no backlog of "who owes what" to untangle.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where "just Venmo me later" falls short
      </h2>
      <p>
        When bills are tracked in someone's head instead of a shared system, three things go
        wrong. The person who pays fronts the whole bill and has to chase everyone else down
        individually, which gets tiring fast. Nobody has a record of who's actually paid this
        month versus last month, so a roommate who's genuinely behind looks the same as one
        who paid instantly. And disputes over a high bill — "why was electric $220 this
        month?" — have no data to settle them, so they turn into a debate about memory
        instead of a two-second look at a log. A text thread scrolls out of view within a
        week; a dedicated log doesn't.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Three roommates splitting one electric bill that doubles every summer from window AC units.</li>
        <li>A couple sharing an internet bill that's on one partner's card by default.</li>
        <li>A house splitting water and trash evenly, but electric by who works from home.</li>
        <li>A new roommate joining mid-lease and needing to see a fair, documented starting point.</li>
        <li>One roommate traveling for a month and needing their share pro-rated fairly.</li>
        <li>A subletter moving in mid-month who needs a fair, pro-rated share rather than a full month's charge.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Tracking "bill paid" instead of "who paid their share," which hides who's actually behind.</li>
        <li>Re-negotiating the split every single month instead of agreeing on a rule once.</li>
        <li>Letting one roommate's phone or notes app be the only copy of the record.</li>
        <li>Waiting until a bill looks unusually high to start logging, instead of from day one.</li>
        <li>Assuming an even split is "fair" without ever checking it against actual usage patterns.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Handle usage-based disputes with data, not vibes
      </h2>
      <p>
        If one roommate runs AC constantly and another doesn't, an even split will eventually
        cause resentment. Rather than guessing at a "fair" percentage, track 3-4 months of
        bills first. If the pattern is consistent — say, summer electric is always 30-40%
        higher than winter — agree on a seasonal adjustment (e.g., the AC user pays an extra
        flat $20/month June-September) rather than re-negotiating every single bill. A record
        of past bills makes this a five-minute conversation instead of a guessing game.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Track your utility spending
      </Link>
    </BlogPostLayout>
  )
}
