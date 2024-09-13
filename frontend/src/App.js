import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import { Footer } from './components/Footer';
import SignIn from './components/SignIn';
import Home2 from './Home2';
import Projects from './components/Projects';


function App() {

  const team = [
    { img: "chris.jpeg", name: "Chris Wang", position: "President" },
    { img: "ahmed.jpg", name: "Ahmed Abdulla", position: "Vice President" },
    { img: "michael.jpeg", name: "Michael Raybetz", position: "Treasurer" }
  ];

  return (


    <Router>
          <div className="App">
            {/* <CustomNavbar /> */}
            <Routes>
            <Route path="/" element={<Home2></Home2>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/login" element={<SignIn></SignIn>} />
            <Route path="/projects" element={<Projects></Projects>} />
            </Routes>
            {/* <Footer></Footer> */}
          </div>
  </Router>
  );
}

export default App;
