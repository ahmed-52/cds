import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Footer } from "./components/Footer";

import "./index.css";

const Home2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: '', type: '' }); 

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

  useEffect(() => {
    // Trigger the animation after a delay to allow the overlay to play first
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Adjust timing as needed (1.5 seconds in this case)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transitionDelay = entry.target.dataset.delay;
          } else {
            entry.target.style.transform = `translateY(${entry.target.dataset.translate})`;
          }
        });
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);


  return (
    <>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#6462F4] z-50 transition-all duration-1000 ease-in-out ${
          animationComplete ? 'translate-y-full' : 'translate-y-0'
        }`}
      ></div>

    <div className="relative min-h-screen flex bg-white">
      {/* Main content on the left */}
      <div className="flex-1">

        <div className="">
          {/* Hamburger Icon */}
          {!isOpen && (
            <button
              className="fixed top-10 right-4 lmd:hidden z-40 text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
      <svg width="37" height="18" viewBox="0 0 37 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="4" fill="#9A9A9A"/>
      <rect y="7" width="37" height="4" fill="#9A9A9A"/>
      <rect y="14" width="37" height="4" fill="#9A9A9A"/>
      </svg>


            </button>
          )}

          {/* Page Content */}
          <div className="md:max-w-[1100px] lmd:ml-[70px] lg:mx-auto">
            <section className="font-apercu pb-10 px-10">
            <div className="flex justify-start items-center z-50  mr-auto mb-20 pt-10">
            <img
            src="logo.svg"
            width={45}
            height={45}
            >
            </img>
            <h1 className="sm:text-[30px] text-[20px] font-apercu ml-3 text-[#252525] ">Cornell Data Strategy Club</h1>
              </div>
              <div className="flex items-center mb-2">
                <h3 className="text-[40px] text-[#252525] font-apercu">Who We Are</h3>
              </div>
              <p className="para mb-6 text-[#252525]">
              Cornell Data Strategy Club is a student organization dedicated to merging the disciplines of data science and business consulting. Our mission is to 
              offer <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">actionable insights</span> and  <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">forecasts</span> that empower local businesses and the 
              Cornell community to make informed, data-driven decisions. By combining in-depth analysis with practical strategies, we aim to address real-world challenges effectively.
              </p>
            </section>


            {/* <section className="font-apercu py-10 px-10 bg-[#ECECEC]">

<div className="flex items-center justify-between">
  <h3 className="md:text-[40px] text-[35px] text-[#252525]">Cornell Data Strategy Club Recruitment Timeline</h3>
  <img
  src="timeline.svg"
  >
  </img>
</div>
<div className="flex justify-start items-start gap-2 mt-5">
  <img
  src="plus.svg"
  alt="plus"
  className="mt-2"
  ></img>
  <div>
    <h1 className="font-apercu text-2xl text-[#252525] mt-0">Sept 13 - Info Session</h1>
    <p className="font-apercu text-base text-[#6462F4]">White Hall 4:30 PM</p>
  </div>
</div>
<div className="flex justify-start items-start gap-2 mt-2">
  <img
  src="plus.svg"
  alt="plus"
  className="mt-2"
  ></img>
  <div>
    <h1 className="font-apercu text-2xl text-[#252525] mt-0">Sept 16 - Info Session</h1>
    <p className="font-apercu text-base text-[#6462F4]">White Hall 5:00 PM</p>
  </div>
</div>
<div className="flex justify-start items-start gap-2 mt-2">
  <img
  src="plus.svg"
  alt="plus"
  className="mt-2"
  ></img>
  <div>
    <h1 className="font-apercu text-2xl text-[#252525] mt-0">Sept 23 - Application Deadline</h1>
    <p className="font-apercu text-base text-[#6462F4]">Submit your application before midnight to be considered.</p>
  </div>
</div>
<div className="flex justify-start items-start gap-2 mt-2">
  <img
  src="plus.svg"
  alt="plus"
  className="mt-2"
  ></img>
  <div>
    <h1 className="font-apercu text-2xl text-[#252525] mt-0">Sept 25-27 - Interviews</h1>
    <p className="font-apercu text-base text-[#6462F4]">Specific time slots will be communicated via email.</p>
  </div>
</div>
          </section> */}

            <style>
            {`
          @media (max-width: 1275px) {
            .flex-container {
              flex-direction: column;
            }
          }

        `}
      </style>

      <section className="font-apercu py-10">
  <div className="flex flex-col items-start mb-6 bg-[#6562F5]">
    <div className="px-10 py-10">
    <h3 className="text-[40px] text-white mb-5">What We Do</h3>
    <p className="para mb-6 text-white max-w-[800px]">
      We offer a variety of services to assist organizations in making data-driven decisions and developing market strategies that align with future trends and business objectives. Our focus is on predictive modeling, product development, and comprehensive data analytics services.
    </p>
    </div>
  </div>


  <div className="flex flex-col items-start mb-6 ">
  <div className="px-10 py-10">
  <h3 className="text-[40px] text-[#252525]">Our Expertise</h3>
  <p className="para mb-6 text-[#252525] max-w-[800px]">
    We specialize in empowering organizations with strategic insights and data-centric solutions. By leveraging predictive analytics, innovative product development, and in-depth market research, we help businesses navigate future trends and achieve their objectives.
  </p>
</div>
  </div>




  

  <div className="flex flex-col lg:flex-row gap-8">
    {/* Predictive Modeling & Market Research */}
    <div
      className="bg-[#252525] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
      data-delay="0.2s"
      data-translate="70px"
    >
      <h3 className="text-[30px] font-semibold mb-4">
        Predictive Modeling & Market Research
      </h3>
      <p>
        We aim to utilize predictive modeling to assist organizations in anticipating future trends and behaviors. Through data-driven insights, we plan to support businesses in making informed decisions and developing more effective market strategies.
      </p>
    </div>

    {/* Product Development and Strategy */}
    <div
      className="bg-[#2562F5] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
      data-delay="0.4s"
      data-translate="24px"
    >
      <h3 className="text-[30px] font-semibold mb-4">
        Product Development and Strategy
      </h3>
      <p>
        Our goal is to guide product development using advanced data analytics and thorough research. From ideation to product launch, we strive to help businesses refine their strategies to better align with market needs and business objectives.
      </p>
    </div>

    {/* Data Analytics & Corporate Advisory */}
    <div
      className="bg-[#6462F4] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
      data-delay="0.6s"
      data-translate="32px"
    >
      <h3 className="text-[30px] font-semibold mb-4">
        Data Analytics & Corporate Advisory
      </h3>
      <p>
        We seek to offer comprehensive data analytics services, aiming to identify emerging trends and actionable insights. Our focus is on improving corporate strategies and enhancing decision-making processes across diverse industries.
      </p>
    </div>
  </div>
        </section>
        



  {/* Contact Section */}
  <section className="font-apercu py-10 px-10 bg-white">
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">Interested in Collaborating?</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      If you're interested in working with us or need our services to solve your organization's challenges, feel free to reach out! We're always looking for new projects and exciting opportunities to collaborate. Contact us at <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">c.data.strategy@gmail.com</span> and let’s explore how we can help your business thrive.
    </p>
  </section>


            <section className="font-apercu mr-auto p-10">
            <section className="bg-white">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-3xl tracking-tight font-apercu font-normal text-gray-900 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mb-3 max-w-2xl text-gray-500 md:mb-12 sm:text-xl text-start font-normal">
            Stay informed about Cornell Data Strategy Club's latest projects, events, and opportunities. Join our newsletter to get updates on club initiatives, data-driven insights, and more.
            </p>
            <form className="" onSubmit={handleSubmit}>
  {/* Display success or error message */}
  {message.text && (
    <p
      className={`mb-3 text-start font-apercu-mono ${
        message.type === 'success' ? 'text-green-600' : 'text-red-600'
      }`}
    >
      {message.text}
    </p>
  )}

  <div className="items-center mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
    <div className="relative w-full">
      <label
        htmlFor="email"
        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Email address
      </label>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
      </div>
      <input
        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
        placeholder="Enter your email"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <button
        type="submit"
        className="py-3 px-5 w-full text-sm bg-[#6462F4] hover:bg-[#4341a0] font-medium text-center text-white font-apercu-mono rounded-lg border cursor-pointer"
      >
        Subscribe
      </button>
    </div>
  </div>
              </form>

          </div>
      </section>
      </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </div>

      {/* Sidebar on the right, with sticky positioning */}
      <div className="hidden lmd:block mr-[2%]">
        <div className="sticky top-10 right-0 bg-white pb-20 pt-5 pr-20 pl-10">
          <nav className="mt-5">
            
          <a href="/" className="block py-1 text-black text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Home
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>

          <a href="/projects" className="block py-1 text-black text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Projects
            <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSencB7ERcHEKmd80SMZuUKJJNnMUtS-ZYCmWHRnNakLm_YeMw/viewform" className="block py-1 text-black text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Apply
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>

          <a href="/about" className="block py-1 text-black text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            About
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#333333] z-20"
        >
          <div className="absolute top-10 right-4">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="23.4629" width="33.1814" height="3.58717" transform="rotate(-45 0 23.4629)" fill="white"/>
          <rect width="33.1814" height="3.58717" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26 23.4629)" fill="white"/>
          </svg>


            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
          <a href="/" className="block py-1 text-white text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Home
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>

          <a href="/projects" className="block py-1 text-white text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Projects
            <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSencB7ERcHEKmd80SMZuUKJJNnMUtS-ZYCmWHRnNakLm_YeMw/viewform" className="block py-1 text-white text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            Apply
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>

          <a href="/about" className="block py-1 text-white text-[18px] font-apercu group relative hover:text-[#c3c3c3]">
            About
            <span className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#6562F5] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
          </a>
          </nav>
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home2;
