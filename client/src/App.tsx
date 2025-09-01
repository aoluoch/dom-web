
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Departments from './Pages/Departments'
import Events from './Pages/Events'
import Institute from './Pages/Institute'
import Register from './Pages/Register'
import Shop from './Pages/Shop'
import Membership from './Pages/Membership'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
