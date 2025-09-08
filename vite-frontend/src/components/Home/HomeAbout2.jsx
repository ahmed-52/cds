import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeAbout2 = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial body background to white to prevent flashing
    gsap.set("body", { backgroundColor: "#FFFFFF" });
    
    // Short delay to ensure everything is properly loaded and rendered
    setTimeout(() => {
      // Set up color changing sections - using simpler implementation
      const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
      
      scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "#FFFFFF" : scrollColorElems[i - 1].dataset.bgcolor;
        
        ScrollTrigger.create({
          trigger: colorSection,
          start: i === 0 ? "top 90%" : "top 60%", // First section triggers sooner
          end: "bottom 40%",
          markers: false, // Set to true for debugging
          onEnter: () => {
            gsap.to("body", {
              backgroundColor: colorSection.dataset.bgcolor,
              duration: 0.8,
              ease: "power2.inOut"
            });
          },
          onLeaveBack: () => {
            gsap.to("body", {
              backgroundColor: prevBg,
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        });
      });
    }, 100); // Small delay for stability
    
    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  
  return (
    <main className="overflow-hidden">
      <div className="max-w-[2000px] mx-auto">
        {/* Client Consultations Section - White background */}
        <div 
          className="flex lmd:flex-row flex-col justify-around items-center mt-20 gap-12 py-5 px-5"
          data-bgcolor="#FFFFFF" 
          data-textcolor="#252526"
        >
          <div className="2xl:max-w-[675px] max-w-[550px] w-full">
            <img
              src="/media/nexus.png"
              className="object-cover h-full w-full"
              alt="Client Consultation"
            />
          </div>

          <div className="flex flex-col justify-between items-start gap-4">
            <h2 className="text-textcl text-44 font-bold">Client Consultations</h2>
            <p className="text-18 max-w-[532px]">
            We don't stop at advice. Our teams work directly with client leadership to implement strategies, ensuring decisions translate into measurable outcomes.
            </p>
            
            <a href="/projects" className="hover:underline text-16 font-semibold flex items-center mt-4">
              See Past Projects 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-end items-center w-full">
          <div className="h-8 w-[30%] bg-blue-600">
            <div className="h-full bg-blue-600"></div>
          </div>
        </div>

        {/* Team Synergy Section - Light blue background */}
        <div 
          className="flex lmd:flex-row flex-col-reverse justify-around items-center mt-20 gap-12 px-5"
          data-bgcolor="#F0EBFF" 
          data-textcolor="#252526"
        >
          <div className="flex flex-col justify-between items-start gap-4">
            <h2 className="text-textcl text-44 font-bold">Team Synergy</h2>
            <p className="text-18 max-w-[532px]">
            Business and technical talent working side by side, solving problems faster and better together.
            </p>
            
            <a href="/about" className="hover:underline text-16 font-semibold flex items-center mt-4">
              Meet Our Members
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            
            <div className="relative h-8 w-48 bg-blue-600 my-4">
              <div className="absolute h-full bg-blue-600 right-full w-screen"></div>
            </div>
          </div>

          <div className="2xl:max-w-[675px] max-w-[550px] w-full">
            <img
              src="/media/team.png"
              className="object-cover h-full w-full"
              alt="Team Synergy"
            />
          </div>
        </div>

        {/* Leadership in Action Section - Light gray background */}
        <div 
          className="flex lmd:flex-row flex-col justify-around items-center mt-20 gap-12 relative pt-5 pb-20 px-5"
          data-bgcolor="#E4F2FF" 
          data-textcolor="#252526"
        >
          <div className="2xl:max-w-[575px] max-w-[375px] w-full">
            <img
              src="/media/group.png"
              className="object-cover h-full w-full"
              alt="Leadership in Action"
            />
          </div>

          <div className="flex flex-col justify-between items-start gap-4">
            <h2 className="text-textcl text-44 font-bold">Leadership in Action</h2>
            <p className="text-18 max-w-[532px]">
            Members lead projects end-to-end, managing teams and presenting directly to executives.
            </p>
            
            <a href="/contact" className="hover:underline text-16 font-semibold flex items-center mt-4">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeAbout2;