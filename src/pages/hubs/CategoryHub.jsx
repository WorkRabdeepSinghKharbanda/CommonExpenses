import { Link } from 'react-router-dom'
import { useSeo, useJsonLd } from '../../lib/useSeo.js'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import { GUIDES } from '../guides/guides.js'
import { POSTS } from '../blog/posts.js'
import { ALTERNATIVES } from '../../content/alternatives.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'

export default function CategoryHub({ category }) {
  const guides = GUIDES.filter((g) => g.category === category.key)
  const posts = POSTS.filter((p) => p.category === category.key)
  const alternatives = ALTERNATIVES.filter((a) => a.category === category.key)

  useSeo({
    title: `${category.title} | Common Expenses Tracker`,
    description: category.description,
    path: category.route,
  })

  useJsonLd(`itemlist-${category.key}`, {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      ...(category.pillarRoute ? [{ route: category.pillarRoute, title: category.pillarTitle }] : []),
      ...guides,
      ...posts.map((p) => ({ route: `/blog/${p.slug}`, title: p.title })),
    ].map(
      (item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}${item.route}`,
        name: item.title,
      })
    ),
  })

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Breadcrumbs trail={[{ label: category.title }]} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{category.title}</h1>
        <p className="text-slate-600 dark:text-slate-300">{category.description}</p>
        <Link to={category.toolRoute} className="btn-primary inline-block mt-2">
          {category.toolLabel}
        </Link>
      </div>

      {category.pillarRoute && (
        <Link
          to={category.pillarRoute}
          className="block rounded-lg border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950/30 p-4 hover:border-brand-400"
        >
          <span className="text-xs font-semibold uppercase text-brand-600">Start here</span>
          <p className="font-semibold text-slate-900 dark:text-white">{category.pillarTitle}</p>
        </Link>
      )}

      {guides.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-lg dark:text-white">Guides</h2>
          <ul className="space-y-2">
            {guides.map((g) => (
              <li key={g.route}>
                <Link to={g.route} className="text-brand-600 hover:underline">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {posts.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-lg dark:text-white">Blog posts</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="text-brand-600 hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {alternatives.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-lg dark:text-white">Alternatives to other tools</h2>
          <ul className="space-y-2">
            {alternatives.map((a) => (
              <li key={a.slug}>
                <Link to={`/alternatives/${a.slug}`} className="text-brand-600 hover:underline">
                  {a.name} alternative
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AdSlot slotId="3418754801" />
    </div>
  )
}
