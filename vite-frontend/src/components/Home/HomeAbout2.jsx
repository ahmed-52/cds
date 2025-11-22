import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ImpactStories = () => {
  const stories = [
    {
      id: "01",
      category: "Consultation",
      title: "Client-First Engagement",
      description: "We don't stop at advice. Our teams work directly with client leadership to implement strategies, ensuring decisions translate into measurable outcomes.",
      image: "/images/zs1.png",
      link: "/projects",
      linkText: "See Past Projects"
    },
    {
      id: "02",
      category: "Synergy",
      title: "Cross-Functional Power",
      description: "Business and technical talent working side by side. We bridge the gap between strategy and engineering execution to solve problems faster.",
      image: "/images/groupg.jpg",
      link: "/about",
      linkText: "Meet Our Members"
    },
    {
      id: "03",
      category: "Leadership",
      title: "Executive Ownership",
      description: "Members lead projects end-to-end, managing teams and presenting directly to executives. It is real-world pressure, preparing us for real-world success.",
      image: "/images/afd.jpg",
      link: "/contact",
      linkText: "Get in Touch"
    }
  ];

  return (
    <section className="bg-white text-[#051C2C] relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="pb-10 lg:pb-32 border-b border-[#051C2C]/10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#155cfc]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Our Impact Model</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif leading-[1.05]">
                Built for <span className="italic text-gray-400">results.</span>
              </h2>
            </div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl lg:ml-auto">
              We operate differently than a standard student club. We model ourselves after the firms we aspire to join, prioritizing client impact and professional rigor above all else.
            </p>
          </div>
        </div>

        {/* The Grid Layout - Strict Lines, No Shadows */}
        <div>
          {stories.map((story, index) => (
            <div key={index} className="group relative border-b border-[#051C2C]/10 grid lg:grid-cols-2">
              
              {/* Content Side */}
              <div className={`relative flex flex-col justify-center py-16 lg:py-24 pr-8 lg:pr-24 ${index % 2 === 1 ? 'lg:order-2 lg:pl-24 lg:pr-0 lg:border-l border-[#051C2C]/10' : 'lg:border-r border-[#051C2C]/10'}`}>
                
                {/* Numbering background decoration */}
                <span className="absolute top-8 left-0 lg:left-8 text-[120px] font-serif leading-none text-[#051C2C]/[0.03] select-none pointer-events-none">
                  {story.id}
                </span>

                <div className="relative z-10">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        {story.category}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-serif mb-6 group-hover:text-[#155cfc] transition-colors duration-300">
                        {story.title}
                    </h3>
                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                        {story.description}
                    </p>
                    
                    <a href={story.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-[#051C2C] pb-1 hover:text-[#155cfc] hover:border-[#155cfc] transition-colors">
                        {story.linkText}
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
              </div>

              {/* Image Side - Strictly Rectangular */}
              <div className={`relative overflow-hidden aspect-[4/3] lg:h-full lg:min-h-[500px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <motion.div 
                   className="w-full h-full"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.7, ease: "easeOut" }}
                 >
                    <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                    />
                 </motion.div>
                 {/* Flash of blue on hover */}
                 <div className="absolute inset-0 bg-[#155cfc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-multiply"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactStories;