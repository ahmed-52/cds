import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3 } from 'lucide-react';

const Excel = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects for images - subtle movement based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={containerRef} className="relative bg-[#161616] py-32 lg:py-40 overflow-hidden text-white">
      
      {/* Dynamic Background Elements for Depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#155cfc]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cornell-red/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Subtle Grid Lines Overlay to remove "plain" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ROW 1: How We Excel */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 lg:mb-48 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-5/12 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-12 bg-[#155cfc]"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Methodology</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              How we <span className="italic text-[#155cfc] font-light">excel</span> at the edge.
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-10">
              Our teams excel at structuring ambiguous problems, building growth and transformation strategies, and creating technology solutions that make execution possible.
            </p>
            
            {/* Value Props */}
            <div className="space-y-6">
                <div className="flex gap-4 items-start group cursor-default">
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#155cfc]/20 transition-colors mt-1 border border-white/10">
                        <CheckCircle2 size={18} className="text-[#155cfc]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-serif mb-1 text-white group-hover:text-[#155cfc] transition-colors">Structured Ambiguity</h4>
                        <p className="text-sm text-gray-400 font-light">Navigating complex, undefined market challenges with rigorous frameworks.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start group cursor-default">
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#155cfc]/20 transition-colors mt-1 border border-white/10">
                         <BarChart3 size={18} className="text-[#155cfc]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-serif mb-1 text-white group-hover:text-[#155cfc] transition-colors">Execution Focus</h4>
                        <p className="text-sm text-gray-400 font-light">Moving beyond slide decks to build tools that drive real change.</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <div className="lg:w-7/12 relative order-1 lg:order-2">
             <motion.div style={{ y: y1 }} className="relative z-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-slate-800">
                   <img 
                      src="/team/IMG_0217.JPG" 
                      alt="Leadership" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                   />
                   {/* Overlay to unify tone */}
                   <div className="absolute inset-0 bg-[#003A70]/20 hover:bg-transparent transition-colors duration-500"></div>
                </div>
             </motion.div>
             
             {/* Decorative Background Shapes - Adds that "not boring" layered feel */}
             <div className="absolute -right-12 -bottom-12 w-2/3 h-2/3 border border-white/5 z-0 hidden lg:block"></div>
             <div className="absolute -left-8 top-12 w-32 h-32 bg-gradient-to-br from-[#155cfc]/20 to-transparent blur-xl"></div>
          </div>
        </div>


        {/* ROW 2: What Makes Us Different */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
           
           {/* Image Content */}
           <div className="lg:w-7/12 relative">
             <motion.div style={{ y: y2 }} className="relative z-10">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-slate-800">
                   <img 
                      src="/images/jibran-group.jpg" 
                      alt="Group" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                   />
                   <div className="absolute inset-0 bg-[#003A70]/20 hover:bg-transparent transition-colors duration-500"></div>
                </div>
             </motion.div>
              
             {/* Decorative Background Shapes */}
             <div className="absolute -left-12 -top-12 w-full h-full border border-white/5 z-0 hidden lg:block"></div>
           </div>

           {/* Text Content */}
           <motion.div 
             className="lg:w-5/12"
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-px w-12 bg-cornell-red"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-cornell-red">Differentiation</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
                What makes us <span className="italic text-cornell-red font-light">different</span>.
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-8">
                Other clubs teach cases. <span className="text-white font-medium border-b border-cornell-red/50 pb-0.5">We give you clients.</span>
              </p>
              
              <p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed mb-10">
                From day one, you'll be in front of real businesses, shaping strategies, and helping implement solutions. It's hands-on consulting experience: the kind that prepares you for boardrooms, not just interviews.
              </p>

              <a href="/about" className="max-w-[300px] group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-[#003A70] transition-all">
                  Explore Our Culture
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </a>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Excel;
