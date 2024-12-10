import React from 'react';

import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import SignIn from './components/SignIn';
import Home2 from './Home2';
import Project from './components/Project';
import Services from './components/Services';
import { Footer } from './components/Footer';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';


function App() {

  const team = [
    { img: "chris.jpeg", name: "Chris Wang", position: "President" },
    { img: "ahmed.jpg", name: "Ahmed Abdulla", position: "Vice President" },
    { img: "michael.jpeg", name: "Michael Raybetz", position: "Treasurer" }
  ];

  return (


    <Router>
          <div className="App">

            <Routes>
            <Route path="/" element={<Home2></Home2>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/login" element={<SignIn></SignIn>} />
            <Route path="/projects" element={<Project></Project>} />
            <Route path="/services" element={<Services></Services>} />
            <Route path="/careers" element={<Careers></Careers>} />
            <Route path="/contact-us" element={<Contact></Contact>} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            {/* <Footer></Footer> */}
          </div>
  </Router>
  );
}

export default App;
