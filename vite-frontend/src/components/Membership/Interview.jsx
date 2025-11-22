import React from "react";
import { CheckCircle2 } from "lucide-react";

const PrepCard = ({ title, code, desc, points }) => (
  <div className="group p-8 border border-[#051C2C]/10 bg-white hover:border-[#155cfc]/30 hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
       <h3 className="text-xl font-serif text-[#051C2C] group-hover:text-[#155cfc] transition-colors">{title}</h3>
       <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 uppercase tracking-widest group-hover:bg-[#155cfc] group-hover:text-white transition-colors">
         {code}
       </span>
    </div>
    
    <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
      {desc}
    </p>
    
    <div className="pt-6 border-t border-gray-100">
       <h4 className="text-xs font-bold uppercase tracking-widest text-[#051C2C] mb-3">Focus Areas</h4>
       <ul className="space-y-2">
          {points.map((point, i) => (
             <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                <CheckCircle2 size={14} className="mt-0.5 text-[#155cfc] shrink-0" />
                <span>{point}</span>
             </li>
          ))}
       </ul>
    </div>
  </div>
);

const Interview = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32 border-y border-[#051C2C]/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
           
           {/* Text Content */}
           <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-px w-12 bg-[#155cfc]"></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Preparation</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#051C2C] mb-6">Interview Guide</h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                  Success in our interviews requires more than just technical knowledge. We look for structured thinking, clarity of communication, and the ability to apply concepts to real-world scenarios.
                </p>
                <div className="hidden lg:block h-64 w-full bg-[#051C2C]/5 mt-8 relative overflow-hidden">
                   {/* Abstract decor */}
                   <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#051C2C]/10 rounded-full"></div>
                </div>
              </div>
           </div>

           {/* Grid of Cards */}
           <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                 
                 <PrepCard 
                   title="Strategy & Transformation"
                   code="ST"
                   desc="Focuses on frameworks and financial logic. We want to see how you break down ambiguous problems."
                   points={[
                     "Market sizing & estimation",
                     "Profitability frameworks",
                     "Financial statement analysis",
                     "Clear recommendation delivery"
                   ]}
                 />

                 <PrepCard 
                   title="Tech & Implementation"
                   code="TI"
                   desc="Focuses on technical problem solving. Similar to a SWE interview but with a business context."
                   points={[
                     "Data structures & algorithms",
                     "System design basics",
                     "Python/SQL proficiency",
                     "Automating business workflows"
                   ]}
                 />

                 <PrepCard 
                   title="Brand & Innovation"
                   code="BI"
                   desc="Focuses on design thinking and execution. Show us how you build and position products."
                   points={[
                     "Portfolio review (UI/UX)",
                     "Marketing strategy",
                     "User-centric design thinking",
                     "Brand positioning"
                   ]}
                 />
                 
                 {/* Placeholder or General Tips Card to fill grid */}
                 <div className="p-8 bg-[#051C2C] text-white flex flex-col justify-center">
                    <h3 className="text-2xl font-serif mb-4">General Tips</h3>
                    <ul className="space-y-4 text-sm text-gray-300 font-light">
                       <li className="border-b border-white/10 pb-2">Research the club's recent projects.</li>
                       <li className="border-b border-white/10 pb-2">Be ready to discuss your resume in depth.</li>
                       <li className="border-b border-white/10 pb-2">Ask thoughtful questions at the end.</li>
                    </ul>
                 </div>

              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default Interview;