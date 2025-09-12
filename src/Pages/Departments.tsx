import Cover from "../components/Cover"
import DepartmentComponent from "../components/DepartmentComponent"

const Departments = () => {
  return (
    <>
    <Cover 
    title="DEPARTMENTS" 
    subtitle="Learn more about DOM Departments" />

    <div className="container mx-auto px-4 py-8">
      <DepartmentComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Departments
