import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'splitting-rent-different-room-sizes',
  title: 'How to split rent fairly when bedrooms are different sizes',
  description:
    "A method for splitting rent proportionally by room size and amenities, instead of splitting a shared apartment's rent evenly when it isn't fair.",
  date: '2026-03-05',
}

export default function RentSplitDifferentRooms() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Splitting rent 50/50 feels fair right up until one bedroom is 180 square feet with
        a shared wall to the kitchen and the other is 260 square feet with its own
        bathroom and a balcony. An even split ignores that difference and quietly
        overcharges whoever got the smaller room — which is exactly the kind of thing that
        turns into a passive-aggressive group chat six months later.
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

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Get agreement before move-in, not after
      </h2>
      <p>
        The math is the easy part — the hard part is putting a number in front of everyone
        before anyone has unpacked a box. Do the calculation together, in the room, with a
        tape measure. Once people have already moved in and settled into "their" price,
        renegotiating feels like a personal attack instead of a shared spreadsheet
        exercise.
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Measure every private bedroom together.</li>
        <li>Calculate the per-square-foot rate as a group.</li>
        <li>Agree on amenity premiums (if any) before assigning rooms.</li>
        <li>Write down the final split and who owes what, before the first rent is due.</li>
      </ol>

      <Link to="/split" className="btn-primary inline-block">
        Split rent and shared bills
      </Link>
    </BlogPostLayout>
  )
}
