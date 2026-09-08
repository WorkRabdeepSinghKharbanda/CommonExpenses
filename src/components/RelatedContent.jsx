import { Link } from 'react-router-dom'

// Rotates the list starting right after the current item, so different pages
// surface different neighbors instead of everyone linking to the same top 3.
export default function RelatedContent({ heading, items, currentPath, count = 3 }) {
  const idx = items.findIndex((i) => i.to === currentPath)
  const rotated = idx === -1 ? items : [...items.slice(idx + 1), ...items.slice(0, idx)]
  const related = rotated.filter((i) => i.to !== currentPath).slice(0, count)

  if (related.length === 0) return null

  return (
    <section className="space-y-2 pt-6 border-t border-slate-100 dark:border-slate-700">
      <h2 className="font-semibold text-lg dark:text-white">{heading}</h2>
      <ul className="space-y-1">
        {related.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-brand-600 hover:underline text-sm">
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
