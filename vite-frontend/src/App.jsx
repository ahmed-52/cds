import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'
import Footer from './components/UI/Footer'
import Navbar from './components/UI/Navbar'
import About from './pages/About'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import OurServices from './pages/OurServices'
import Signin from './pages/Signin'
import GatsbyEvent from './pages/GatsbyEvent'
import CorporatePartnerships from './pages/CorporatePartnerships'

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [currentRoute, setCurrentRoute] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentRoute(location.pathname)
  }, [location])

  return (
    <>
      {currentRoute !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/gatsby-event" element={<GatsbyEvent />} />
        <Route path="/corporate-partnerships" element={<CorporatePartnerships />} />
      </Routes>
      <Footer />
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
