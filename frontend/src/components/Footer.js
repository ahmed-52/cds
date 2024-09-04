"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="logo.svg" // Replace with your actual logo path if necessary
            alt="Cornell Data Strategy Logo"
            className="h-12 w-auto mr-4"
          />
          <span className="font-semibold text-lg">Cornell Data Strategy</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="#about" className="hover:underline text-gray-300">
            About Us
          </a>
          <a href="#services" className="hover:underline text-gray-300">
            Services
          </a>
          <a href="#projects" className="hover:underline text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:underline text-gray-300">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="link.svg"
              alt="LinkedIn"
              className="h-6 w-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Cornell Data Strategy. All rights reserved.
      </div>
    </footer>
  );
}
