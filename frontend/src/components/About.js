import React, { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./Footer";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";
import TeamMember from "./ui/TeamMember";

import "../index.css";
import Proj from "./ui/Proj";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger the animation after a delay to allow the overlay to play first
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Adjust timing as needed (1.5 seconds in this case)
    return () => clearTimeout(timer);
  }, []);


  const directorsAndVPs = [
    {
      image: "chris.jpeg",
      name: "Chris Wang '26",
      title: "Director, Strategy & Implementation",
    },
    {
      image: "/ahmed.jpg",
      name: "Ahmed Abdulla '27",
      title: "Co-director, Strategy & Implementation",
    },
    {
      image: "/alex_stol.jpeg",
      name: "Alex Stöllinger '26",
      title: "Vice President, Strategy & Implementation",
    },
    {
      image: "michael.jpeg",
      name: "Michael Raybetz '25",
      title: "Director, Talent Strategy",
    },
    {
      image: "/viktor.jpeg",
      name: "Viktor Stöllinger '27",
      title: "Director, Business Development",
    },
  ];

  const engagementManagers = [
    {
      image: 'josh.jpeg',
      name: "Josh De Leeuw '25",
      title: "Engagement Manager, Talent Strategy",
    },

    {
      image: "Velaga.jpg",
      name: "Sourabh Velaga '26",
      title: "Engagement Manager, Strategy & Implementation",
    },
    // {
    //   image: "",
    //   name: "Druhv Raina '26",
    //   title: "Manager, Business Development",
    // },
  ];

  const seniorAssociates = [
    {
      image: null,
      name: "Neha Sudarshan '28",
      title: "Senior Associate, Strategy & Implementation",
    },
    {
      image: null,
      name: "Carolyn Fu '28",
      title: "Senior Associate, Strategy & Implementation",
    },
  ];

  const associates = [
    {
      image: "/images/sharvari.jpg",
      name: "Sharvari Vartak '28",
      title: "Associate, Strategy & Implementation",
    },
    {
      image: "/images/daniel.jpg",
      name: "Daniel Khanin '28",
      title: "Associate, Strategy & Implementation",
    },
    {
      image: "/images/alexandra.jpg",
      name: "Alexandra Kramer '28",
      title: "Associate, Strategy & Implementation",
    },
    {
      image: "/images/lorraine.jpg",
      name: "Lorraine Yang '27",
      title: "Associate, Strategy & Implementation",
    },
    {
      image: "/images/saesha.jpg",
      name: "Saesha Agarwal '28",
      title: "Associate, Strategy & Implementation",
    },
    {
      image: "/images/sonja.jpg",
      name: "Sonja Wong '28",
      title: "Associate, Strategy & Implementation",
    },
  ];






  return (
    <>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-das z-50 transition-all duration-1000 ease-in-out ${animationComplete ? 'translate-y-full' : 'translate-y-0'
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
                  <rect width="37" height="4" fill="#9A9A9A" />
                  <rect y="7" width="37" height="4" fill="#9A9A9A" />
                  <rect y="14" width="37" height="4" fill="#9A9A9A" />
                </svg>


              </button>
            )}

            <Header
              theme="light"
              textcl={"white"}
              bg={"cas"}
              active={"impact"}
            ></Header>

            <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px]">

              <div className="mt-12 mb-16"></div>
              <div className="mt-12 mb-16">
                <h1 className="text-[40px] text-black mb-3 font-cond">
                  About Us</h1>
                <img
                  className="w-[100%] h-auto"
                  src="/about1.png"
                >

                </img>
              </div>

              <section className="pb-10">
  <p className="font-gs font-[300]  mb-6 text-cas md:text-[25px] text-[20px]">
    <span className="font-extrabold  md:text-[40px] text-[30px]">Who We Are</span><br /><br />
    The Cornell Data Strategy Club was founded by <strong>Ahmed Abdulla</strong> and <strong>Chris Wang</strong>, who share a unified vision of <span className="underline">strategy</span> driven by rigorous <span className="underline">data analysis</span> and <span className="underline">logical reasoning</span>. Their mission is to create a space where students can tackle real-world challenges and make a meaningful impact through data-driven solutions.
  </p>

  <p className="font-gs font-[300]  mb-6 mt-10 text-cas md:text-[25px] text-[20px]">
    <span className="font-extrabold  md:text-[40px] text-[30px]">Our Philosophy</span><br /><br />
    Our projects are rooted in collaboration, creativity, and a commitment to delivering actionable insights. Whether it’s helping businesses expand their market reach or optimize operations, we empower students to turn data into real impact.
  </p>
</section>




              <style>
                {`
          @media (max-width: 1275px) {
            .flex-container {
              flex-direction: column;
            }
          }

        `}
              </style>


              {/* <div className="h-[10px] w-full bg-das"></div> */}




              <section className="bg-das text-white py-12 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between my-5">
                {/* Text Content */}
                <div className="max-w-screen-md">
                  <h2 className="text-[35px] font-bold mb-4 font-gs">
                    Student <span className="font-normal">Impact</span>
                  </h2>
                  <p className="text-[22px] font-gs ">
                    Our club offers a unique opportunity for students to apply their analytical skills in real-world settings. Through consulting projects, students gain hands-on experience, working with local businesses and organizations to solve strategic problems using data insights.
                  </p>
                </div>

                {/* Icon */}
                <div className="mt-6 md:mt-0">
                  <img
                    src="/svg/collective.svg" // Replace with your icon path
                    alt="Student Impact Icon"
                    className="h-24 w-24 md:h-32 md:w-32"
                  />
                </div>
              </section>




              <section className="container mx-auto my-12 space-y-12">
                <h1 className="text-[40px] font-bold font-gs mt-20 text-center mb-12">
                  Minds Behind Cornell Data Strategy
                </h1>

                {/* Directors and VPs */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Directors & VPs</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center sm:justify-items-start">
                    {directorsAndVPs.map((member, index) => (
                      <TeamMember
                        key={index}
                        image={member.image}
                        name={member.name}
                        title={member.title}
                      />
                    ))}
                  </div>
                </div>

                {/* Engagement Managers */}
                <div>
        <h2 className="text-2xl font-semibold mb-6">Engagement Managers</h2>
        <div className="flex flex-col sm:flex-row justify-start gap-8">
          {engagementManagers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>

                {/* Senior Associates */}
                {/* <div>
        <h2 className="text-2xl font-semibold mb-6">Senior Associates</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {seniorAssociates.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div> */}

                {/* Associates */}
                {/* <div>
        <h2 className="text-2xl font-semibold mb-6">Associates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {associates.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div> */}
              </section>



              {/* Add more sections as needed */}
            </div>
          </div>
        </div>


        {/* Overlay for mobile */}
        {isOpen && (
  <div className="fixed inset-0 bg-[#333333] z-20">
    <div className="absolute top-10 right-4">
      <button
        className="text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="23.4629"
            width="33.1814"
            height="3.58717"
            transform="rotate(-45 0 23.4629)"
            fill="white"
          />
          <rect
            width="33.1814"
            height="3.58717"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26 23.4629)"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <nav className="flex flex-col items-center justify-center h-full">
      <a
        href="/"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Home
        <span
          className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>

      <a
        href="/services"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Capabilities
        <span
          className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>

      <a
        href="/projects"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Impact
        <span
          className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>

      <a
        href="/about"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Our People
        <span
          className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>

      <a
        href="/careers"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Careers
        <span
          className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>

      <a
        href="/contact-us"
        className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
      >
        Contact Us
        <span
          className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        ></span>
      </a>
    </nav>
  </div>
)}
      </div>
      <Footer
        theme={"dark"}
      ></Footer>
    </>
  );
};

export default About;
