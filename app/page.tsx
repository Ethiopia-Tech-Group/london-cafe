import Hero from '../components/sections/Hero'
import BranchSelector from '../components/sections/BranchSelector'
import TodaysOffers from '../components/sections/TodaysOffers'
import ReviewsPreview from '../components/sections/ReviewsPreview'
import Features from '../components/sections/Features'
import Stats from '../components/sections/Stats'
import Newsletter from '../components/sections/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <BranchSelector />
      <TodaysOffers />
      <Features />
      <ReviewsPreview />
      {/* <Newsletter /> */}
    </div>
  )
}