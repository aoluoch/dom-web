
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Departments from './Pages/Departments'
import DepartmentDetail from './components/DepartmentDetail'
import Events from './Pages/Events'
import EventDetail from './components/EventDetail'
import BlogDetail from './components/BlogDetail'
import Institute from './Pages/Institute'
// import Shop from './Pages/Shop'
import Membership from './Pages/Membership'
import DomInstituteDetail from './components/DomInstituteDetail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/institute/:slug" element={<DomInstituteDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
