import HomeHeader from "../Components/Home/HomeHeader"
import HomeHero from "../Components/Home/HomeHero"
import HowItWorks from "../Components/Home/HowItWorks"
import FeatureSection from "../Components/Home/FeatureSection"
import PointsSection from "../Components/Home/PointsSection"
import CtaSection from "../Components/Home/CtaSection"
import HomeFooter from "../Components/Home/HomeFooter"


const Home = () => {
  
  return (
    <>
      <HomeHeader />
      <HomeHero />
      <HowItWorks />
      <FeatureSection />
      <PointsSection />
      <CtaSection />
      <HomeFooter />
    </>
  )
}

export default Home;