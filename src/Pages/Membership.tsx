import Cover from "../components/Cover"
import MembershipForm from "../components/MembershipForm"



const Membership = () => {
  return (
    <>
    <Cover
    title="MEMBERSHIP"
    subtitle="Join DOM."/>

    <div className="container mx-auto px-4 py-8">
      <MembershipForm />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Membership
