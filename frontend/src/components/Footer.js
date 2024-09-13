"use client";
import React from "react";

export function Footer() {
  return (
<footer className="bg-[#252525] border-t-[2px] border-black text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-y-4 md:gap-y-0">
    {/* Logo and Text */}
    <div className="flex justify-center md:justify-start items-center">
      <img
        src="logo.svg"
        alt="Cornell Data Strategy Club Logo"
        className="h-12 w-auto mr-4"
      />
      <span className="font-semibold text-lg">Cornell Data Strategy Club</span>
    </div>

    {/* Navigation Links */}
    <div className="flex justify-center space-x-6">
      <a href="/about" className="hover:underline text-white font-apercu-mono underline">
        About Us
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSencB7ERcHEKmd80SMZuUKJJNnMUtS-ZYCmWHRnNakLm_YeMw/viewform"
        className="hover:underline text-white font-apercu-mono underline"
      >
        Apply
      </a>
    </div>

    <div className="flex justify-center md:justify-end">
      <a
        href="https://www.linkedin.com/in/ahmed-abdulla-1aa908253/"
        className="text-white font-apercu-mono hover:underline"
      >
        Website by <span className="font-bold font-apercu">Ahmed</span>
      </a>
    </div>
  </div>

  <div className="text-center text-sm mt-8 text-white">
    &copy; {new Date().getFullYear()} Cornell Data Strategy Club. All rights reserved.
  </div>
</footer>


  );
}
