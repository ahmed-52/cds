import React from 'react';
import { Check, Download, Users, GraduationCap, Briefcase, ArrowRight, Building2 } from 'lucide-react';

const CorporatePartnerships = () => {
  return (
    <div className="bg-white">
      
      {/* --- 1. HERO SECTION (Corporate Focus) --- */}
      <section className="bg-[#051C2C] pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
         {/* Subtle grid background */}
         <div className="absolute inset-0 opacity-[0.1]" 
              style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>

         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-cornell-red"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Corporate Relations</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
                        Access the next generation<br />
                        <span className="italic text-gray-400">of strategy leaders.</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                        Partner with Cornell Data Strategy to connect with the university's top analytical talent. We offer structured opportunities for recruitment, brand building, and direct engagement.
                    </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                    <a href="mailto:c.data.strategy@gmail.com" className="inline-flex items-center justify-center bg-white text-[#051C2C] font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#155cfc] hover:text-white transition-all duration-300">
                        Request Sponsorship Deck
                        <Download className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
         </div>
      </section>

      {/* --- 2. THE TALENT PROFILE (Stats Grid) --- */}
      <section className="border-b border-[#051C2C]/10 bg-gray-50">
         <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
               <StatBox label="Average GPA" value="3.85" icon={GraduationCap} />
               <StatBox label="Active Members" value="45+" icon={Users} />
               <StatBox label="Majors Represented" value="12" icon={Briefcase} />
               <StatBox label="Top Firm Placements" value="100%" icon={Building2} />
            </div>
         </div>
      </section>

      {/* --- 3. WHY PARTNER? --- */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 py-24 lg:py-32">
         <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
               <h2 className="text-4xl font-serif text-[#051C2C] mb-6">Targeted Recruitment</h2>
               <div className="h-1 w-12 bg-[#155cfc] mb-8"></div>
               <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                  Our members are rigorously selected through a multi-round case interview process with an acceptance rate of under 5%. 
               </p>
               <p className="text-lg text-slate-600 font-light leading-relaxed">
                  By partnering with us, you bypass the noise of general campus recruiting and gain direct access to students who have already demonstrated the ability to solve complex strategic and technical problems.
               </p>
            </div>
            <div className="lg:col-span-7">
               <div className="grid md:grid-cols-2 gap-6">
                  <BenefitCard title="Resume Book Access" desc="Full database of member resumes, filtered by graduation year and technical skillset." />
                  <BenefitCard title="Exclusive Events" desc="Host private coffee chats, case workshops, or tech talks directly with our membership." />
                  <BenefitCard title="Brand Visibility" desc="Prime placement on our website, newsletters, and campus marketing materials." />
                  <BenefitCard title="Case Competitions" desc="Sponsor a campus-wide data strategy competition to identify top talent early." />
               </div>
            </div>
         </div>
      </section>

      {/* --- 4. SPONSORSHIP TIERS (The Matrix) --- */}
      <section className="bg-[#051C2C] text-white py-24 lg:py-32" id="tiers">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-serif mb-6">Partnership Levels</h2>
               <p className="text-gray-400 max-w-2xl mx-auto font-light">
                  We offer three tiers of engagement designed to meet different recruitment and branding objectives for the academic year.
               </p>
            </div>

            <div className="grid lg:grid-cols-3 border border-white/10">
               {/* TIER 1: SILVER */}
               <TierCard 
                  name="Silver"
                  price="$1,500"
                  description="Brand awareness and digital presence."
                  features={[
                     "Logo on Website & Merch",
                     "Newsletter Feature (2x/Sem)",
                     "Resume Book Access (Fall)",
                     "Social Media Spotlight"
                  ]}
               />
               
               {/* TIER 2: GOLD (Highlighted) */}
               <TierCard 
                  name="Gold"
                  price="$3,000"
                  description="Direct engagement and recruitment."
                  highlight={true}
                  features={[
                     "Everything in Silver",
                     "Full Year Resume Book Access",
                     "1 Private Info Session",
                     "1 Technical Workshop Hosting",
                     "Direct Email Blast to Members"
                  ]}
               />

               {/* TIER 3: PLATINUM */}
               <TierCard 
                  name="Platinum"
                  price="$5,000+"
                  description="Strategic partnership and exclusive access."
                  features={[
                     "Everything in Gold",
                     "Case Competition Sponsorship",
                     "Exclusive Networking Dinner",
                     "Guaranteed Interview Slots",
                     "Priority Project Sourcing",
                     "Dedicated Student Liaison"
                  ]}
               />
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-sm text-gray-400 italic">
                  *Custom packages available upon request. 501(c)(3) donation receipts provided.
               </p>
            </div>
         </div>
      </section>

      {/* --- 5. CTA --- */}
      <section className="py-24 text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-serif text-[#051C2C] mb-6">Become a Partner</h2>
            <p className="text-lg text-slate-600 font-light mb-10">
               Ready to connect with Cornell's top talent? Contact our VP of External Relations to discuss a package that fits your needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-[#051C2C] text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-[#155cfc] transition-all duration-300 shadow-xl"
            >
              Contact Corporate Relations
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
         </div>
      </section>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatBox = ({ label, value, icon: Icon }) => (
   <div className="p-12 border-r border-b border-[#051C2C]/10 flex flex-col items-center text-center bg-white hover:bg-gray-50 transition-colors">
      <Icon className="w-8 h-8 text-[#155cfc] mb-4 opacity-80" />
      <h3 className="text-4xl font-serif text-[#051C2C] mb-2">{value}</h3>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
   </div>
);

const BenefitCard = ({ title, desc }) => (
   <div className="p-8 border border-[#051C2C]/10 hover:border-[#155cfc]/30 transition-colors">
      <h3 className="text-xl font-serif text-[#051C2C] mb-3">{title}</h3>
      <p className="text-sm text-slate-600 font-light leading-relaxed">{desc}</p>
   </div>
);

const TierCard = ({ name, price, description, features, highlight = false }) => (
   <div className={`p-10 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 relative ${highlight ? 'bg-[#0B2336]' : 'bg-transparent'}`}>
      {highlight && (
         <div className="absolute top-0 left-0 right-0 h-1 bg-[#155cfc]"></div>
      )}
      
      <div className="mb-8">
         <h3 className={`text-lg font-bold uppercase tracking-widest mb-2 ${highlight ? 'text-[#155cfc]' : 'text-gray-400'}`}>
            {name}
         </h3>
         <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-serif text-white">{price}</span>
            <span className="text-sm text-gray-500">/ year</span>
         </div>
         <p className="text-sm text-gray-400 font-light leading-relaxed">
            {description}
         </p>
      </div>

      <div className="flex-grow space-y-4 mb-10">
         {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
               <Check size={16} className={`mt-0.5 shrink-0 ${highlight ? 'text-[#155cfc]' : 'text-gray-500'}`} />
               <span className="font-light">{feature}</span>
            </div>
         ))}
      </div>

      <a 
         href="/contact"
         className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-all border ${
            highlight 
            ? 'bg-[#155cfc] border-[#155cfc] text-white hover:bg-white hover:text-[#051C2C] hover:border-white' 
            : 'border-white/20 text-white hover:bg-white hover:text-[#051C2C]'
         }`}
      >
         Select {name}
      </a>
   </div>
);

export default CorporatePartnerships;