import { Link } from 'react-router-dom'
import { useJsonLd } from '../lib/useSeo.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'

// trail: [{ to: '/guides/split', label: 'Splitting Expenses' }, ...] — Home is
// implicit and always first. The current page (no `to`) is last, unlinked.
export default function Breadcrumbs({ trail }) {
  const items = [{ to: '/', label: 'Home' }, ...trail]

  useJsonLd('breadcrumb-list', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      // Per Google/schema.org guidance, the last (current-page) item can omit
      // `item` entirely rather than pointing at a URL that isn't actually it.
      ...(item.to ? { item: `${BASE_URL}${item.to}` } : {}),
    })),
  })

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-400 dark:text-slate-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.to || item.label} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span className="text-slate-500 dark:text-slate-400">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
