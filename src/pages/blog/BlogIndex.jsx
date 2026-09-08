import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import AdSlot from '../../components/AdSlot.jsx'
import { POSTS } from './posts.js'

export default function BlogIndex() {
  useSeo({
    title: 'Blog | Common Expenses Tracker',
    description: 'Practical guides on splitting expenses, budgeting, recurring bills, and savings.',
    path: '/blog',
  })

  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blog</h1>
      <AdSlot slotId="0000000000" />
      <ul className="space-y-6">
        {sorted.map((p) => (
          <li key={p.slug} className="card space-y-1">
            <Link to={`/blog/${p.slug}`} className="font-semibold text-lg text-slate-900 dark:text-white hover:text-brand-600">
              {p.title}
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            <time dateTime={p.date} className="text-xs text-slate-400 dark:text-slate-500">
              {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}
