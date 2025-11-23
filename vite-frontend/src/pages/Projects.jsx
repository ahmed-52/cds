import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import pastProjects from '../data/pastProjects.json';
import currentProjects from '../data/currentProjects.json';

// --- 1. THE NEW CARD COMPONENT ---
// This matches the "Structural Grid" style of your other new pages.
const ProjectGridItem = ({ title, body, image, link }) => (
  <a 
    href={link} 
    className="group relative flex flex-col border-r border-b border-[#051C2C]/10 bg-white hover:bg-gray-50 transition-colors duration-500 h-full"
  >
    {/* Image Area - Grayscale to Color */}
    <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      {/* Blue Flash Overlay */}
      <div className="absolute inset-0 bg-[#155cfc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
      
      {/* Icon Indicator */}
      <div className="absolute top-4 right-4 bg-white text-[#051C2C] p-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight size={16} />
      </div>
    </div>
    
    {/* Content Area */}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="font-serif text-2xl text-[#051C2C] mb-4 leading-tight group-hover:text-[#155cfc] transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 font-light text-sm leading-relaxed line-clamp-3 flex-grow">
        {body}
      </p>
      
      <div className="mt-6 pt-6 border-t border-[#051C2C]/5 flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#051C2C] transition-colors">
        View Case Study
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <div className="bg-white">
      
      {/* --- 2. HERO SECTION --- */}
      <section className="bg-[#051C2C] pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-px w-12 bg-cornell-red"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
              Transforming strategy<br />
              <span className="italic text-gray-400">into impact.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              We don't just advise; we build. From deep-dive data analysis to product development, 
              explore how we help organizations solve their most critical challenges.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. INTRO / CURRENT FOCUS --- */}
      <section className="border-b border-[#051C2C]/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Sticky Label */}
            <div className="lg:col-span-4 p-8 md:p-16 border-r border-[#051C2C]/10 bg-gray-50">
               <h2 className="text-3xl font-serif text-[#051C2C]">Current<br />Engagements</h2>
               <div className="h-1 w-12 bg-[#155cfc] mt-6"></div>
            </div>

            {/* Editorial Text */}
            <div className="lg:col-span-8 p-8 md:p-16 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
                We're currently tackling a diverse range of mandates, working with startups, 
                local businesses, and larger organizations to refine pricing models, 
                streamline operations, and break into new markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-bold uppercase tracking-widest text-[#051C2C]">
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#155cfc] rounded-full"></span>
                    Data Analysis
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#155cfc] rounded-full"></span>
                    Product Strategy
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#155cfc] rounded-full"></span>
                    Market Entry
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CURRENT PROJECTS GRID --- */}
      <section id="recent-projects" className="max-w-[1600px] mx-auto border-x border-[#051C2C]/10">
        {/* Grid Header */}
        <div className="p-6 md:px-12 py-10 border-b border-[#051C2C]/10 bg-gray-50/50">
           <h3 className="text-xl font-serif text-[#051C2C]">Active Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#051C2C]/10">
          {currentProjects.map((project, index) => (
            <ProjectGridItem
              key={`curr-${index}`}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* --- 5. PAST PROJECTS GRID --- */}
      <section className="max-w-[1600px] mx-auto border-x border-[#051C2C]/10 mb-20">
        {/* Grid Header */}
        <div className="p-6 md:px-12 py-10 border-b border-[#051C2C]/10 bg-gray-50/50 mt-12">
           <h3 className="text-xl font-serif text-[#051C2C]">Archive & Past Successes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#051C2C]/10">
          {pastProjects.map((project, index) => (
            <ProjectGridItem
              key={`past-${index}`}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* --- 6. CTA SECTION (High End) --- */}
<section className="bg-[#051C2C] py-24 md:py-32 px-6 text-center relative overflow-hidden">
         {/* Decorative circle */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Ready to start a project?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              As a student-run organization, we operate on a <span className="text-white font-medium">flexible engagement model</span> tailored to the scope of each mandate. Our fees are determined by project complexity and timeline, with proceeds reinvested directly into member development and organizational growth.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-[#051C2C] font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-[#155cfc] hover:text-white transition-all duration-300"
            >
              Submit a Proposal
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
         </div>
      </section>

    </div>
  );
};

export default Projects;