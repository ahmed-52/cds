import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import projectHighlight from '../../data/highlightProjects.json';

// Reusable Card Component specific to this section style
const MinimalProjectCard = ({ title, body, image, link }) => (
  <a href={link} className="group flex flex-col bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden h-full">
    <div className="relative aspect-[16/9] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#051C2C]/20 group-hover:bg-transparent transition-colors"></div>
    </div>
    
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-2xl font-serif text-white group-hover:text-[#155cfc] transition-colors leading-tight">
          {title}
        </h3>
        <ArrowUpRight className="text-gray-500 group-hover:text-[#155cfc] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" size={20} />
      </div>
      <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3 mb-6 flex-grow">
        {body}
      </p>
      <div className="mt-auto">
         <span className="text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/20 pb-1 group-hover:text-white group-hover:border-white transition-all">
            View Case Study
         </span>
      </div>
    </div>
  </a>
);

const ProjectHighlights = () => {
  return (
    <section className="bg-[#051C2C] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
             <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-cornell-red"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Impact</span>
             </div>
             <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
               Selected <span className="italic text-gray-400">Highlights</span>
             </h2>
          </div>
          
          <a href="/projects" className="hidden md:inline-flex items-center justify-center border border-white/30 text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-3 hover:bg-white hover:text-[#051C2C] transition-all duration-300">
            View Full Portfolio
          </a>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectHighlight.map((project, index) => (
            <MinimalProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 md:hidden">
          <a href="/projects" className="block w-full text-center border border-white/30 text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-[#051C2C] transition-all duration-300">
            View Full Portfolio
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectHighlights;