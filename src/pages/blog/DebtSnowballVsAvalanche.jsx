import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'debt-snowball-vs-avalanche')

const FAQ = [
  {
    q: 'Which method pays off debt faster: snowball or avalanche?',
    a: "Avalanche pays less total interest because it targets the highest-APR balance first, so in pure math terms it's faster to be debt-free for the same amount of money. Snowball can still win in practice if its early, visible wins keep you paying extra every month instead of quitting halfway through.",
  },
  {
    q: 'Do I have to pick one method and stick with it forever?',
    a: "No. Many people start with snowball to build the habit of paying extra at all, then switch to avalanche once the smallest balances are cleared and the remaining debts are larger and closer in size. The order matters less than consistently sending extra money somewhere every month.",
  },
  {
    q: "What if two of my balances have almost the same interest rate?",
    a: 'Order them by size instead. You give up almost no interest savings by treating near-equal rates as a tie, and you get an earlier payoff on one balance, which is a free emotional win under either method.',
  },
  {
    q: "Should I include my mortgage in this list?",
    a: "Usually not. Debt snowball and avalanche are built for high-interest consumer debt — credit cards, personal loans, car loans — where extra payments meaningfully shorten the timeline. A mortgage usually has a much lower rate and a much longer term, so it's typically handled as a separate, later goal.",
  },
  {
    q: 'What happens to the payment after a balance is paid off?',
    a: "That balance's full payment — the minimum it used to require, plus whatever extra you were sending it — rolls into the next debt on your list. This is the actual mechanism behind both methods' acceleration: your total monthly debt payment stays the same, but more of it attacks fewer and fewer balances.",
  },
  {
    q: 'Is it better to pause saving and put everything toward debt?',
    a: "Not entirely. Most guidance is to keep a small emergency cushion even while attacking debt aggressively, so an unexpected expense doesn't become a new high-interest balance. Beyond that cushion, extra cash flow toward debt is usually the higher-value move while rates are high.",
  },
  {
    q: "Does a 0% promotional rate change which method I should use?",
    a: "Yes — treat a balance with a temporary 0% rate as lowest priority under avalanche regardless of its size, since it's not currently costing you interest. Just track the date the promotional rate ends, because the balance needs to jump back into the normal order before that date.",
  },
]

export default function DebtSnowballVsAvalanche() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-debt-snowball-vs-avalanche">
      <p>
        Say you're carrying three balances: a $1,200 store card at 27% APR, a $4,500
        personal loan at 11%, and a $9,000 car loan at 6%. You have $400 a month to throw
        at debt beyond the minimums. Which one do you attack first? The snowball and the
        avalanche methods give different answers, and the gap between them is smaller
        than the internet argument about it suggests.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Both methods are ways of ordering your extra debt payments — neither changes how
        much you owe or what any single payment costs. Avalanche ranks every balance by
        interest rate and sends all spare money to the highest-rate one first, paying
        minimums on the rest. Snowball ignores rate entirely and ranks by balance size,
        smallest first. Once the targeted debt hits zero, its payment rolls into whichever
        debt is next on the list, so your total monthly debt payment never actually
        shrinks — it just concentrates on fewer and fewer balances as you go.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>List every debt in one place with its balance, APR, and minimum payment.</li>
        <li>
          Sort that list by interest rate (avalanche) or by balance size (snowball) —
          pick whichever you're more likely to stick with for the next year or two.
        </li>
        <li>Keep paying the minimum on every other debt, and send all spare cash to the top of the list.</li>
        <li>
          When the top debt reaches zero, don't let that freed-up payment disappear into
          everyday spending — redirect the full amount to the next debt on the list.
        </li>
        <li>
          Re-check the payoff timeline whenever your extra-payment amount changes. The{' '}
          <Link to="/savings" className="text-brand-600 hover:underline">
            savings and payoff calculator
          </Link>{' '}
          makes it easy to see how much faster a bigger extra payment actually gets you to zero.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Avalanche minimizes the total interest you pay across every balance.</li>
        <li>Snowball's early payoff wins make it easier to stay consistent for people who've abandoned a payoff plan before.</li>
        <li>Either method beats paying only minimums and hoping to "get to it later."</li>
        <li>A written-down order removes the monthly decision of which card to prioritize, which is one less thing to get wrong when money is tight.</li>
      </ul>
      <p>
        The real benefit of either method over no method at all is that it turns "pay off
        debt" from a vague intention into a specific, repeatable action: same extra
        amount, same target balance, every month, until it's gone. That repeatability is
        what actually gets a balance to zero — the choice between snowball and avalanche
        mostly decides how it feels along the way, not whether it works.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Where manual tracking falls short</h2>
      <p>
        Juggling several balances, rates, and minimums in your head or across scattered
        statements makes it easy to lose track of which debt is actually next in line,
        especially once one gets paid off. The most common failure isn't picking the
        wrong method — it's forgetting to redirect the freed-up payment after a payoff, so
        the extra money quietly gets absorbed into regular spending instead of attacking
        the next balance. Without a running total in one place, it's also hard to tell at
        a glance whether this month's extra payment actually moved the needle or just
        covered rising minimums.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A medical bill, a credit card, and a car loan accumulated over a rough year, with no clear order for which to pay down first.</li>
        <li>A store card everyone keeps paying the minimum on because it never feels urgent, even though it carries the highest rate.</li>
        <li>Someone pays off a small loan but keeps sending the same old minimum to savings instead of rolling it into the next debt.</li>
        <li>A couple moving in together and combining two separate debt lists without re-ranking them as one.</li>
        <li>A tax refund arrives and gets split across several balances instead of going entirely to the top of the list.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Choosing a method before listing every debt, then discovering a forgotten balance changes the right order.</li>
        <li>Cutting minimum payments on other debts to free up more money for the target balance — that triggers late fees and credit damage that cost more than the interest saved.</li>
        <li>Forgetting to redirect a payment after a balance is paid off, which is where most of the speed-up gets lost.</li>
        <li>Switching methods every few months based on motivation instead of picking one and running it.</li>
        <li>Ignoring a temporary 0% promotional rate, which should drop to the bottom of an avalanche order until it expires.</li>
      </ul>
      <p>
        Whichever order you pick, the plan only works if it's written down somewhere you
        actually check — a list of balances, rates, and the current target, updated the
        moment anything changes. That's the whole system; everything else is detail.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Plan your payoff timeline
      </Link>
    </BlogPostLayout>
  )
}
