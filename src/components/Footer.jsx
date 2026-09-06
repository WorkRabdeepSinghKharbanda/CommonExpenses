import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Common Expenses Tracker</span>
        <span className="flex gap-4">
          <span>All data stays in your browser — nothing is sent to a server.</span>
          <Link to="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-200">
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  )
}
