import { Link } from 'react-router-dom'
import { useSeo, useJsonLd } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { GUIDES } from './guides.js'
import { POSTS } from '../blog/posts.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'
const PATH = '/how-to-build-a-budget-that-works'

const FAQ = [
  {
    q: 'What budgeting method should I actually use?',
    a: 'It depends on how much structure you want. The 50/30/20 rule is the easiest starting point (three buckets, no per-category tracking). Zero-based budgeting is stricter and catches more waste, but takes more upkeep. The cash envelope method works well for people who overspend on cards but is hard to do if most spending is already digital.',
  },
  {
    q: 'I have irregular income — do normal budgeting rules still apply?',
    a: 'Not directly. Percentage rules like 50/30/20 assume a predictable paycheck. With freelance or commission income, budget against a conservative baseline (your lowest realistic month), and treat anything above that baseline as a surplus to save or use for irregular expenses, not as money that\'s already spent.',
  },
  {
    q: 'Why do I keep "succeeding" at budgeting for a few weeks and then stopping?',
    a: 'Usually because the budget was too strict to maintain, or because tracking it took too much manual effort to keep up every week. A sustainable budget has a little slack built in on purpose, and uses a tool that shows your running totals automatically instead of requiring a manual tally.',
  },
  {
    q: 'Should I pay off debt or build savings first?',
    a: 'A small emergency buffer (even $500-1,000) first, then high-interest debt, then a full emergency fund, then other savings goals — in roughly that order. Carrying high-interest debt while building a large cash cushion usually costs more in interest than the cushion earns in peace of mind, with the exception of that initial small buffer.',
  },
  {
    q: 'How is budgeting different when you\'re just starting out?',
    a: 'The hard part at the start isn\'t picking a method, it\'s simply knowing where money currently goes — most first-time budgets fail because they\'re built on a guess rather than real numbers. Track every expense for a full pay cycle before choosing a percentage split or category limits, so the budget reflects your actual spending, not an assumption about it.',
  },
]

export default function BudgetPillar() {
  const budgetGuides = GUIDES.filter((g) => g.category === 'budget')
  const budgetPosts = POSTS.filter((p) => p.category === 'budget')

  useSeo({
    title: 'How to Build a Budget That Works | Common Expenses Tracker',
    description:
      'Every major budgeting method compared — 50/30/20, zero-based, envelope, irregular income — with when each one actually works and free tools for each.',
    path: PATH,
  })

  useJsonLd('faqpage-budget-pillar', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  })

  useJsonLd('article-budget-pillar', {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Build a Budget That Works',
    description: 'Every major budgeting method compared, with when each one actually works.',
    url: `${BASE_URL}${PATH}`,
    mainEntityOfPage: `${BASE_URL}${PATH}`,
    author: { '@type': 'Organization', name: 'Common Expenses Tracker' },
    publisher: {
      '@type': 'Organization',
      name: 'Common Expenses Tracker',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/og-image.png` },
    },
  })

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Breadcrumbs trail={[{ to: '/guides/budget', label: 'Budgeting' }, { label: 'How to build a budget that works' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">How to build a budget that actually works</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Most budgets fail from being too rigid to maintain, not from picking the "wrong" method. This page
          compares the main approaches — percentage-based, zero-based, envelope, and income-baseline budgeting —
          so you can match the method to your actual income pattern and tolerance for upkeep.
        </p>
        <Link to="/budget" className="btn-primary inline-block">
          Try the free budget tracker
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-slate-900 dark:text-white">The main budgeting methods</h2>
        <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
          <p>
            <strong className="text-slate-900 dark:text-white">50/30/20 rule</strong> — three fixed buckets:
            needs, wants, savings/debt. Lowest effort, good starting point. See{' '}
            <Link to="/50-30-20-budget-rule" className="text-brand-600 hover:underline">
              the 50/30/20 budget rule guide
            </Link>
            .
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">Zero-based budgeting</strong> — every dollar is
            assigned a job before the month starts, income minus allocations equals zero. Stricter, catches more
            waste, more upkeep. See{' '}
            <Link to="/zero-based-budget-calculator" className="text-brand-600 hover:underline">
              the zero-based budget calculator
            </Link>
            .
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">Cash envelope method</strong> — physical or virtual
            "envelopes" per category, spending stops when the envelope is empty. Best for people who overspend on
            cards specifically.
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">Baseline budgeting for irregular income</strong> —
            budget against your lowest realistic month, treat anything above it as surplus. See{' '}
            <Link to="/irregular-income-budget-planner" className="text-brand-600 hover:underline">
              the irregular income budget planner
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-xl text-slate-900 dark:text-white">Where debt payoff fits in</h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Debt repayment isn't separate from budgeting — it's one of the categories competing for the same
          income. Whichever method you use, decide up front whether you're following the debt snowball (smallest
          balance first, for motivation) or the debt avalanche (highest interest rate first, for total cost) so
          your budget's debt-payment line is consistent month to month. See{' '}
          <Link to="/debt-payoff-snowball-vs-avalanche" className="text-brand-600 hover:underline">
            the debt snowball vs. avalanche calculator
          </Link>
          .
        </p>
      </section>

      <FaqSection id="faq-budget-pillar" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <section className="space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Guides for specific situations</h2>
        <ul className="space-y-2">
          {budgetGuides.map((g) => (
            <li key={g.route}>
              <Link to={g.route} className="text-brand-600 hover:underline">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedContent heading="Related posts" items={budgetPosts.map((p) => ({ to: `/blog/${p.slug}`, title: p.title }))} currentPath={PATH} />

      <p>
        <Link to="/guides/budget" className="text-sm text-brand-600 hover:underline">
          ← All budgeting guides
        </Link>
      </p>
    </div>
  )
}
