import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { GUIDES } from './guides.js'

const FAQ = [
  {
    q: 'How is a monthly loan payment (EMI) actually calculated?',
    a: 'Almost all real loans use the reducing-balance method: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of months. The result is a fixed payment where the interest portion is highest in month 1 (when the balance is largest) and shrinks every month as the balance goes down.',
  },
  {
    q: 'Why does more of my early payments go to interest than principal?',
    a: 'Because interest is charged on the current balance, not the original amount. In month 1, the balance is the full loan amount, so the interest charge is at its largest — meaning a smaller share of that month\'s fixed payment reduces the principal. As the balance shrinks month over month, the interest portion shrinks too, so more of each payment goes toward principal later in the loan.',
  },
  {
    q: 'What\'s the difference between reducing balance and flat rate interest?',
    a: 'Flat rate interest charges a fixed percentage on the original loan amount for every month of the term, even though the balance you actually owe keeps dropping. This produces a higher effective interest rate than the stated rate suggests — a "flat 10%" loan can carry an effective rate close to double that under reducing balance. Reducing balance (what this calculator uses) only charges interest on what\'s actually still owed.',
  },
  {
    q: 'Does paying extra reduce my EMI or shorten my loan term?',
    a: 'Depends on what the lender allows, but the two common options are: keep the EMI the same and finish the loan early (fewer months), or keep the same term and get a lower EMI. Paying down principal early always reduces total interest either way, since interest is calculated on a smaller balance from that point forward — the earlier the extra payment, the more it saves.',
  },
]

export default function EMIGuide() {
  useSeo({
    title: 'How EMI Is Calculated | Common Expenses Tracker',
    description:
      'How the standard reducing-balance EMI formula works, why early payments are mostly interest, and how it differs from flat-rate interest.',
    path: '/how-emi-is-calculated',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Breadcrumbs trail={[{ to: '/guides/loans', label: 'Loans & EMI' }, { label: 'How EMI is calculated' }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">How EMI is calculated (reducing balance method)</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Nearly every real loan — home, personal, auto — uses the reducing-balance method: your monthly payment
        (EMI) stays fixed for the whole term, but the split between interest and principal inside that payment
        shifts every month, starting mostly-interest and ending mostly-principal.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">The formula</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          EMI = P × r × (1+r)<sup>n</sup> / ((1+r)<sup>n</sup> − 1), where P is the principal, r is the monthly
          rate (annual rate ÷ 12 ÷ 100), and n is the number of months. Each month, interest is charged on the
          remaining balance only — not the original loan amount — which is what makes the interest portion of
          your payment shrink over time as the balance does.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Reducing balance vs. flat rate</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          A "flat rate" loan charges interest on the original principal for the entire term, even as you pay it
          down — so the stated rate understates what you're actually paying. Reducing balance only charges
          interest on what's currently owed, which is both fairer and the method almost every bank/lender
          actually uses for the headline rate they quote. Always confirm which method a quoted rate assumes
          before comparing two loan offers.
        </p>
      </section>

      <FaqSection id="faq-emi" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <RelatedContent
        heading="Related guides"
        items={GUIDES.map((g) => ({ to: g.route, title: g.title }))}
        currentPath="/how-emi-is-calculated"
      />

      <p>
        <Link to="/guides/loans" className="text-sm text-brand-600 hover:underline">
          ← More loan guides
        </Link>
      </p>

      <Link to="/loan-calculator" className="btn-primary inline-block">
        Try the free loan / EMI calculator
      </Link>
    </div>
  )
}
