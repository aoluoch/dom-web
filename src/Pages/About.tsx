import Cover from "../components/Cover"
import Abt from "../components/Abt"



const About = () => {
  return (
    <>
    <Cover 
    title="ABOUT DOM"
    subtitle="DOM International is an Interdenominational organization."/>

    <div className="container mx-auto px-4 py-8">
      <Abt />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default About
