import Cover from "../components/Cover"
import ContactComponent from "../components/ContactComponent"

const Contact = () => {
  return (
    <>
    <Cover
    title="CONTACT US"
    subtitle="Get Connected With DOM."/>

    <div className="container mx-auto px-4 py-8">
      <ContactComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Contact
