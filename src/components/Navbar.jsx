import { NavLink } from 'react-router-dom'

const links = [
  { to: '/split', label: 'Split Expense' },
  { to: '/budget', label: 'Budget' },
  { to: '/bills', label: 'Recurring Bills' },
  { to: '/savings', label: 'Savings Goal' },
]

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-lg text-slate-900">
          Common<span className="text-brand-600">Expenses</span>
        </NavLink>
        <nav className="hidden sm:flex gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
