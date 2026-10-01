import { Link } from 'react-router-dom'
import { useSeo, useJsonLd } from '../lib/useSeo.js'
import AdSlot from './AdSlot.jsx'
import RelatedContent from './RelatedContent.jsx'
import Breadcrumbs from './Breadcrumbs.jsx'
import { POSTS } from '../pages/blog/posts.js'
import { CATEGORIES } from '../content/categories.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'

export default function BlogPostLayout({ post, children }) {
  const category = CATEGORIES.find((c) => c.key === post.category)
  const path = `/blog/${post.slug}`

  useSeo({
    title: `${post.title} | Common Expenses Tracker Blog`,
    description: post.description,
    path,
    publishedTime: `${post.date}T00:00:00.000Z`,
  })

  useJsonLd(`blogposting-${post.slug}`, {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}${path}`,
    mainEntityOfPage: `${BASE_URL}${path}`,
    image: `${BASE_URL}/og-image.png`,
    keywords: post.category,
    author: { '@type': 'Organization', name: 'Common Expenses Tracker' },
    publisher: {
      '@type': 'Organization',
      name: 'Common Expenses Tracker',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/og-image.png` },
    },
  })

  return (
    <article className="max-w-2xl mx-auto space-y-6">
      <Breadcrumbs
        trail={[
          { to: '/blog', label: 'Blog' },
          ...(category ? [{ to: category.route, label: category.title }] : []),
          { label: post.title },
        ]}
      />
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-400 dark:text-slate-500">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
      <div className="space-y-4 text-slate-600 dark:text-slate-300">{children}</div>

      <RelatedContent
        heading="Related posts"
        items={POSTS.map((p) => ({ to: `/blog/${p.slug}`, title: p.title }))}
        currentPath={path}
      />

      <AdSlot slotId="3418754801" />

      {category && (
        <p>
          <Link to={category.route} className="text-sm text-brand-600 hover:underline">
            ← More {category.title.toLowerCase()} guides
          </Link>
        </p>
      )}
    </article>
  )
}
