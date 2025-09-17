import CoverImage from "../components/CoverImage"
import Abt from "../components/Abt"



const About = () => {
  return (
    <>
    <CoverImage
    title="ABOUT DOM"
    subtitle="DOM International is an Interdenominational organization."
    images={[
      "https://live.staticflickr.com/65535/54793396973_6a0babd535_z.jpg",
      "https://live.staticflickr.com/65535/54793397023_830c06d994_z.jpg",
    ]}
  />


    <div className="container mx-auto px-4 py-8">
      <Abt />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default About
