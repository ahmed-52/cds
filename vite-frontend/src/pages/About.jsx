import { useEffect } from "react";
import AboutHero from "../components/About/AboutHero";
import WhoWeAre from "../components/About/WhoWeAre";
import Organization from "../components/About/Organization";
import Alumni from "../components/About/Alumni";
import Team from "../components/About/Team";

const About = () => {
    useEffect(() => {
        // Handle hash-based scrolling when page loads
        const hash = window.location.hash;
        if (hash) {
            const elementId = hash.substring(1); // Remove the # symbol
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    const offset = 80; // Account for navbar height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, []);

    return (
        <div>
        <AboutHero/>
        <WhoWeAre/>
        <Alumni/>
        <Team/>
         <Organization/>
         {/* SECTION 3: THE FOUNDERS / JOURNEY */}
      <section className="grid lg:grid-cols-12 gap-0 border-t border-[#051C2C]/10 my-10">
        
        {/* Left: Image (Ahmed & Chris) */}
        <div className="lg:col-span-5 relative min-h-[500px] border-r border-[#051C2C]/10 group overflow-hidden">
           <img 
             src="/images/ahmedchris1o.jpg" 
             alt="Ahmed and Chris - Founders" 
             className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out" 
           />
           {/* Subtle overlay for better text contrast if you ever add text over image */}
           <div className="absolute inset-0 bg-[#051C2C]/10"></div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7 p-8 lg:p-24 flex flex-col justify-center bg-[#FAFAFA]">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px w-8 bg-[#155cfc]"></div>
             <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">The Founders</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#051C2C] mb-8 leading-[1.1]">
            Founded on <span className="italic text-slate-400">ambition.</span>
          </h2>
          
          <p className="text-lg text-[#051C2C] font-light leading-relaxed mb-6">
            Cornell Data Strategy wasn't founded in a boardroom; it was forged by Ahmed and Chris, two driven leaders who refused to accept the gap between academic theory and real-world execution.
          </p>
          
          <p className="text-base text-slate-500 font-light leading-relaxed mb-10">
            They saw an opportunity to build something different: an organization that didn't just study cases, but solved them. Fuelled by a relentless desire to prove that student teams could deliver professional-grade impact, they laid the groundwork for a culture of excellence. What started as a shared vision between two ambitious students has evolved into Cornell's premier strategy firm.
          </p>
          
          {/* Signature Block */}
          <div className="mt-auto pt-8 border-t border-[#051C2C]/10 flex gap-12">
              <div>
                <p className="font-serif text-[#051C2C] text-xl">Ahmed</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Co-Founder</p>
              </div>
              <div>
                <p className="font-serif text-[#051C2C] text-xl">Chris</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Co-Founder</p>
              </div>
          </div>
        </div>
      </section>

        </div>
    );
}

export default About;