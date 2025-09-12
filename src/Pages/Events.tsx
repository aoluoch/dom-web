import Cover from "../components/Cover"
import EventComponent from "../components/EventComponent"


const Events = () => {
  return (
    <>
    <Cover
    title="EVENTS"
    subtitle="Join us at any of our special events taking place all year round."/>

    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Check out our annual calendar of events.</h2>
      </div>
      <EventComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Events
