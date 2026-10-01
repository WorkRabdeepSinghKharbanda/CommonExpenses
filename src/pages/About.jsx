import { useSeo } from '../lib/useSeo.js'

export default function About() {
  useSeo({
    title: 'About | Common Expenses Tracker',
    description: 'Who makes Common Expenses Tracker, why it exists, and how to get in touch.',
    path: '/about',
  })

  return (
    <div className="card max-w-2xl mx-auto space-y-4 text-sm text-slate-600 dark:text-slate-300">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">About</h1>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">What this is</h2>
        <p>
          Common Expenses Tracker is a small set of free calculators — splitting bills,
          budgeting, recurring bills, and savings goals — built as a solo, independent
          project. No sign-up, no backend: every calculator stores its data only in your
          browser's <code>localStorage</code>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">Why it exists</h2>
        <p>
          Most expense-splitting and budgeting tools ask for an account, sync to a server,
          or gate basic features behind a subscription. This project is the opposite bet:
          a calculator that works instantly, keeps data local, and stays free.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p>
          For questions, corrections, or feedback on any guide or blog post, reach out at{' '}
          <a href="mailto:rabdeepsinghkharbanda29@gmail.com" className="underline text-brand-600">
            rabdeepsinghkharbanda29@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}
