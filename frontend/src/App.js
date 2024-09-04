import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import { SparklesPreview } from './components/ui/SparklesUi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TextGenerate } from './components/TextGenerate';
import { ClubOverview } from './components/ClubOverview';
import Intro from './components/Intro';


function App() {
  return (
    <div className='bg-[#E0DDD6]'>

    <Router>
          <div className="App">
            <CustomNavbar />
            <Routes>
              {/* <Route path="/product1" element={<div>Product 1 Page</div>} />
              <Route path="/product2" element={<div>Product 2 Page</div>} />
              <Route path="/all-products" element={<div>All Products Page</div>} /> */}
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </Router>


        {/* <Intro></Intro> */}
    <SparklesPreview></SparklesPreview>


    <section className='w-full bg-[#333333]'>
      <div className='max-w-[1200px] mx-auto pt-4 pb-12'>
        <h1 className='text-2xl text-white font-medium font-apercu text-center mb-4'>We are excited to announce the formation of Cornell Data Strategy, a student organization dedicated to merging data science and business consulting. Our mission is to deliver actionable insights and forecasts that empower local businesses and the Cornell community to make informed, data-driven decisions. By combining in-depth analysis with practical strategies, we aim to address real-world challenges effectively.</h1>
        <TextGenerate></TextGenerate>
      </div>
    </section>

          <div className='bg-[#6462F4] py-12'>
              <h1 className='md:text-7xl text-2xl text-white font-medium font-apercu mt-4 mb-12 text-center'>What we do?</h1>
          
        <ClubOverview></ClubOverview>



    </div>



    </div>
  );
}

export default App;
