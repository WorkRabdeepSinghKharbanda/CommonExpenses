import { Link } from 'react-router-dom'
import { useSeo, useJsonLd } from '../lib/useSeo.js'
import AdSlot from './AdSlot.jsx'
import RelatedContent from './RelatedContent.jsx'
import { POSTS } from '../pages/blog/posts.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'

export default function BlogPostLayout({ post, children }) {
  useSeo({
    title: `${post.title} | Common Expenses Tracker Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
  })

  useJsonLd(`blogposting-${post.slug}`, {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
  })

  return (
    <article className="max-w-2xl mx-auto space-y-6">
      <Link to="/blog" className="text-sm text-brand-600 hover:underline">
        ← All posts
      </Link>
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
        currentPath={`/blog/${post.slug}`}
      />

      <AdSlot slotId="3418754801" />
    </article>
  )
}
