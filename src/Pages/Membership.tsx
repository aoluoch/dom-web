import CoverImage from "../components/CoverImage"
import MembershipForm from "../components/MembershipForm"



const Membership = () => {
  return (
    <>
    <CoverImage
      title="MEMBERSHIP"
      subtitle="Join DOM."
      images={[
        "https://live.staticflickr.com/65535/54792290227_fa0be4cce2_z.jpg",
      ]}
    />

    <div className="container mx-auto px-4 py-8">
      <MembershipForm />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Membership
