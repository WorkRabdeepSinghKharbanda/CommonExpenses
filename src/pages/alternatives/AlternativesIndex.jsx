import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { ALTERNATIVES } from '../../content/alternatives.js'

export default function AlternativesIndex() {
  useSeo({
    title: 'Free Alternatives to Splitwise, Tricount, YNAB & Mint | Common Expenses Tracker',
    description: 'Factual, side-by-side comparisons against popular bill-splitting and budgeting apps — no account required, no sign-up.',
    path: '/alternatives',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Breadcrumbs trail={[{ label: 'Alternatives' }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Alternatives</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Honest, factual comparisons against other bill-splitting and budgeting tools — what's
        actually different, and when the other tool is still the better choice.
      </p>
      <ul className="space-y-2">
        {ALTERNATIVES.map((a) => (
          <li key={a.slug}>
            <Link to={`/alternatives/${a.slug}`} className="text-brand-600 hover:underline">
              {a.name} alternative
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
