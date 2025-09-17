import CoverImage from "../components/CoverImage"
import ContactComponent from "../components/ContactComponent"

const Contact = () => {
  return (
    <>
    <CoverImage
      title="CONTACT US"
      subtitle="Get Connected With DOM."
      images={[
        "https://live.staticflickr.com/65535/54793372489_f91cbd829a_z.jpg",
        "https://live.staticflickr.com/65535/54793389428_94eb659585_z.jpg",
      ]}
    />

    <div className="container mx-auto px-4 py-8">
      <ContactComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Contact
