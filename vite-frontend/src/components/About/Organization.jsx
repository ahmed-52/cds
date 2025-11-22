import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Organization = () => {
  const divisions = [
    {
      id: "strategy-advisory",
      title: "Strategy & Transformation",
      description: "Drive our client-facing consulting projects through market research, financial analysis, and competitive benchmarking. Deliver clear strategic recommendations on growth, operations, and efficiency. This team also leads business development and partnerships.",
    },
    {
      id: "tech-implementation",
      title: "Technology Implementation",
      description: "Build and deploy data science, software, and tech-driven solutions to solve client problems. From developing automation tools and analytics dashboards to integrating machine learning models and streamlining operations.",
    },
    {
      id: "business-development",
      title: "Brand and Innovation",
      description: "Lead both the internal and external presence of the organization. This team manages recruitment, knowledge systems, and club operations, while also driving external relations, partnerships, and design work.",
    }
  ];

  return (
    <>
    <section className="max-w-[1600px] mx-auto bg-white border-b border-[#051C2C]/10 mb-5">
        
        {/* Header */}
        <div className="pb-20 px-6 md:px-12 text-center border-b border-[#051C2C]/10">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#051C2C]">Organization Divisions</h2>
            <p className="mt-4 text-slate-500 font-light">Built to cover the full spectrum of modern business challenges.</p>
        </div>
      
        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3">
            {divisions.map((div, index) => (
                <div 
                    key={index} 
                    className={`group p-8 lg:p-12 border-b lg:border-b-0 border-[#051C2C]/10 ${index !== 2 ? 'lg:border-r' : ''} hover:bg-gray-50 transition-colors duration-300`}
                >
                    <span className="text-[#155cfc] font-bold text-xs tracking-widest uppercase mb-4 block">
                        0{index + 1}
                    </span>
                    <h3 id={div.id} className="text-2xl font-serif text-[#051C2C] mb-6 group-hover:text-[#155cfc] transition-colors">
                        {div.title}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-sm lg:text-base">
                        {div.description}
                    </p>
                </div>
            ))}
        </div>
    </section>

    {/* How they work together - Dark Section */}
    <section className="bg-[#051C2C] py-24 text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute top-4 -left-4 w-full h-full border border-white/20"></div>
             <img 
               src="/images/farhanjibran.jpg" 
               alt="Collaboration" 
               className="relative w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
             />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
                 <div className="h-px w-12 bg-white/50"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-white/70">Integration</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              How do they work <span className="italic text-gray-400">together?</span>
            </h2>
            
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              These divisions work seamlessly, collaborating closely across projects to blend expertise, insights, and innovative solutions. 
            </p>
            
            <p className="text-base text-gray-400 font-light leading-relaxed border-l border-[#155cfc] pl-6">
              There are no rigid boundaries, each team continuously engages with others, ensuring holistic strategies, integrated technology, proactive business development, and impactful innovation.
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default Organization;