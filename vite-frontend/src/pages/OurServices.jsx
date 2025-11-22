import React from 'react';
import { CheckCircle2, BarChart3, Clock, Users, Target, ChevronDown } from 'lucide-react';
import OurServicesData from '../components/Home/OurServices';

const OurServices = () => {
  return (
    <div className="bg-white">
      
      {/* --- 1. HEADER SECTION --- */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end border-b border-[#051C2C]/10 pb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-px w-12 bg-[#155cfc]"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Our Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#051C2C] leading-[1.1]">
              Services that drive<br />
              <span className="italic text-slate-400">measurable value.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
             <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                We don't just advise; we build. Whether it's improving supply chains, adjusting pricing, or evaluating market expansion, we create tools, models, and solutions that make a real difference.
             </p>
          </div>
        </div>
      </section>

      {/* --- 2. HOW IT WORKS (Dark Block) --- */}
      <section className="bg-[#051C2C] text-white py-24 lg:py-32">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                
                {/* Left: The Process Steps */}
                <div className="lg:col-span-5">
                   <h2 className="text-3xl md:text-4xl font-serif mb-12">Engagement Model</h2>
                   <div className="space-y-12 relative">
                      {/* Connecting Line */}
                      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10"></div>

                      <Step 
                        number="01" 
                        title="Discovery" 
                        text="We learn more about you, your business, and your goals to define the scope." 
                      />
                      <Step 
                        number="02" 
                        title="Research & Strategy" 
                        text="We conduct thorough research to create the best plan-of-action." 
                      />
                      <Step 
                        number="03" 
                        title="Implementation" 
                        text="We build actionable tools and models, not just slide decks." 
                      />
                      <Step 
                        number="04" 
                        title="Delivery" 
                        text="We hand off a polished solution that produces real results." 
                      />
                   </div>
                </div>

                {/* Right: The Details */}
                <div className="lg:col-span-7 lg:border-l border-white/10 lg:pl-24 flex flex-col justify-center">
                   <h3 className="text-2xl font-serif mb-8 text-[#155cfc]">
                      Results in 8-10 weeks.
                   </h3>
                   <p className="text-lg text-gray-300 font-light leading-relaxed mb-10">
                      At Cornell Data Strategy, our projects are designed to deliver results within a single semester. Each team is led by experienced directors and supported by dedicated associates, ensuring close collaboration.
                   </p>
                   
                   <div className="grid sm:grid-cols-2 gap-8 border-t border-white/10 pt-10">
                      <div className="flex gap-4">
                         <Clock className="text-[#155cfc] shrink-0" />
                         <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Agile Timeline</h4>
                            <p className="text-sm text-gray-400">Weekly touchpoints tailored to your schedule.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <Users className="text-[#155cfc] shrink-0" />
                         <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Dedicated Team</h4>
                            <p className="text-sm text-gray-400">~5 consultants focused solely on your problem.</p>
                         </div>
                      </div>
                   </div>
                </div>

            </div>
         </div>
      </section>

      {/* --- 3. SERVICE OFFERINGS GRID --- */}
      <OurServicesData/>
      <section id="services" className="max-w-[1600px] mx-auto border-x border-[#051C2C]/10">
         <div className="grid md:grid-cols-2">
            
            <ServiceCard 
               number="01"
               title="Strategy & Insights"
               desc="Evaluating new opportunities, optimizing operations, and staying ahead of competitors."
               deliverables={[
                  "Market entry assessment",
                  "Competitive benchmarking",
                  "Cost optimization strategy"
               ]}
            />
            
            <ServiceCard 
               number="02"
               title="Growth & Sales"
               desc="Analyzing customer behavior, pricing, and sales performance to improve revenue."
               deliverables={[
                  "Customer segmentation",
                  "Pricing model optimization",
                  "Churn analysis & retention"
               ]}
            />

            <ServiceCard 
               number="03"
               title="Operations Efficiency"
               desc="Identifying inefficiencies and streamlining workflows to cut costs and improve productivity."
               deliverables={[
                  "Supply chain analysis",
                  "Process automation",
                  "Workforce planning"
               ]}
            />

            <ServiceCard 
               number="04"
               title="Product Development"
               desc="Building dashboards, predictive models, and automation tools for data-driven decisions."
               deliverables={[
                  "Dynamic pricing tools",
                  "Real-time dashboards",
                  "Financial forecasting models"
               ]}
            />

         </div>
      </section>


      <ContactCTA />

    </div>
  );
};

// --- SUB-COMPONENTS ---

const Step = ({ number, title, text }) => (
   <div className="relative flex gap-8 items-start">
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#051C2C] border border-white/20 text-xs font-bold text-[#155cfc]">
         {number}
      </div>
      <div>
         <h4 className="text-lg font-serif text-white mb-2">{title}</h4>
         <p className="text-sm text-gray-400 leading-relaxed max-w-md">{text}</p>
      </div>
   </div>
);

const ServiceCard = ({ number, title, desc, deliverables }) => (
   <div className="group p-12 lg:p-16 border-b border-[#051C2C]/10 md:border-r md:even:border-r-0 hover:bg-gray-50 transition-colors duration-500">
      <span className="text-xs font-bold text-[#155cfc] uppercase tracking-widest mb-6 block">
         {number}
      </span>
      
      <h3 className="text-3xl font-serif text-[#051C2C] mb-6 group-hover:text-[#155cfc] transition-colors">
         {title}
      </h3>
      
      <p className="text-slate-600 font-light leading-relaxed mb-10">
         {desc}
      </p>
      
      <div className="pt-8 border-t border-[#051C2C]/10">
         <h4 className="text-xs font-bold text-[#051C2C] uppercase tracking-widest mb-4">Typical Deliverables</h4>
         <ul className="space-y-3">
            {deliverables.map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={14} className="text-[#155cfc]" />
                  {item}
               </li>
            ))}
         </ul>
      </div>
   </div>
);


const ContactCTA = () => (
  <section className="bg-[#051C2C] py-24 lg:py-32 text-center px-6 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03]" 
         style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
    </div>
    
    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
        Ready to transform your business?
      </h2>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
        From strategy to execution, we help organizations leverage data to drive measurable growth. Let's discuss your specific challenges.
      </p>
      <a 
        href="/contact" 
        className="inline-flex items-center justify-center bg-white text-[#051C2C] font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-[#155cfc] hover:text-white transition-all duration-300"
      >
        Start a Conversation
      </a>
    </div>
  </section>
);

export default OurServices;