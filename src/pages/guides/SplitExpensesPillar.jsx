import { Link } from 'react-router-dom'
import { useSeo, useJsonLd } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'
import RelatedContent from '../../components/RelatedContent.jsx'
import Breadcrumbs from '../../components/Breadcrumbs.jsx'
import { GUIDES } from './guides.js'
import { POSTS } from '../blog/posts.js'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'
const PATH = '/how-to-split-expenses-fairly'

const FAQ = [
  {
    q: 'What is the fairest way to split shared expenses?',
    a: 'There is no single fairest method — it depends on what the expense is for. An even split works when everyone benefits equally (a group dinner, a shared trip). A proportional split by income or usage works when benefit or ability to pay is unequal (rent for different room sizes, a car used unevenly, bills when incomes differ a lot).',
  },
  {
    q: 'Should rent always be split evenly among roommates?',
    a: 'Only if the rooms are genuinely equivalent. When bedroom size, private bathroom access, or closet space differ meaningfully, an even split systematically overcharges whoever has the smaller room. A size-proportional split (weighting each room\'s share of total usable space) is fairer and easier to defend than an ad-hoc negotiation.',
  },
  {
    q: 'How do I split expenses when incomes are very different?',
    a: 'Split proportionally to income instead of evenly: each person pays the same percentage of their own income, not the same dollar amount. This keeps the burden comparable even though the raw numbers differ. It only works if both people are comfortable being transparent about income, which is worth agreeing on explicitly before using it.',
  },
  {
    q: 'What is the easiest way to track who owes whom in a group?',
    a: 'Record every shared expense as it happens — who paid, the amount, and who it was for — rather than trying to reconstruct it later. At settle-up time, a net-balance calculation collapses everyone\'s individual debts into the minimum number of payments needed to zero everyone out, instead of each person paying each other person separately.',
  },
  {
    q: 'Do I need an app to split expenses, or is a shared note enough?',
    a: 'A shared note works for a handful of one-off expenses. It breaks down once you have recurring costs (rent, utilities) mixed with one-off costs (a trip, a group gift), because manually re-summing everything each month is where arithmetic mistakes creep in. A dedicated tracker that computes running balances removes that manual step.',
  },
  {
    q: 'What is a "settle-up" and why does it matter?',
    a: 'Settling up is the point where balances are converted into actual payments. The naive approach has every person who\'s owed money collect separately from every person who owes them, which can mean far more transfers than necessary. A proper settle-up calculation nets everything first, so a group of 5 people rarely needs more than 2-3 payments total.',
  },
]

export default function SplitExpensesPillar() {
  const splitGuides = GUIDES.filter((g) => g.category === 'split')
  const splitPosts = POSTS.filter((p) => p.category === 'split')

  useSeo({
    title: 'How to Split Expenses Fairly | Common Expenses Tracker',
    description:
      'Every common way to split shared expenses fairly — even split, by income, by room size, by usage — with when to use each, plus free calculators for each case.',
    path: PATH,
  })

  useJsonLd('faqpage-split-expenses-pillar', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  })

  useJsonLd('article-split-expenses-pillar', {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Split Shared Expenses Fairly',
    description:
      'Every common way to split shared expenses fairly, with when to use each and tools for each case.',
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
      <Breadcrumbs trail={[{ to: '/guides/split', label: 'Splitting Expenses' }, { label: 'How to split expenses fairly' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">How to split shared expenses fairly</h1>
        <p className="text-slate-600 dark:text-slate-300">
          "Fair" isn't one formula — it changes depending on what's being split and who's involved. This page
          covers every common situation (roommates, couples, trips, shared cars, uneven incomes) with the actual
          method for each, so you can pick the right one instead of defaulting to "split it evenly" and hoping
          nobody minds.
        </p>
        <Link to="/split" className="btn-primary inline-block">
          Try the free split expense calculator
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="font-semibold text-xl text-slate-900 dark:text-white">The four ways to split an expense</h2>
        <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
          <p>
            <strong className="text-slate-900 dark:text-white">1. Even split</strong> — everyone pays the same
            amount. Correct when everyone benefits equally: a group dinner, a shared streaming subscription, a
            one-off group gift. See the{' '}
            <Link to="/group-gift-cost-splitter" className="text-brand-600 hover:underline">
              group gift cost splitter
            </Link>
            .
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">2. Proportional to a physical share</strong> — used
            when the thing being paid for isn't equal to begin with, most commonly rent for rooms of different
            sizes. See{' '}
            <Link to="/rent-split-calculator-different-room-sizes" className="text-brand-600 hover:underline">
              splitting rent by room size
            </Link>
            .
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">3. Proportional to usage</strong> — used when one
            person benefits from a shared cost more than another, most commonly a shared or carpooled car. See{' '}
            <Link to="/car-cost-splitting-calculator" className="text-brand-600 hover:underline">
              the car cost splitting calculator
            </Link>
            .
          </p>
          <p>
            <strong className="text-slate-900 dark:text-white">4. Proportional to income</strong> — used when
            splitting evenly would create very unequal burden, most commonly for a couple or household with
            unequal incomes. See{' '}
            <Link to="/couples-expense-tracker" className="text-brand-600 hover:underline">
              the couples expense tracker
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-xl text-slate-900 dark:text-white">Tracking as you go vs. reconstructing later</h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          The single biggest source of group-expense arguments isn't the splitting method — it's trying to
          remember who paid for what two weeks after a trip. Log each expense (payer, amount, who it covers) the
          moment it happens. At the end, a net-balance calculation works out the minimum number of payments
          needed to settle everyone up, instead of everyone paying everyone else separately.
        </p>
      </section>

      <FaqSection id="faq-split-expenses-pillar" items={FAQ} />

      <AdSlot slotId="3418754801" />

      <section className="space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Guides for specific situations</h2>
        <ul className="space-y-2">
          {splitGuides.map((g) => (
            <li key={g.route}>
              <Link to={g.route} className="text-brand-600 hover:underline">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedContent heading="Related posts" items={splitPosts.map((p) => ({ to: `/blog/${p.slug}`, title: p.title }))} currentPath={PATH} />

      <p>
        <Link to="/guides/split" className="text-sm text-brand-600 hover:underline">
          ← All splitting-expenses guides
        </Link>
      </p>
    </div>
  )
}
