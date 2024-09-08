import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Menu, MenuItem, ProductItem } from "./ui/Navbar";

const CustomNavbar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const NavigateToAbout = () => {
    navigate('/about'); // Programmatically navigate to /about
  }

  return (
    <nav className="flex justify-between items-center md:px-8 px-4 py-4 bg-[#FFFAF3] dark:bg-gray-900 shadow-md">
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img
          src="logo.svg" 
          alt="Cornell Data Strategy Logo"
          className="h-10 w-auto" 
        />
      </Link>

      {/* Menu Section */}
      <Menu setActive={setActive} className="flex">


      <a 
          href="/" 
          className="font-apercu"
        >
          Home
        </a>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4">
            <ProductItem
              title="Post-merger Integration"
              description="Network analytics tool."
              href="/projects1"
              src="project.svg"
            />
            <ProductItem
              title="VC Market Research"
              description="In-depth market due diligence for AI verticals"
              href="/project2"
              src="project.svg"
              className="font-apercu"
            />
            <ProductItem
              title="ESG Cost-Budgeting"
              description="Optimizing sustainability metrics and reducing costs for local business"
              href="/project2"
              src="project.svg"
              className="font-apercu"
            />
          </div>
        </MenuItem>

        {/* About Menu Item */}
        <a href="/about">
        <MenuItem setActive={setActive} active={active} item="About">
          <p className="font-apercu">Learn more about our club.</p>
        </MenuItem>
        </a>
        
        {/* Apply Link */}
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSencB7ERcHEKmd80SMZuUKJJNnMUtS-ZYCmWHRnNakLm_YeMw/viewform" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline text-blue-600"
        >
          <MenuItem setActive={setActive} active={active} item="Apply" className="font-apercu">
            Apply to the club
          </MenuItem>
        </a>

        <a 
          href="/login" 
          className="text-white font-apercu bg-[#6462F4] hover:bg-[#4341a0] px-4 py-1 rounded-lg"
        >
          Login
        </a>
      </Menu>
    </nav>
  );
};

export default CustomNavbar;
