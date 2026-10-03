import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'How do you calculate your personal net worth?',
    a: 'Add up everything you own (cash, savings, investments, retirement accounts, vehicles, property) to get total assets. Add up everything you owe (credit card balances, loans, mortgages) to get total liabilities. Net worth is total assets minus total liabilities — it can be negative, especially early in adulthood or right after taking on a mortgage or student loans, and that\'s normal.',
  },
  {
    q: 'What should I count as an asset?',
    a: "Anything with real resale or cash value: your bank balances, investment and retirement accounts, a car (at realistic resale value, not purchase price), and property. Don't count items with no real resale market (most furniture, clothing, electronics after a year or two) — including them inflates the number without reflecting anything you could actually convert to cash.",
  },
  {
    q: 'Is net worth the same as income?',
    a: "No, and conflating them is a common mistake. Income is what you earn in a period; net worth is what you've accumulated (or owe) as of right now, regardless of how much you earn. A high earner with no savings and large debt can have a lower net worth than a modest earner who has saved consistently for years.",
  },
  {
    q: 'How often should I recalculate my net worth?',
    a: "Monthly or quarterly is enough for almost everyone — daily tracking mostly just captures normal market noise in any investment accounts, not real progress. What matters is the trend over months and years, not any single snapshot.",
  },
  {
    q: "Why is my net worth negative, and is that a problem?",
    a: "A negative net worth usually just means your debts (often a mortgage or student loans) currently exceed your liquid assets — extremely common early in a career or shortly after a large purchase, and not inherently alarming on its own. What matters is the direction it's moving over time, not whether it's crossed zero yet.",
  },
]

export default function NetWorthGuide() {
  useSeo({
    title: 'How to Calculate Your Net Worth | Common Expenses Tracker',
    description:
      'How to calculate your personal net worth from real assets and liabilities, what counts and what doesn\'t, and why it\'s different from income.',
    path: '/how-to-calculate-net-worth',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Breadcrumbs trail={[{ to: '/guides/savings', label: 'Savings Goals' }, { label: 'How to calculate your net worth' }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">How to calculate your net worth</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Net worth is one number: everything you own minus everything you owe. It's a personal-finance metric, not
        an accounting exercise for a business — this guide covers calculating your own net worth as an individual,
        not a company's net worth from a balance sheet, which is a different (and much more formal) calculation.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">The calculation</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>List every real asset: cash, savings, investment/retirement accounts, vehicles at realistic resale value, property.</li>
          <li>List every liability: credit card balances, personal loans, auto loans, mortgage balance, student loans.</li>
          <li>Subtract total liabilities from total assets. The result — positive or negative — is your net worth.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">What people get wrong</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Counting depreciating personal items (furniture, electronics, clothing) as assets — they have little to no real resale value.</li>
          <li>Confusing net worth with income — they measure completely different things and often move in different directions.</li>
          <li>Treating a single negative snapshot as a crisis instead of looking at the trend over several months.</li>
        </ul>
      </section>

      <FaqSection id="faq-net-worth" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/how-to-calculate-net-worth"
      />

      <p>
        <Link to="/guides/savings" className="text-sm text-brand-600 hover:underline">
          ← More savings guides
        </Link>
      </p>

      <Link to="/net-worth" className="btn-primary inline-block">
        Try the free net worth calculator
      </Link>
    </div>
  )
}
