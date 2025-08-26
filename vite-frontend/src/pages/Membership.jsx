import React, { useState, useEffect } from "react";
import Why from "../components/Membership/Why";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import recruitmentData from "../data/Recruitment.json";
import Interview from "../components/Membership/Interview";

import "../index.css";
import CoffeeChat from "../components/Membership/CoffeeChat";

const Membership = () => {
  const [currentRecruitmentSeason, setCurrentRecruitmentSeason] = useState(null);

  useEffect(() => {
    // Determine the current recruitment season
    const determineSeason = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth(); 
      const currentYear = currentDate.getFullYear();
      
      // February is month 1
      if (currentMonth === 1 || currentMonth === 0) {
        return {
          season: "spring",
          year: currentYear,
          isActive: true
        };
      }
      // August is month 7, September is month 8
      else if (currentMonth === 7 || currentMonth === 8) {
        return {
          season: "fall",
          year: currentYear,
          isActive: true
        };
      }
      // Off-season
      else {
        return {
          season: "offseason",
          year: currentYear,
          isActive: false
        };
      }
    };
    
    setCurrentRecruitmentSeason(determineSeason());
  }, []);

  const getRecruitmentTitle = () => {
    if (!currentRecruitmentSeason) return "Recruitment";
    
    if (currentRecruitmentSeason.season === "offseason") {
      return recruitmentData.offseason.title;
    }
    
    const yearSuffix = String(currentRecruitmentSeason.year).slice(-2);
    return `${recruitmentData[currentRecruitmentSeason.season].title}'${yearSuffix}`;
  };

  const onClick = () => {
    if (!currentRecruitmentSeason || !currentRecruitmentSeason.isActive) {
      toast.info("Applications are currently closed. Please check back at the beginning of the semester.", {
        position: "bottom-right",
        autoClose: 5000
      });
      return;
    }
    
    window.open(recruitmentData[currentRecruitmentSeason.season].applicationLink, "_blank");
  };

  const renderTimelineEvents = () => {
    if (!currentRecruitmentSeason) return null;
    
    if (currentRecruitmentSeason.season === "offseason") {
      return (
        <div className="lg:w-1/2 bg-[#0B1C2B] text-white p-8">
          <h2 className="text-3xl font-bold mb-6">Recruitment Timeline</h2>
          <p className="text-lg leading-relaxed">{recruitmentData.offseason.message}</p>
        </div>
      );
    }
    
    const events = recruitmentData[currentRecruitmentSeason.season].events;
    
    return (
      <div className="lg:w-1/2 bg-[#0B1C2B] text-white p-8">
        <h2 className="text-3xl font-bold mb-6">Recruitment Timeline</h2>

        {/* Timeline Container (vertical line) */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-1.5 top-0 bottom-0 border-l border-2 border-white mb-7 mt-5" />

          {events.map((event, index) => (
            <div className="relative mb-10" key={index}>
              {/* Circle (white or blue) */}
              <div className={`absolute -left-[33px] top-1.5 ${event.highlight ? 'bg-blue-500 w-6 h-6 !-left-[35px]' : 'bg-white'} w-4 h-4 rounded-full`} />
              <p className="text-sm mb-1">{event.date}</p>
              <p className="text-lg font-semibold mb-0.5">{event.name}</p>
              {event.location && <p className="text-sm">{event.location}</p>}
              {event.details && event.details.map((detail, detailIndex) => (
                <p className="text-sm mb-1" key={`detail-${index}-${detailIndex}`}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="md:max-w-[1400px] mx-auto">
        <div className="p-5">
          <div className="mt-[100px] mb-16">
            <h1 className="lg:text-[60px] font-bold text-[40px] text-cool mb-3 font-Domine">
              Joining Cornell Data Strategy</h1>
            <p className="font-Domine text-[20px] text-cool para2 max-w-[1000px]">We're looking for passionate people to join us on our mission to empowering data-driven leaders through impactful projects, critical thinking, and innovative solutions.</p>
            <button onClick={onClick} className="bg-primary text-white font-bold hover:bg-primary px-6 py-2 mt-6 font-Domine flex justify-end gap-5 items-center group">
              Apply
              <img
                src="/media/anglearrow.svg"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]"
              />
            </button>
            <div className="mt-6 h-[6px] bg-[#2562F5] w-full"></div>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="">
         
         <CoffeeChat/>

          <h1 className="text-56 text-center my-5">{getRecruitmentTitle()}</h1>

          <div className="font-Domine text-cool w-full mx-auto mt-10">
            {/* Wrapper to make them side-by-side on larger screens, stacked on mobile */}
            <div className="flex flex-col lg:flex-row gap-5">
              {/* LEFT SECTION: Recruitment Timeline */}
              {renderTimelineEvents()}

              {/* RIGHT SECTION: Recruitment Process */}
              <div className="lg:w-1/2 bg-white p-8 border-2 border-textcl">
                <h2 className="text-3xl font-bold mb-6">Recruitment Process</h2>

                {/* Stage 1 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Stage 1: Resume Screen</h3>
                  <p className="leading-relaxed">
                    We'll evaluate your qualifications, experiences, and interest in solving meaningful challenges.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Stage 2: Final Round Interviews</h3>
                  <p className="leading-relaxed">
                    We'll evaluate your problem-solving approach and ability to deliver actionable solutions across 4 dimensions
                  </p>
                </div>

                {/* 4 Dimensions */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Data and Analysis */}
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Data and Analysis</h4>
                      <p className="leading-relaxed text-sm">
                        Demonstrate your understanding of statistical concepts and dataset analysis.
                      </p>
                    </div>

                    {/* Finance Fundamentals */}
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Finance Fundamentals</h4>
                      <p className="leading-relaxed text-sm">
                        Discuss topics like financial statement connections, profitability drivers, or valuations.
                      </p>
                    </div>

                    {/* Business Problem-Solving */}
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Business Problem-Solving</h4>
                      <p className="leading-relaxed text-sm">
                        Solve a short business case, identify potential challenges, and propose actionable solutions.
                      </p>
                    </div>

                    {/* Personal Experience */}
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Personal Experience</h4>
                      <p className="leading-relaxed text-sm">
                        Reflect on past experiences where you worked in teams, resolved conflicts, or tackled complex challenges creatively.
                      </p>
                    </div>
                  </div>

                  {/* Vertical Line */}
                  <div className="hidden md:flex absolute inset-0 justify-center mr-5">
                    <div className="w-[1px] bg-gray-300 h-full"></div>
                  </div>

                  {/* Horizontal Line */}
                  <div className="hidden md:flex absolute inset-0 items-center">
                    <div className="w-full h-[1px] bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Interview />

          <section className="my-20 p-5">
            <h1 className="font-Domine text-textcl text-[35px] mb-5 text-start">Why Join Us?</h1>

            <p className="para2 text-lg text-textcl max-w-[1200px]">
              At Cornell Data Strategy, we don't just solve problems—we <strong>rethink</strong> how they're approached. Whether anticipating the unexpected, streamlining operations, or turning <strong>raw data</strong> into <strong>transformative strategies</strong>, our projects demand <strong>creativity</strong> and <strong>precision</strong>.
              <br /><br />
              Here, you won't just learn—you'll lead. From corporate strategy to finance, data science, and beyond, you'll build skills that set you apart. Our alumni have gone on to thrive in fields like <strong>quantitative trading</strong>, <strong>investment banking</strong>, <strong>private equity</strong>, <strong>management consulting</strong>, and <strong>software engineering</strong>.
            </p>

            <div className="flex justify-start items-center mt-10">
            <div className={`w-3 h-3 rounded-full ${currentRecruitmentSeason && currentRecruitmentSeason.isActive ? 'bg-green-600' : 'bg-red-600'}`} />
              <h2 className="font-Domine sm:text-lg text-base font-bold md:ml-2 ml-1 text-textcl">
                {currentRecruitmentSeason && currentRecruitmentSeason.isActive 
                  ? "Applications are live—be part of something bigger."
                  : "Applications will open at the beginning of the semester—stay tuned!"}
              </h2>
            </div>

            <button onClick={onClick} className="bg-primary text-white font-bold hover:bg-hov px-6 py-2 mt-6 font-Domine flex justify-end gap-5 items-center group">
              Apply
              <img
                src="/media/anglearrow.svg"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]"
              />
            </button>
          </section>

        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Membership;