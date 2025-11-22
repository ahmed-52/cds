import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from "../UI/Navbar";

const Hero = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-mckinsey-blue">
      <div className="relative z-20">
        <Navbar dark={false} />
      </div>
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/groupphoto.png" 
          alt="Cornell Data Strategy Team"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 38%" }} 
        />
        {/* Gradient Overlay: Strong on left (for text), lighter on right (for image), dark at bottom (for contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/80 to-transparent opacity-95 md:via-[#051C2C]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 lmd:px-12 xl:px-16 max-w-[1600px] mx-auto pt-30 pb-28 md:pb-0">
        
        {/* Content section - left aligned with fade-up animations */}
        <div className="flex flex-col gap-8 max-w-4xl text-left p-2 mt-20">
          
          {/* Label */}

          {/* Main headline using Domine Font */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Transforming strategy,<br />
            <span className="text-gray-300 italic">Delivering</span> execution.
          </h1>

          {/* Subheadline */}
          <p className="text-xsm md:text-lg text-gray-300 font-light leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Cornell's first consulting organization advising C-suites on growth, transformation, and execution. We combine boardroom strategy with hands-on technical power.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-mckinsey-blue font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-white/30 text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-white/10 transition-all duration-300"
            >
              Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with refined border line */}
      <div className="px-6 lmd:px-12 xl:px-16 pb-8 border-t border-white/10 z-20 animate-fade-in mt-10 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0" style={{ animationDelay: '1s' }}>
        <div className="flex items-center justify-between pt-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-cornell-red"></div>
             <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
                Strategy meets execution
             </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 animate-bounce">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest hidden md:block">
              Scroll to explore
            </p>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
