import { Link } from 'react-router-dom'

export default function FeatureCard({ to, icon, title, description }) {
  return (
    <Link to={to} className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
      <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl mb-4 dark:bg-brand-500/20">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-700 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </Link>
  )
}
