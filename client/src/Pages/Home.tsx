import Footer from "../components/Footer"
import Friendship from "../components/Friendship"
import Hero from "../components/Hero"
import JoinLink from "../components/JoinLink"
import Purpose from "../components/Purpose"
import Sermon from "../components/Sermon"
import Started from "../components/Started"
import TestimonialCarousel from "../components/Testimonial"


const Home = () => {
  return (
    <>
        <Hero />
        <JoinLink />
        <Purpose />
        <Sermon />
        <Friendship />
        <Started />
        <TestimonialCarousel />
        <Footer />
    </>
  )
}

export default Home