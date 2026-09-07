import { useJsonLd } from '../lib/useSeo.js'

// Renders visible Q&A plus FAQPage JSON-LD, so both classic search snippets
// and AI answer engines (which parse structured data, not rendered layout) get it.
export default function FaqSection({ id, items }) {
  useJsonLd(id, {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  })

  return (
    <section className="space-y-4">
      <h2 className="font-semibold text-lg dark:text-white">FAQ</h2>
      {items.map((it) => (
        <div key={it.q}>
          <h3 className="font-medium text-slate-900 dark:text-white">{it.q}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{it.a}</p>
        </div>
      ))}
    </section>
  )
}
