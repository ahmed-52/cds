import React, { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./Footer";

import "../index.css";

const Home2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

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
    <div className="flex justify-start items-center z-50 mr-auto mb-20 pt-10">
      <img src="logo.svg" width={45} height={45} alt="Logo" />
      <h1 className="sm:text-[30px] text-[20px] font-apercu ml-3 text-[#252525]">
        Cornell Data Strategy Club
      </h1>
    </div>
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">About us</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      Cornell Data Strategy Club is a leading student organization that bridges the gap between <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data science</span> and <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">business consulting</span>. We empower local businesses and the Cornell community by offering <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data-driven insights</span> and strategic forecasts that support informed decision-making. Our mission is to tackle real-world challenges by translating complex data into meaningful actions.
    </p>
    <p className="para mb-6 text-[#252525]">
      We are a collaborative environment where students from various academic backgrounds come together, fostering <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">innovation</span>, learning, and real-world impact.
    </p>
  </section>

  {/* Our Approach Section */}
  <section className="font-apercu py-10 px-10 bg-[#ECECEC]">
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">Our Approach</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      At Cornell Data Strategy Club, we specialize in translating complex data into <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">actionable insights</span> that help businesses make informed decisions. By leveraging <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data analysis</span>, <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">predictive modeling</span>, and strategic business consulting, we provide comprehensive solutions tailored to specific needs.
    </p>
    <p className="para mb-6 text-[#252525]">
      From market research to product development, we aim to enhance decision-making processes for organizations through <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data-driven strategies</span>.
    </p>
  </section>

  {/* Student Impact Section */}
  <section className="font-apercu py-10 px-10">
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">Student Impact</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      Our club offers a unique opportunity for students to apply their <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">analytical skills</span> in real-world settings. Through consulting projects, students gain hands-on experience, working with local businesses and organizations to solve strategic problems using data insights.
    </p>
    <p className="para mb-6 text-[#252525]">
      We host <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">workshops</span>, research opportunities, and events that allow students to deepen their understanding of data strategy and its application in various industries.
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

      <section className='py-10 px-10 bg-[#252525] mb-10'> 
<h1 className='text-start text-[40px] md:text-[40px] font-apercu text-white mb-5'>Meet The Team</h1>

<div className='flex flex-wrap justify-start items-center max-w-[1300px] gap-3'>

  <div className="group relative block w-80 h-64 sm:h-80">
    <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
    <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
      <img 
        src="chris.jpeg" 
        alt="Chris Wang"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
      />
      <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Chris Wang<br></br><span className='text-[16px]'>President</span></h2>
      </div>
      <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
        <p className="mt-4 text-sm sm:text-base">
          Chris leads the strategic direction of the club, ensuring all initiatives align with our mission to merge data science and business consulting.
        </p>
        <p className="mt-1 font-bold">Senior</p>
      </div>
    </div>
  </div>

  <div className="group relative block w-80 h-64 sm:h-80">
    <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
    <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
      <img 
        src="ahmed.jpg" 
        alt="Ahmed Abdulla"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
      />
      <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Ahmed Abdulla<br></br><span className='text-[16px]'>Vice President</span></h2>
      </div>
      <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
        <p className="mt-4 text-sm sm:text-base">
        Ahmed oversees project management, team collaboration, and leads the club's tech efforts.
        </p>
        <p className="mt-1 font-bold">Sophomore</p>
      </div>
    </div>
  </div>

  <div className="group relative block w-80 h-64 sm:h-80">
    <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
    <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
      <img 
        src="michael.jpeg" 
        alt="Michael Raybetz"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
      />
      <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Michael Raybetz<br></br><span className='text-[16px]'>Treasurer & Recruitment</span></h2>
      </div>
      <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
        <p className="mt-4 text-sm sm:text-base">
          Michael manages the club's finances and leads our efforts in attracting top talent.
        </p>
        <p className="mt-1 font-bold">Senior</p>
      </div>
    </div>
  </div>

  <div className="group relative block w-80 h-64 sm:h-80">
    <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
    <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
      <img 
        src="alex_stol.jpeg" 
        alt="Alex Stöllinger"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
      />
      <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Alex Stöllinger<br></br><span className='text-[16px]'>Project Lead</span></h2>
      </div>
      <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
        <p className="mt-4 text-sm sm:text-base">
        Alex leads key projects, ensuring high-quality deliverables and managing collaboration between teams.
        </p>
        <p className="mt-1 font-bold">Senior</p>
      </div>
    </div>
  </div>

  <div className="group relative block w-80 h-64 sm:h-80">
    <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
    <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
      <img 
        src="viktor.jpeg" 
        alt="Viktor Stöllinger"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
      />
      <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
        <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Viktor Stöllinger<br></br><span className='text-[16px]'>Business Development Director</span></h2>
      </div>
      <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
        <p className="mt-4 text-sm sm:text-base">
          Viktor focuses on expanding our client base and ensuring the club's growth aligns with our long-term vision.
        </p>
        <p className="mt-1 font-bold">Sophomore</p>
      </div>
    </div>
  </div>

  <div className="group relative block w-80 h-64 sm:h-80">
<span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
<div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
<img 
src="josh.jpeg" 
alt="Josh De Leeuw"
className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
/>
<div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
<h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Josh De Leeuw<br></br><span className='text-[16px]'>Project Lead</span></h2>
</div>
<div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
<p className="mt-4 text-sm sm:text-base">
Josh De Leeuw leads key projects, ensuring high-quality deliverables and managing collaboration between teams.
</p>
<p className="mt-1 font-bold">Junior</p>
</div>
</div>
</div>


</div>
</section>

<section className='py-10 px-10 bg-[#6562F5] mb-10'>
    <h1 className='text-start text-[40px] md:text-[40px] font-apercu text-white mb-5'>Our Team</h1>
    <p className="para mb-6 text-white">
      Our team is the driving force behind our mission. We are a diverse group of students from various academic disciplines, united by our passion for <span className="underline decoration-white decoration-[1.5px] underline-offset-[3px]">data</span> and <span className="underline decoration-white decoration-[1.5px] underline-offset-[3px]">business strategy</span>. Our collaborative environment encourages creativity, innovation, and hands-on learning, where everyone brings their unique skills to the table.
    </p>
    <p className="para mb-6 text-white">
      We believe in a culture of continuous growth and knowledge sharing. Through teamwork and a commitment to excellence, we tackle real-world challenges with a <span className="underline decoration-white decoration-[1.5px] underline-offset-[3px]">data-first approach</span>, always striving to provide the best solutions for our clients and community. Every project we take on is a collective effort, combining individual expertise with a shared vision of making a meaningful impact.
    </p>
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
