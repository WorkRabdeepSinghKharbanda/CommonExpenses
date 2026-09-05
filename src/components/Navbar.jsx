import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext.jsx'
import { useCurrency } from '../lib/CurrencyContext.jsx'

const links = [
  { to: '/split', label: 'Split Expense' },
  { to: '/budget', label: 'Budget' },
  { to: '/bills', label: 'Recurring Bills' },
  { to: '/savings', label: 'Savings Goal' },
]

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
  }`

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { currency, setCurrency, currencies } = useCurrency()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <NavLink to="/" className="font-semibold text-lg text-slate-900 dark:text-slate-100 shrink-0">
          Common<span className="text-brand-600">Expenses</span>
        </NavLink>
        <nav className="hidden sm:flex gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <select
            className="text-sm rounded-lg border border-slate-300 bg-white px-2 py-1.5 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            aria-label="Currency"
          >
            {Object.keys(currencies).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center text-sm hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center dark:border-slate-600 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="sm:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
