import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'How do we split a group gift when not everyone wants to pay the same amount?',
    a: "You don't have to force an even split — group gifts work fine with uneven contributions as long as the total is tracked clearly. Set the gift's target price, let each person commit whatever amount they're comfortable with, and use a tracker to confirm the pledged total covers the cost before buying. If it falls short, either ask for top-ups from willing contributors or scale back the gift, rather than silently splitting the gap evenly.",
  },
  {
    q: 'What happens if someone backs out after agreeing to chip in for a group gift?',
    a: "Decide this before collecting money, not after: either the remaining contributors absorb the shortfall proportionally to what they already committed, or the gift gets scaled down to match what's actually collected. Logging each person's pledge (not just cash already received) makes it obvious in real time how much is missing and who to follow up with, instead of discovering the shortfall at checkout.",
  },
  {
    q: 'Who should collect the money and buy the gift for a group?',
    a: "Usually whoever organized the gift buys it and gets reimbursed by the group, since it's simpler than pooling cash beforehand and then buying — that avoids money sitting around if the gift plan changes. The organizer should still track each person's share and mark who's paid, so reimbursement doesn't rely on memory. For larger gifts, collecting a portion upfront reduces the risk of the organizer covering a big shortfall themselves.",
  },
]

export default function GroupGiftGuide() {
  useSeo({
    title: 'Group Gift Cost Splitter Calculator | Common Expenses Tracker',
    description:
      "Split the cost of a group gift fairly among any number of contributors, with a free calculator that handles uneven contributions.",
    path: '/group-gift-cost-splitter',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Group gift cost splitter calculator
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Pooling money for a group gift — a wedding present, a retirement gift, a birthday
        collection at the office — usually starts informally in a group chat and ends with
        someone quietly covering the shortfall. The fix isn't insisting on an even split;
        it's tracking pledges against the target cost before anyone buys anything.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">
          Handling uneven contributions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Group gifts rarely split evenly in practice — some people want to give more, others
          less. Rather than forcing a fixed per-person amount, let each contributor pledge
          what they're comfortable with, and track the running total against the gift's
          price.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A simple process that avoids shortfalls</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Set the target price for the gift before collecting anything.</li>
          <li>Log each person's pledge as it comes in, not just cash already received.</li>
          <li>Compare the running total to the target before the purchase is made.</li>
          <li>If short, ask for top-ups or scale down the gift — agree which in advance.</li>
        </ol>
      </section>

      <FaqSection id="faq-group-gift" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/group-gift-cost-splitter"
      />

      <Link to="/split" className="btn-primary inline-block">
        Split a group gift's cost
      </Link>
    </div>
  )
}
