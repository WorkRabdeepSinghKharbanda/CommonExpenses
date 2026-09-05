import FeatureCard from '../components/FeatureCard.jsx'

const features = [
  {
    to: '/split',
    icon: '÷',
    title: 'Split Expense',
    description: 'Split a bill among friends and see exactly who owes who.',
  },
  {
    to: '/budget',
    icon: '📊',
    title: 'Budget Tracker',
    description: 'Log income and expenses by category with a running balance.',
  },
  {
    to: '/bills',
    icon: '🔁',
    title: 'Recurring Bills',
    description: 'Track subscriptions and bills, see your true monthly total.',
  },
  {
    to: '/savings',
    icon: '🎯',
    title: 'Savings Goal',
    description: 'Set a target and find out how much to save each month.',
  },
]

export default function Landing() {
  return (
    <div>
      <section className="text-center max-w-2xl mx-auto py-8">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand-600 bg-brand-50 rounded-full px-3 py-1 mb-4 dark:bg-brand-500/20 dark:text-brand-300">
          Free, private, no sign-up
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 dark:text-white">
          Track common expenses, without the spreadsheet.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Four focused calculators for splitting bills, budgeting, recurring
          payments, and savings goals. Everything runs in your browser.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {features.map((f) => (
          <FeatureCard key={f.to} {...f} />
        ))}
      </section>
    </div>
  )
}
