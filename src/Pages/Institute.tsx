import CoverImage from "../components/CoverImage"
import DomInstituteComponent from "../components/DomInstituteComponent"

const Institute = () => {
  return (
    <>
      <CoverImage
        title="DOM INSTITUTE"
        subtitle="Learn more about DOM Institute's educational programs and courses."
        images={[
        "https://live.staticflickr.com/65535/54932783004_c9d54a4166_z.jpg",
        ]}
    />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Educational Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of educational programs designed to equip and empower you in your spiritual journey.
          </p>
        </div>
        <DomInstituteComponent />
      </div>
      <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Institute