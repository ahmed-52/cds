"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";// Ensure correct Firebase import

export function Footer({ theme }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletterEmails"), {
        email: email,
      });
      setEmail("");
      setMessage({ text: "Subscribed successfully!", type: "success" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({ text: "Error subscribing, please try again.", type: "error" });
    }
  };

  const bgClass = theme === "light" ? "bg-white" : "bg-cas";
  const textClass = theme === "light" ? "text-cas" : "text-white";
  const logoSrc = theme === "light" ? "/smdsa.svg" : "/smdsalight.svg";

  return (
    <footer
      className={`${bgClass} border-t-[2px] border-black ${textClass} py-8`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-3 md:gap-0">
        {/* Logo and Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logoSrc}
            alt="Cornell Data Strategy Club Logo"
            className="h-[60px] w-auto mr-4 border-[1px] border-black"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-md font-medium">
          <a
            href="/about"
            className={`hover:underline ${textClass}`}
          >
            Who We Are
          </a>
          <a
            href="/services"
            className={`hover:underline ${textClass}`}
          >
            What We Do
          </a>
          <a
            href="/apply"
            className={`hover:underline ${textClass}`}
          >
            How To Join
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            className="h-[30px] w-[30px]"
            href="https://www.linkedin.com/company/cornell-data-strategy-club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            className="h-[28px] w-[28px] mt-1"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg/insta.svg" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-6 text-center">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          
          <p className="font-shippori">Subscribe To Our Newsletter</p>
          <input
            className="p-2 w-64 text-sm rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-das hover:bg-hov text-white text-sm font-medium rounded"
          >
            Subscribe
          </button>
        </form>
        {message.text && (
          <p
            className={`mt-2 text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>

      {/* Footer Bottom Text */}
      <div className={`text-center text-sm mt-6 ${textClass}`}>
        <p>This organization is a registered student organization of Cornell University.</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Cornell Data Strategy Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
