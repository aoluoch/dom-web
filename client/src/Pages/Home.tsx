import Friendship from "../components/Friendship"
import Hero from "../components/Hero"
import JoinLink from "../components/JoinLink"
import Purpose from "../components/Purpose"
import Sermon from "../components/Sermon"
import Started from "../components/Started"


const Home = () => {
  return (
    <>
        <Hero />
        <JoinLink />
        <Purpose />
        <Sermon />
        <Friendship />
        <Started />
    </>
  )
}

export default Home