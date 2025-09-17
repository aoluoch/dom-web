import CoverImage from "../components/CoverImage"
import DepartmentComponent from "../components/DepartmentComponent"

const Departments = () => {
  return (
    <>
    <CoverImage
      title="DEPARTMENTS"
      subtitle="Learn more about DOM Departments"
      images={[
        "https://live.staticflickr.com/65535/54759674183_c7e44ec614_z.jpg",
        "https://live.staticflickr.com/65535/54759788210_71e76e6cb5_z.jpg",
      ]}
    />


    <div className="container mx-auto px-4 py-8">
      <DepartmentComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Departments
