import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'saving-for-a-vacation')

const FAQ = [
  {
    q: 'How far in advance should I start saving for a trip?',
    a: 'As soon as you know roughly when and where you\'re going. The further out you start, the smaller the required monthly amount — a $2,700 trip is $340/month over eight months but $900/month over three, and that second number often forces a smaller trip or a credit card balance.',
  },
  {
    q: 'Should I keep vacation savings in the same account as everyday money?',
    a: "Keeping it separate — a sub-account or a dedicated savings account — makes it much less likely the money gets spent on something else before the trip. Seeing it mixed in with your regular balance makes it look more available than it actually is.",
  },
  {
    q: 'What should I do if I can\'t hit the monthly savings target?',
    a: "Revisit the trip's scope before reaching for a credit card. Shortening the trip, choosing a cheaper destination, or pushing the dates out a few months are all ways to lower the required monthly amount without carrying a balance afterward.",
  },
  {
    q: 'How big should the buffer in my vacation budget be?',
    a: "A buffer of around 10% of the total trip cost is a reasonable starting point — it absorbs the small overruns (an extra meal out, a higher-than-expected taxi fare) that happen on almost every trip. Round your estimate up, not down, when you're unsure.",
  },
  {
    q: 'Is it worth booking flights before the savings fund is full?',
    a: "Often yes, if the fare is refundable and reasonable — locking in a price removes one of the four cost buckets from further uncertainty. Just make sure the booking doesn't come out of money earmarked for a different bucket, like daily spend.",
  },
  {
    q: "What's the biggest reason people end up putting a vacation on a card?",
    a: "The daily-spend bucket — food, local transport, activities — is usually guessed once at the start and never revisited, while flights and lodging get locked in early. By the time the trip arrives, daily spend has quietly grown past the original estimate.",
  },
]

export default function SavingForVacation() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-saving-for-a-vacation">
      <p>
        Most vacations end up partly on a credit card not because the trip was
        unaffordable, but because the saving started too late or the target number was
        never set. A week-long trip booked eight months out needs a different plan than
        one booked eight weeks out — the math changes, but the approach doesn't.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        Saving for a vacation without debt means treating the trip as a sized, dated
        goal rather than something you'll "find room for" closer to the time. That means
        breaking the total cost into concrete buckets — flights, lodging, daily spend, and
        a buffer — and turning the total into a fixed monthly savings amount based on how
        many months remain before departure. The method is the same whether the trip is
        three months or a year away; only the monthly number changes.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Estimate each bucket separately: flights, lodging, daily spend (food, local
          transport, activities), and a 10% buffer on top of the subtotal. For a
          week-long domestic trip for two, a realistic split is roughly $600 flights, $900
          lodging, ~$980 daily spend, and $250 buffer — about $2,730 total.
        </li>
        <li>Divide that total by the number of months until departure to get your monthly savings target.</li>
        <li>
          Open a separate account or sub-account for the trip and set up an automatic
          transfer for that amount the day after payday, before it can be absorbed into
          everyday spending.
        </li>
        <li>
          Book refundable flights and lodging as soon as prices look reasonable, even
          before the fund is full — this locks in two of your four buckets.
        </li>
        <li>
          Re-check your daily-spend bucket a month out using real prices for the
          destination, and use the{' '}
          <Link to="/savings" className="text-brand-600 hover:underline">
            savings calculator
          </Link>{' '}
          to see how a revised target changes the monthly amount you still need to save.
        </li>
      </ol>
      <p>
        None of this needs a complicated spreadsheet — a single running total of "saved
        so far" against the target, checked a couple of times a month, is enough to catch
        a shortfall while there's still time to adjust the plan instead of the week
        before departure.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A sized target turns a vague worry ("can I afford this trip?") into a specific monthly number you can actually plan around.</li>
        <li>Automating the transfer removes the temptation to skip a month "just this once."</li>
        <li>Booking early with a locked-in price reduces how much of the trip's cost is still uncertain closer to departure.</li>
        <li>You arrive home without a new balance to pay off, so the trip doesn't tax next month's budget too.</li>
      </ul>
      <p>
        There's also a planning benefit that's easy to miss: once the four buckets are
        sized, you can see exactly which one to trim if the total comes in too high for
        your timeline. Cutting the daily-spend bucket by choosing a cheaper destination
        for meals is a very different decision than cutting the lodging bucket, and a
        sized plan is what lets you make that choice deliberately instead of guessing.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Where manual tracking falls short</h2>
      <p>
        A mental estimate of "I'll just save some money before the trip" rarely survives
        contact with a normal month of bills and surprises. Without a running total
        against a dated target, it's easy to be several hundred dollars behind with six
        weeks left and not notice until flights and hotels are already booked at a price
        that assumed the fund would be full. A single running number — saved so far versus
        target — is what catches that gap early enough to still fix it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A family trip booked eight months out, saved for in small automatic transfers instead of one large withdrawal near the date.</li>
        <li>A long weekend booked only eight weeks out, where the monthly savings number is high enough to force a smaller daily-spend budget.</li>
        <li>A couple splitting the monthly savings target proportionally to income instead of evenly.</li>
        <li>A solo traveler re-pricing the daily-spend bucket a month before departure and finding it's grown past the original estimate.</li>
        <li>A refundable flight booked early at a lower fare, freeing up part of the lodging bucket for a better hotel.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Estimating the total cost once at the start and never revisiting the daily-spend bucket as the trip gets closer.</li>
        <li>Skipping the buffer entirely, so one unexpected cost (a canceled train, a higher taxi fare) eats into money meant for something else.</li>
        <li>Keeping trip savings in the same account as everyday spending, where it quietly gets drawn down for other things.</li>
        <li>Starting to save only after booking, instead of sizing the trip around what can actually be saved in the time available.</li>
        <li>Rounding estimates down to make the trip look more affordable than it is.</li>
      </ul>
      <p>
        Every one of these mistakes comes down to the same root cause: a number that was
        estimated once and never checked again. A trip that's sized early, saved for
        automatically, and re-priced as the date gets closer rarely ends up on a credit card.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Set your vacation savings goal
      </Link>
    </BlogPostLayout>
  )
}
