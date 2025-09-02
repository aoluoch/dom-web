import Cover from "../components/Cover"
import DepartmentComponent from "../components/DepartmentComponent"

const Departments = () => {
  return (
    <>
    <Cover 
    title="Departments" 
    subtitle="Learn more about DOM Departments" />

    <div className="container mx-auto px-4 py-8">
      <DepartmentComponent />
    </div>
    </>
  )
}

export default Departments
