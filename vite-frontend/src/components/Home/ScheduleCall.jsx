import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScheduleCall = () => {
  return (
    <section className="relative bg-[#F2F2F2] py-24 lg:py-36 px-6 lg:px-12 overflow-hidden">
      
      {/* Background Texture (Dot Pattern) */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{backgroundImage: 'radial-gradient(#051C2C 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* Headline */}
          <div className="lg:col-span-7">
             <p className="text-cornell-red font-bold uppercase tracking-widest text-xs mb-6">
                Ready to transform?
             </p>
             <h2 className="text-5xl md:text-7xl font-serif text-[#051C2C] leading-[1.1] tracking-tight">
               Let's discuss how we can drive <span className="italic text-[#155cfc]">value</span> for your business.
             </h2>
          </div>

          {/* Action & Desc */}
          <div className="lg:col-span-5 pb-2">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
              Contact us for a consultation to discover how our blend of strategy and execution translates to measurable ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-[#051C2C] text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-[#155cfc] transition-all duration-300 shadow-xl"
                >
                  Schedule A Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Decor */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#051C2C]"></div>
    </section>
  );
};

export default ScheduleCall;