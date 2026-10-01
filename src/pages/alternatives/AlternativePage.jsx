import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import { CATEGORIES } from '../../content/categories.js'

export default function AlternativePage({ alt }) {
  const category = CATEGORIES.find((c) => c.key === alt.category)

  useSeo({
    title: `${alt.name} Alternative — Free, No Sign-Up | Common Expenses Tracker`,
    description: `A free, no-account alternative to ${alt.name}: ${alt.searchedBecause.slice(0, 140)}`,
    path: `/alternatives/${alt.slug}`,
  })

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Breadcrumbs
        trail={[
          { to: '/alternatives', label: 'Alternatives' },
          { label: `${alt.name} alternative` },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          A free {alt.name} alternative
        </h1>
        <p className="text-slate-600 dark:text-slate-300">{alt.searchedBecause}</p>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Side by side</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-slate-200 dark:border-slate-700">
                <th className="py-2 pr-4 font-medium text-slate-500 dark:text-slate-400"></th>
                <th className="py-2 pr-4 font-medium text-slate-900 dark:text-white">This tool</th>
                <th className="py-2 font-medium text-slate-900 dark:text-white">{alt.name}</th>
              </tr>
            </thead>
            <tbody>
              {alt.rows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 pr-4 text-slate-500 dark:text-slate-400">{row.label}</td>
                  <td className="py-2 pr-4 text-slate-700 dark:text-slate-200">{row.us}</td>
                  <td className="py-2 text-slate-700 dark:text-slate-200">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">When {alt.name} is still the better choice</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          {alt.whenTheyAreBetter.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">How to switch</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          {alt.howToSwitch.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <AdSlot slotId="3418754801" />

      <FaqSection id={`faq-${alt.slug}`} items={alt.faqs} />

      <div className="flex flex-wrap items-center gap-4">
        <Link to={alt.toolRoute} className="btn-primary inline-block">
          {alt.toolLabel}
        </Link>
        {category && (
          <Link to={category.route} className="text-sm text-brand-600 hover:underline">
            More {category.title.toLowerCase()} guides
          </Link>
        )}
      </div>
    </div>
  )
}
