import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext.jsx'
import { useCurrency } from '../lib/CurrencyContext.jsx'

// Dashboard stays a top-level link (it's the overview hub, not a calculator).
// Everything else lives in the "Tools" dropdown on desktop — 9 flat links no
// longer fit the navbar width — and as a flat list in the mobile menu.
const dashboardLink = { to: '/dashboard', label: 'Dashboard' }

const toolLinks = [
  { to: '/split', label: 'Split Expense' },
  { to: '/budget', label: 'Budget' },
  { to: '/bills', label: 'Recurring Bills' },
  { to: '/savings', label: 'Savings Goal' },
  { to: '/debt-payoff', label: 'Debt Payoff' },
  { to: '/loan-calculator', label: 'Loan / EMI' },
  { to: '/net-worth', label: 'Net Worth' },
  { to: '/tip-calculator', label: 'Tip Calculator' },
]

const links = [dashboardLink, ...toolLinks]

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
  const [toolsOpen, setToolsOpen] = useState(false)
  const toolsRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setToolsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!toolsOpen) return undefined
    const onClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) setToolsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [toolsOpen])

  const isToolActive = toolLinks.some((l) => l.to === location.pathname)

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
        <NavLink to="/" className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 shrink-0 truncate">
          Common<span className="text-brand-600">Expenses</span>
        </NavLink>
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to={dashboardLink.to} className={linkClass}>
            {dashboardLink.label}
          </NavLink>
          <div className="relative" ref={toolsRef}>
            <button
              onClick={() => setToolsOpen((o) => !o)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                isToolActive
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              Tools <span className="text-xs">{toolsOpen ? '▲' : '▼'}</span>
            </button>
            {toolsOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-slate-200 bg-white shadow-lg py-1 dark:bg-slate-800 dark:border-slate-700">
                {toolLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm ${
                        isActive
                          ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300'
                          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <select
            className="hidden sm:block text-base sm:text-sm rounded-lg border border-slate-300 bg-white px-2 py-1.5 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
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
            className="w-9 h-9 shrink-0 rounded-lg border border-slate-300 flex items-center justify-center text-sm hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-9 h-9 shrink-0 rounded-lg border border-slate-300 flex items-center justify-center dark:border-slate-600 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-3">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setMenuOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <label className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Currency</span>
            <select
              className="text-base rounded-lg border border-slate-300 bg-white px-2 py-1.5 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              aria-label="Currency"
            >
              {Object.keys(currencies).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
      )}
    </header>
  )
}
