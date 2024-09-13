import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Footer } from "./Footer";
import "../index.css";

const Projects = () => {
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
        className={`fixed top-0 left-0 w-full h-full bg-[#252525] z-50 transition-all duration-1000 ease-in-out ${
          animationComplete ? 'translate-y-full' : 'translate-y-0'
        }`}
      ></div>

    <div className="relative min-h-screen flex bg-white">
      {/* Main content on the left */}
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
      <div className="md:max-w-[1100px] lmd:ml-[70px] lg:mx-auto">
  {/* Who We Are Section */}
  <section className="font-apercu pb-10 px-10">
    <div className="flex justify-start items-center z-50 mr-auto mb-20 pt-10">
      <img src="logo.svg" width={45} height={45} alt="Logo" />
      <h1 className="sm:text-[30px] text-[20px] font-apercu ml-3 text-[#252525]">
        Cornell Data Strategy Club
      </h1>
    </div>
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">What We Do</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      At Cornell Data Strategy Club, we focus on using <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data science</span> to solve real-world business challenges across industries. Our projects target real-world problems in areas like <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">strategy</span>, <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">finance</span>, and <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">operations</span>, both for local businesses and the broader Cornell community. Our team of passionate students is dedicated to providing <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data-driven insights</span> that lead to smarter decision-making and impactful solutions.
    </p>
  </section>

  {/* Future Projects Section */}
  <section className="font-apercu py-10 px-10 bg-[#ECECEC]">
    <div className="flex items-center mb-2">
      <h3 className="text-[40px] text-[#252525]">Projects In Progress</h3>
    </div>
    <p className="para mb-6 text-[#252525]">
      We currently have several exciting projects underway. Our team is working on advanced <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">data analysis</span>, <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">product development</span>, and <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">market research</span> for startups, local businesses, and larger organizations. These projects are designed to offer practical solutions that help our clients navigate their industries more effectively. Stay tuned for updates on these projects as we continue to push the boundaries of what data can do.
    </p>
  </section>

  <section className="font-apercu py-10">
    <div className="flex flex-col items-start mb-6 bg-[#6562F5]">
      <div className="px-10 py-10">
        <h3 className="text-[40px] text-white mb-5">Our Expertise</h3>
        <p className="para mb-6 text-white max-w-[800px]">
          From <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">predictive modeling</span> to <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">product strategy</span>, we provide a wide range of data services that empower businesses to make more informed decisions. With a focus on <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">sustainability</span>, <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">innovation</span>, and <span className="underline decoration-[#6562F5] decoration-[1.5px] underline-offset-[3px]">growth</span>, we deliver high-quality insights that align with future business trends.
        </p>
      </div>
    </div>

    {/* Project Cards Section */}
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Post-merger Integration */}
      <div className="bg-[#252525] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110" data-delay="0.2s" data-translate="70px">
        <h3 className="text-[30px] font-semibold mb-4">Post-merger Integration</h3>
        <p>
          Developed a communication diagnosis tool for a construction company following a major merger. This tool enabled smoother transitions and better organizational alignment during the merger process.
        </p>
      </div>

      {/* Market Demand Model */}
      <div className="bg-[#2562F5] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110" data-delay="0.4s" data-translate="24px">
        <h3 className="text-[30px] font-semibold mb-4">Market Demand Model</h3>
        <p>
          Helped a venture capital firm with market analysis and financial forecasting, enabling them to make better investment decisions by understanding future trends in their target industries.
        </p>
      </div>

      {/* ESG Cost-Budgeting */}
      <div className="bg-[#6462F4] text-white p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110" data-delay="0.6s" data-translate="32px">
        <h3 className="text-[30px] font-semibold mb-4">ESG Cost-Budgeting</h3>
        <p>
          Partnered with a local business to develop sustainability metrics and reduce costs. This project aimed to create a more efficient and environmentally conscious operational structure.
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

  <style>
    {`
      @media (max-width: 1275px) {
        .flex-container {
          flex-direction: column;
        }
      }
    `}
  </style>
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

export default Projects;
