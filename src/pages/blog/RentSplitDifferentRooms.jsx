import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'splitting-rent-different-room-sizes',
  title: 'How to split rent fairly when bedrooms are different sizes',
  description:
    "A method for splitting rent proportionally by room size and amenities, instead of splitting a shared apartment's rent evenly when it isn't fair.",
  date: '2026-03-05',
}

const FAQ = [
  {
    q: 'Is splitting rent evenly ever the right call?',
    a: 'Yes, when the bedrooms are genuinely comparable in size and amenities — a even split only becomes unfair once there is a meaningful difference in square footage, private bathrooms, or other features worth real money.',
  },
  {
    q: 'What counts as private space when measuring for the split?',
    a: 'Only bedrooms, and anything attached exclusively to one bedroom, like a private bathroom or walk-in closet. Shared spaces — the living room, kitchen, hallways, shared bathrooms — stay out of the per-square-foot calculation entirely.',
  },
  {
    q: 'How much should a private bathroom or balcony add to rent?',
    a: "There's no fixed formula, but a flat premium of roughly $50-$150 a month on top of the square-footage split is a reasonable range for a private bathroom. Pick one or two features that genuinely matter to the group rather than trying to price every amenity separately.",
  },
  {
    q: 'What if roommates disagree on the final numbers?',
    a: "Do the measuring and the math together, as a group, before anyone has moved in or picked a room. Disagreements are far easier to resolve when everyone sees the same tape-measure numbers at once than after someone has already settled into a room at a price they assumed was final.",
  },
  {
    q: 'Should the split be renegotiated if someone moves rooms later?',
    a: "Yes — if room assignments change, the square-footage math should be redone for the new arrangement rather than keeping the old rent numbers attached to the wrong rooms.",
  },
  {
    q: 'Does this method work for more than two roommates?',
    a: 'Yes. The same rate-per-square-foot calculation scales to any number of private bedrooms — measure each one, divide total rent by total private square footage, then multiply by each room size to get each share.',
  },
]

export default function RentSplitDifferentRooms() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-splitting-rent-different-room-sizes">
      <p>
        Splitting rent 50/50 feels fair right up until one bedroom is 180 square feet with
        a shared wall to the kitchen and the other is 260 square feet with its own
        bathroom and a balcony. An even split ignores that difference and quietly
        overcharges whoever got the smaller room — which is exactly the kind of thing that
        turns into a passive-aggressive group chat six months later.
      </p>
      <p>
        This comes up constantly in shared apartments and houses, because landlords
        rarely set per-bedroom rent — they set one number for the whole unit and leave the
        roommates to divide it however they like. Without a method, "however they like"
        usually defaults to splitting evenly by headcount, which works fine when the
        bedrooms are similar and works badly the moment they aren't.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why an even split breaks down
      </h2>
      <p>
        An even split assumes every bedroom delivers the same value, which is only true
        when the rooms are actually comparable. The moment one room is noticeably bigger,
        has its own bathroom, or gets better light, an even split is effectively asking
        the person in the smaller or plainer room to subsidize the person in the better
        one. Nobody sets out to do that on purpose — it just happens by default when rent
        gets divided by headcount instead of by what each person is actually getting.
      </p>
      <p>
        The reason this matters more than it might seem is that it compounds every single
        month for as long as the lease runs. A $50 monthly overpayment doesn't feel like
        much in isolation, but across a twelve-month lease it adds up to a real amount —
        and because it's baked into the rent itself rather than a one-time charge, it
        rarely gets questioned once everyone has settled into their assigned price.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        The square-footage method
      </h2>
      <p>
        Measure each private bedroom (not shared space — living room, kitchen, hallways
        stay out of this calculation) and divide the total rent by total private square
        footage to get a rate per square foot. Multiply that rate by each room's size to
        get each person's share. For a $2,400/month apartment with a 180 sq ft room and a
        260 sq ft room:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Rate: $2,400 ÷ 440 sq ft = $5.45/sq ft</li>
        <li>Smaller room: 180 × $5.45 = $981</li>
        <li>Larger room: 260 × $5.45 = $1,419</li>
      </ul>
      <p>
        Notice that the two shares still add up to the full $2,400 — the method
        redistributes the same total rent according to size, it doesn't add anything on
        top. That's worth confirming with a quick sanity check after you calculate each
        share, since a measurement error in one room will throw off the total.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to put it into practice
      </h2>
      <p>
        The math itself only takes a few minutes once everyone is in the room with a tape
        measure. The sequence below keeps the process fair by doing the measuring and
        agreeing on premiums together, rather than one person calculating numbers alone
        and presenting them to the rest.
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Measure every private bedroom together, with everyone present.</li>
        <li>Divide total rent by total private square footage to get the per-square-foot rate.</li>
        <li>Multiply each room's size by that rate to get a baseline share.</li>
        <li>Agree on amenity premiums, if any, before assigning rooms, not after.</li>
        <li>
          Log the final split and who owes what in a{' '}
          <Link to="/split">split expense calculator</Link> so everyone sees the same
          numbers going forward, not just on move-in day.
        </li>
      </ol>
      <p>
        Keeping that record matters beyond move-in day, too. If rent increases at renewal,
        or if someone moves out and a new roommate takes over a room, having the original
        per-square-foot rate on hand means the new numbers can be recalculated
        consistently instead of negotiated from scratch.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Adjust for amenities, not just size
      </h2>
      <p>
        A private bathroom, a walk-in closet, or a balcony can be worth as much as 20-40
        extra square feet in perceived value even if the room itself is average-sized.
        Simplest fix: add a flat $50-$150/month premium on top of the square-footage split
        for an en-suite bathroom, and split the rest by size. Don't try to price every
        feature — pick the one or two that actually matter and stop there, or you'll spend
        an hour arguing about closet depth.
      </p>
      <p>
        It's also fine for the group to decide some differences aren't worth pricing at
        all. A slightly better view or a few extra inches of closet space can reasonably
        be left out of the math if nobody in the group feels strongly about it — the goal
        is a split everyone considers fair enough to stop discussing, not a mathematically
        perfect valuation of every feature in the apartment.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        A one-time napkin calculation at move-in tends to be the only record anyone has,
        which means there's nothing to point back to if a disagreement comes up later or
        if someone switches rooms. Rent changes, late payments, and who-owes-what for a
        given month are easy to lose track of without somewhere that keeps a running
        record, especially once the original move-in conversation is months in the past
        and nobody remembers the exact numbers that were agreed on.
      </p>
      <p>
        It also shows up in smaller ways month to month: one roommate forgets whether this
        month's rent included the agreed amenity premium, or a late payment from one
        person gets tracked informally and then forgotten entirely, leaving the group with
        no record of who actually caught up.
      </p>
      <p>
        None of this requires sophisticated tooling to fix — it just requires somewhere
        durable to write the numbers down, instead of leaving them in a single text
        message from move-in week that nobody can find six months later.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Two bedrooms of noticeably different sizes in the same apartment, split evenly by habit.</li>
        <li>One bedroom with a private bathroom next to one that shares the hallway bathroom.</li>
        <li>A three-bedroom unit where one room has a balcony and the others don't.</li>
        <li>A four-bedroom house where room sizes vary enough that no two shares end up equal.</li>
        <li>A sublet where a new roommate moves into a smaller room mid-lease at the old even rate.</li>
        <li>Roommates renegotiating the split after swapping rooms partway through the year.</li>
        <li>A basement or converted room with less natural light factored into the rate everyone agrees to.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Including shared space like the living room or kitchen in the square-footage math.</li>
        <li>Trying to price every amenity individually instead of picking the one or two that matter.</li>
        <li>Agreeing on a split after people have already moved in and settled into a room.</li>
        <li>Never revisiting the split after a room swap or a rent increase.</li>
        <li>Measuring rooms separately instead of together, leading to disputed numbers later.</li>
        <li>Assuming the biggest room automatically deserves the highest premium without actually measuring it.</li>
      </ul>
      <p>
        That last mistake is common enough to call out on its own: a room that looks
        bigger from the doorway doesn't always measure bigger once you account for an
        awkward layout, a sloped ceiling, or built-in furniture that eats into usable
        space. The tape measure settles arguments that eyeballing a room cannot.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Split rent and shared bills
      </Link>
    </BlogPostLayout>
  )
}
