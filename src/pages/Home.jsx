import HeroCard from "../components/HeroCard"
import Carousel from "../components/Carousel"
import ExpandableCards from "../components/ExpandableCards"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <HeroCard />
      <Carousel />
      <ExpandableCards/>
    </div>
  )
}
