import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import { Menu, MenuItem, ProductItem } from "./ui/Navbar";

const CustomNavbar = () => {
  const [active, setActive] = useState(null);

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
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4">
            <ProductItem
              title="Project 1"
              description="In progress..."
              href="/projects1"
              src="project.svg"
            />
            <ProductItem
              title="Project 2"
              description="In progress..."
              href="/project2"
              src="project.svg"
              className="font-apercu"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <p className="font-apercu">Learn more about our club.</p>
        </MenuItem>
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
      </Menu>
    </nav>
  );
};

export default CustomNavbar;
