import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import recruitmentData from "../data/Recruitment.json";
import Interview from "../components/Membership/Interview";
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';

const Membership = () => {
  const [currentRecruitmentSeason, setCurrentRecruitmentSeason] = useState(null);

  useEffect(() => {
    const determineSeason = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth(); 
      const currentYear = currentDate.getFullYear();
      
      // Feb (1) or Jan (0) = Spring
      if (currentMonth === 1 || currentMonth === 0) {
        return { season: "spring", year: currentYear, isActive: true };
      }
      // Aug (7) or Sept (8) = Fall
      else if (currentMonth === 7 || currentMonth === 8) {
        return { season: "fall", year: currentYear, isActive: true };
      }
      else {
        return { season: "offseason", year: currentYear, isActive: false };
      }
    };
    setCurrentRecruitmentSeason(determineSeason());
  }, []);

  const getRecruitmentTitle = () => {
    if (!currentRecruitmentSeason) return "Recruitment";
    if (currentRecruitmentSeason.season === "offseason") return recruitmentData.offseason.title;
    const yearSuffix = String(currentRecruitmentSeason.year).slice(-2);
    return `${recruitmentData[currentRecruitmentSeason.season].title} '${yearSuffix}`;
  };

  const handleApply = () => {
    if (!currentRecruitmentSeason || !currentRecruitmentSeason.isActive) {
      toast.info("Applications are currently closed. Please check back at the beginning of the semester.", {
        position: "bottom-right",
        autoClose: 5000
      });
      return;
    }
    window.open(recruitmentData[currentRecruitmentSeason.season].applicationLink, "_blank");
  };

  // Render the Timeline Events manually for full control
  const renderTimelineEvents = () => {
    if (!currentRecruitmentSeason) return null;

    if (currentRecruitmentSeason.season === "offseason") {
      return (
        <div className="p-12 lg:p-20">
          <h2 className="text-3xl font-serif mb-6 text-white">Timeline</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">{recruitmentData.offseason.message}</p>
        </div>
      );
    }

    const events = recruitmentData[currentRecruitmentSeason.season].events;

    return (
        <div className="p-12 lg:p-20">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-8 bg-[#155cfc]"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Schedule</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif mb-12 text-white">Recruitment Timeline</h2>
            
            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
                {events.map((event, index) => (
                    <div key={index} className="relative group">
                        {/* Dot */}
                        <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[#0B1C2B] ${event.highlight ? 'bg-[#155cfc]' : 'bg-white'}`}></div>
                        
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{event.date}</p>
                        <h3 className="text-xl font-serif text-white mb-2">{event.name}</h3>
                        
                        <div className="flex flex-col gap-1 text-sm text-gray-400 font-light">
                            {event.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-[#155cfc]" /> {event.location}
                                </div>
                            )}
                            {event.time && (
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-[#155cfc]" /> {event.time}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      
      {/* --- 1. HERO SECTION --- */}
      <section className="bg-[#051C2C] pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-px w-12 bg-cornell-red"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Join the Team</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                  Join Cornell <br />
                  <span className="italic text-gray-400">Data Strategy.</span>
                </h1>
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                   We're looking for passionate people to join us on our mission to empower data-driven leaders.
                </p>
                <button 
                  onClick={handleApply} 
                  className="inline-flex items-center justify-center bg-white text-[#051C2C] font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-[#155cfc] hover:text-white transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>
         </div>
      </section>

      {/* --- 2. RECRUITMENT SPLIT SCREEN --- */}
      <section className="border-b border-[#051C2C]/10">
         <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-2">
                
                {/* Left: Timeline (Dark) */}
                <div className="bg-[#051C2C] text-white">
                    {renderTimelineEvents()}
                </div>

                {/* Right: Process (Light) */}
                <div className="p-12 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-px w-8 bg-[#051C2C]"></div>
                       <span className="text-xs font-bold uppercase tracking-widest text-[#051C2C]">{getRecruitmentTitle()}</span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-serif text-[#051C2C] mb-12">Selection Process</h2>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                           <span className="text-4xl font-serif text-[#155cfc]/20 font-bold">01</span>
                           <div>
                              <h3 className="text-xl font-serif text-[#051C2C] mb-2">Resume Screen</h3>
                              <p className="text-slate-600 font-light leading-relaxed">We evaluate your qualifications, experiences, and genuine interest in solving meaningful challenges.</p>
                           </div>
                        </div>
                        
                        <div className="flex gap-6">
                           <span className="text-4xl font-serif text-[#155cfc]/20 font-bold">02</span>
                           <div>
                              <h3 className="text-xl font-serif text-[#051C2C] mb-2">Interviews</h3>
                              <p className="text-slate-600 font-light leading-relaxed mb-4">We assess your problem-solving approach across four key dimensions:</p>
                              
                              <div className="grid sm:grid-cols-2 gap-4">
                                  {['Data & Analysis', 'Finance Fundamentals', 'Business Case', 'Personal Experience'].map((item, i) => (
                                      <div key={i} className="bg-gray-50 p-3 border border-gray-100 text-xs font-bold uppercase tracking-widest text-[#051C2C] text-center">
                                        {item}
                                      </div>
                                  ))}
                              </div>
                           </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* --- 3. INTERVIEW PREP SECTION --- */}
      <Interview />

      {/* --- 4. WHY JOIN (CTA) --- */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-24 lg:py-32">
         <div className="bg-gray-50 p-12 lg:p-24 border border-[#051C2C]/5 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#155cfc]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl">
                <h2 className="text-4xl lg:text-5xl font-serif text-[#051C2C] mb-8">Why Join Us?</h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                  At Cornell Data Strategy, we don't just solve problems—we <strong>rethink</strong> how they're approached. Whether anticipating the unexpected, streamlining operations, or turning <strong>raw data</strong> into <strong>transformative strategies</strong>, our projects demand <strong>creativity</strong> and <strong>precision</strong>.
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
                  Here, you won't just learn—you'll lead. Our alumni have gone on to thrive in fields like <strong>quantitative trading</strong>, <strong>investment banking</strong>, <strong>private equity</strong>, and <strong>management consulting</strong>.
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-3 h-3 rounded-full ${currentRecruitmentSeason && currentRecruitmentSeason.isActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#051C2C]">
                        {currentRecruitmentSeason && currentRecruitmentSeason.isActive 
                          ? "Applications are live"
                          : "Applications are currently closed"}
                    </p>
                </div>

                <button 
                  onClick={handleApply} 
                  className="inline-flex items-center justify-center bg-[#051C2C] text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-[#155cfc] transition-all duration-300"
                >
                  Start Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Membership;