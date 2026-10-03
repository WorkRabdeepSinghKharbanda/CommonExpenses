import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'How much should I tip at a restaurant?',
    a: 'In the US, 15-20% of the pre-tax bill is the typical range for sit-down table service, with 20% increasingly common for good service. Many other countries don\'t have the same tipping expectation at all, or tipping is modest (rounding up, or 5-10%) since service staff are paid differently — always check local norms for wherever you actually are, since US-style expectations don\'t transfer everywhere.',
  },
  {
    q: 'Should I tip on the pre-tax or post-tax amount?',
    a: 'Pre-tax is the more common convention and what most servers and tipping guides expect, though tipping on the post-tax total only changes the result by a small amount in most cases. Either is broadly accepted; pre-tax is the more precise default if you want one.',
  },
  {
    q: 'How do I split a tip fairly among a group?',
    a: "The simplest fair method is to add the tip to the bill first, then divide that total evenly by the number of people — which is exactly what this calculator does. If people ordered very different amounts, splitting by each person's own share of the bill (rather than evenly) is fairer, but requires tracking individual orders rather than just a total.",
  },
  {
    q: 'Is it ever okay not to tip?',
    a: "That depends entirely on local convention and the specific situation — genuinely poor service, a service charge already included in the bill, or a region where tipping isn't customary are all situations people handle differently. There's no universal rule here beyond knowing the convention for where you are.",
  },
]

export default function TipGuide() {
  useSeo({
    title: 'How Much Should You Tip? | Common Expenses Tracker',
    description:
      'A quick reference for tip percentages, pre-tax vs. post-tax tipping, and how to split a tip fairly among a group.',
    path: '/how-much-should-you-tip',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Breadcrumbs trail={[{ to: '/guides/split', label: 'Splitting Expenses' }, { label: 'How much should you tip?' }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">How much should you tip?</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Tipping norms vary a lot by country and by service type, so there's no single correct percentage — what
        follows is a quick reference for the most common situation (US restaurant table service), plus how to
        handle splitting a tip across a group.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Common starting points</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Sit-down restaurant table service (US): 15-20% of the pre-tax bill is typical.</li>
          <li>Counter service / takeout: often optional or a smaller amount, varies widely by location and establishment.</li>
          <li>Outside the US: many countries have no strong tipping expectation, or a smaller customary amount (rounding up, 5-10%) — check local convention rather than assuming US norms apply.</li>
        </ul>
      </section>

      <FaqSection id="faq-tip" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/how-much-should-you-tip"
      />

      <p>
        <Link to="/guides/split" className="text-sm text-brand-600 hover:underline">
          ← More splitting-expenses guides
        </Link>
      </p>

      <Link to="/tip-calculator" className="btn-primary inline-block">
        Try the free tip calculator
      </Link>
    </div>
  )
}
