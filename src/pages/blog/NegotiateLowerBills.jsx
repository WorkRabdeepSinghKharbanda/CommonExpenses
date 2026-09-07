import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'how-to-negotiate-lower-bills',
  title: 'How to negotiate lower bills (internet, phone, insurance) — a script that works',
  description:
    'A step-by-step call script and timing strategy for negotiating recurring bills down, without switching providers.',
  date: '2026-04-02',
}

export default function NegotiateLowerBills() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Internet, phone, and insurance providers routinely give existing customers worse
        pricing than new sign-ups — the promotional rate that got you in the door usually
        expires after 12 months and quietly doubles. Most people never call to ask about
        it, which is exactly why the increase sticks. A 10-minute phone call once or twice
        a year can realistically save $10-$40/month per bill.
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
          If they offer a discount, ask how long it lasts and put a reminder in your bill
          tracker for when it expires — so you're not back here in 12 months wondering why
          the bill jumped again.
        </li>
        <li>
          If they can't offer anything, ask directly: "Is there a retention offer for
          customers considering cancellation?" — this phrase alone sometimes unlocks a
          better deal than what's offered by default.
        </li>
      </ol>

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
