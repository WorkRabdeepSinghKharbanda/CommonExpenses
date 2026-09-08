import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'How much should I save each month?',
    a: 'It depends on your target amount, your timeline, and what you have saved already: (target - current savings) / months remaining, adjusted for any interest your savings earn. A savings goal calculator does this math instantly and updates it as your numbers change.',
  },
  {
    q: 'Does expected return actually make a difference over a short timeline?',
    a: 'Over a few months, barely — interest compounds too little to matter. Over a year or more, even a modest annual return meaningfully lowers the monthly amount you need to set aside, so it is worth including once your timeline passes about 12 months.',
  },
  {
    q: 'What if I miss a month?',
    a: 'Update your "current savings" and recalculate — the required monthly amount for the remaining months will adjust automatically. Treat the number as a moving target tied to where you actually are, not a fixed plan you fell behind on.',
  },
]

export default function SavingsGuide() {
  useSeo({
    title: 'How Much to Save Each Month to Hit Your Goal | Common Expenses Tracker',
    description:
      'How to calculate the monthly savings amount you need to hit a target, including the effect of interest — plus a free savings goal calculator.',
    path: '/how-much-to-save-each-month',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        How much should you save each month?
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        The monthly amount you need to save comes down to three numbers: what you're
        aiming for, what you already have, and how much time is left. Add an expected
        return if you're investing the savings, and the required monthly amount drops
        as compounding does part of the work for you.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">The calculation</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Without interest: <code>(target − current) ÷ months remaining</code>. With an
          expected annual return, the required monthly amount is slightly lower, since part
          of the gap gets closed by growth instead of new contributions.
        </p>
      </section>

      <FaqSection id="faq-savings" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/how-much-to-save-each-month"
      />

      <Link to="/savings" className="btn-primary inline-block">
        Try the free savings goal calculator
      </Link>
    </div>
  )
}
