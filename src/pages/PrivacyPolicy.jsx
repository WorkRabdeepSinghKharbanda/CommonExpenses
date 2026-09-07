import { useSeo } from '../lib/useSeo.js'

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | Common Expenses Tracker',
    description: 'How Common Expenses Tracker handles data: localStorage only, no backend, and how AdSense cookies work if you accept them.',
    path: '/privacy',
  })
  return (
    <div className="card max-w-2xl mx-auto space-y-4 text-sm text-slate-600 dark:text-slate-300">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">What data this site processes</h2>
        <p>
          All calculator data (people, expenses, budget entries, bills, savings goals) is
          stored only in your browser's <code>localStorage</code>. It is never sent to a
          server — this site has no backend and no user accounts.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">Local storage</h2>
        <p>
          We also use <code>localStorage</code> to remember your theme, currency, and
          cookie-consent choice. Clearing your browser's site data removes all of it.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">Advertising</h2>
        <p>
          If you accept the cookie banner, this site loads Google AdSense, which may use
          cookies to show personalized ads based on your visits to this and other sites.
          You can opt out of personalized advertising at{' '}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-brand-600"
          >
            adssettings.google.com
          </a>
          . Declining the banner means no ad script loads and no ad cookies are set.
        </p>
      </section>
    </div>
  )
}
