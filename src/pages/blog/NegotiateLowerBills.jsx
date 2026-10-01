import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'how-to-negotiate-lower-bills')

const FAQ = [
  {
    q: 'Why do existing customers pay more than new sign-ups?',
    a: "Promotional rates are built to expire — the discount that got you in the door usually runs for 12 months and then quietly reverts to a higher standard rate. Providers count on most customers not noticing or not calling, which is exactly why the increase sticks for people who never ask.",
  },
  {
    q: "What's the single best time to call?",
    a: "Right when a promotional rate is about to expire, or right after you've seen a competitor advertise a comparable plan for less. Retention teams have far more room to discount a customer who's actively comparing options than one who's already paying full price without complaint.",
  },
  {
    q: 'Do I need a competitor quote to get a discount?',
    a: "It helps a lot but isn't strictly required — naming a real number ('[Competitor] offers the same speed for $X') gives the rep something concrete to match or beat. Without one, you can still ask what current promotions apply to your account, which often surfaces an offer you weren't on.",
  },
  {
    q: 'Why ask for the retention department specifically?',
    a: "General customer service reps usually have little or no authority to change your rate. The retention or loyalty team exists specifically to keep customers who are considering leaving, and they're measured on how many they keep, so they have much more room to discount.",
  },
  {
    q: 'Does this work for insurance the same way?',
    a: "Not quite — insurers rarely discount an existing policy just because you called and asked. They do reprice you at renewal based on a fresh risk profile, so the better move is to ask what changes (bundling, a higher deductible, dropping coverage you no longer need) would lower the renewal quote.",
  },
  {
    q: 'What should I do after I get a discount?',
    a: "Ask how long the new rate lasts, and put a reminder in your bill tracker for when it expires. The same promotional-rate pattern that caused the increase the first time will happen again unless you're tracking when to call back.",
  },
  {
    q: 'Is it worth negotiating bills that are already pretty low?',
    a: "Usually still yes for recurring annual bills — a 10-minute call that saves $15/month is $180/year for close to no ongoing effort, and the savings compound every year you remember to renegotiate before the promotional rate quietly lapses again.",
  },
]

export default function NegotiateLowerBills() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-how-to-negotiate-lower-bills">
      <p>
        Internet, phone, and insurance providers routinely give existing customers worse
        pricing than new sign-ups — the promotional rate that got you in the door usually
        expires after 12 months and quietly doubles. Most people never call to ask about
        it, which is exactly why the increase sticks. A 10-minute phone call once or twice
        a year can realistically save $10-$40/month per bill.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What's actually happening to your bill
      </h2>
      <p>
        Most recurring bills aren't one flat price for the life of the account — they're a
        promotional rate for a fixed window followed by a standard rate that's noticeably
        higher. Nobody calls to tell you when that window ends; the higher charge just
        appears on the next statement. The company isn't doing anything secret, it's simply
        not volunteering a lower price to a customer who hasn't asked, because most
        customers don't. Negotiating isn't a trick — it's asking a company to do something
        it's already set up to do for anyone who calls.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Time it right
      </h2>
      <p>
        Call when you have leverage: right when a promotional rate is about to expire, or
        right after you've seen a competitor's price for a comparable plan. Retention
        departments are measured on how many customers they keep, and they have far more
        room to discount a customer who's about to leave than one who's already paying
        full price with no complaint on file.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The script
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Open with: "I've been a customer for [X years] and I want to stay, but my bill
          has gone up and I'm comparing options. Can you tell me what current promotions
          apply to my account?"
        </li>
        <li>
          If the first rep can't help: "Can you transfer me to the retention or loyalty
          department?" — this team has more authority to discount than general support.
        </li>
        <li>
          Name a real number if you have one: "[Competitor] is offering the same speed for
          $X — can you match or beat that?"
        </li>
        <li>
          If they offer a discount, ask how long it lasts and put a reminder in your{' '}
          <Link to="/bills" className="text-brand-600 hover:underline">bill tracker</Link>{' '}
          for when it expires — so you're not back here in 12 months wondering why the
          bill jumped again.
        </li>
        <li>
          If they can't offer anything, ask directly: "Is there a retention offer for
          customers considering cancellation?" — this phrase alone sometimes unlocks a
          better deal than what's offered by default.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this is worth doing every year
      </h2>
      <p>
        A single call rarely changes your finances on its own, but the savings compound
        because the same promotional-rate cycle repeats every year across every recurring
        bill you have. $20/month off internet, $15/month off a phone plan, and a 10%
        trim on an insurance renewal add up to real annual savings for a few hours of total
        effort — and once you've made the call once, the script gets easier and faster
        every time after.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        The whole strategy depends on knowing when a promotional rate is about to lapse,
        and that's exactly the detail people forget without a system. If your bills live in
        scattered emails or a memory of "it went up a while back," there's no reliable
        trigger to call at the right moment — you only notice months later when the higher
        charge has already been paid several times over. A log that records each bill's
        amount and date removes the guessing: a sudden jump is visible the moment it
        happens, not discovered by accident on a statement you almost didn't open.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>An internet bill that quietly jumped from $50 to $90 a year after a promo ended.</li>
        <li>A phone plan bill that could be matched against a competitor's advertised rate.</li>
        <li>An auto insurance renewal that could drop 15% by raising the deductible on an older car.</li>
        <li>A streaming or cable bundle bill worth bundling or trimming down to what's actually used.</li>
        <li>A home insurance renewal eligible for a multi-policy discount nobody applied for.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Calling general support and accepting "there's nothing we can do" without asking for retention.</li>
        <li>Threatening to cancel without actually being willing to, which reps can often tell.</li>
        <li>Forgetting to set a reminder for when a newly negotiated rate itself expires.</li>
        <li>Assuming insurance works like internet or phone billing and expecting an on-request discount.</li>
        <li>Only checking bills once a year instead of noticing a spike the month it happens.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Insurance needs a different angle
      </h2>
      <p>
        Insurers rarely discount an existing policy on request, but they do reprice you
        automatically at renewal based on a fresh risk profile — bundling home and auto,
        raising your deductible, or removing coverage you no longer need (a paid-off car's
        collision coverage, for example) can lower the renewal quote by 10-20%. Ask your
        agent directly: "What would lower this renewal without dropping coverage I need?"
      </p>

      <Link to="/bills" className="btn-primary inline-block">
        Track your recurring bills
      </Link>
    </BlogPostLayout>
  )
}
