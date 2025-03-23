import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StrategyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C7.58172 3 4 6.58172 4 11C4 13.2091 5.2345 14.2091 5.5 16C5.7655 17.7909 5.64453 18.1001 7 19C8.35547 19.8999 9 20 9 21.5C9 23 10.5 22.5 12 22.5C13.5 22.5 15 23 15 21.5C15 20 15.6445 19.8999 17 19C18.3555 18.1001 18.2345 17.7909 18.5 16C18.7655 14.2091 20 13.2091 20 11C20 6.58172 16.4183 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 6.8C10.1698 5.5 11.4689 5 12.8052 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8033 6.8C14.9744 6.11438 14.0267 5.66473 13.0044 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 13C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11C10.4477 14 10 14.4477 10 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  // 2. Growth & Sales Strategy (chart icon)
  const GrowthIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 8L16.0801 12.1999C15.9262 12.3656 15.849 12.4487 15.7656 12.4863C15.6921 12.5194 15.6127 12.5339 15.5339 12.5287C15.4452 12.5227 15.3588 12.4772 15.1873 12.3855L12.8133 11.1453C12.6412 11.0532 12.5555 11.0076 12.4664 11.0017C12.3872 10.9965 12.3073 11.0113 12.2337 11.0447C12.1504 11.0827 12.0736 11.1661 11.9196 11.3326L8 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 8H20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  // 3. Operations & Efficiency Improvements (gear icon)
  const OperationsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15C19.1277 15.8031 19.2583 16.6718 19.7601 17.3918L19.8201 17.4818C20.2376 18.0291 20.2376 18.7614 19.8201 19.3087C19.4026 19.8561 18.6709 19.8561 18.2534 19.3087L18.1934 19.2187C17.6734 18.5987 16.8047 18.3681 16.0016 18.6404C15.2318 18.8992 14.7501 19.6292 14.7501 20.4499V20.5999C14.7501 21.3729 14.1231 22 13.3501 22H12.6501C11.877 22 11.2501 21.3729 11.2501 20.5999V20.4499C11.2501 19.6292 10.7684 18.8992 9.99856 18.6404C9.19548 18.3681 8.32682 18.5987 7.80682 19.2187L7.74682 19.3087C7.32931 19.8561 6.59762 19.8561 6.18011 19.3087C5.7626 18.7614 5.7626 18.0291 6.18011 17.4818L6.24011 17.3918C6.74197 16.6718 6.87255 15.8031 6.60026 15C6.34148 14.2302 5.61144 13.7485 4.79074 13.7485H4.64074C3.86769 13.7485 3.24074 13.1215 3.24074 12.3485V11.6485C3.24074 10.8754 3.86769 10.2485 4.64074 10.2485H4.79074C5.61144 10.2485 6.34148 9.76682 6.60026 8.99704C6.87255 8.19392 6.74197 7.3253 6.24011 6.60524L6.18011 6.51524C5.7626 5.96789 5.7626 5.2356 6.18011 4.68825C6.59762 4.1409 7.32931 4.1409 7.74682 4.68825L7.80682 4.77825C8.32682 5.39827 9.19548 5.62885 9.99856 5.35656H10.0005C10.7703 5.09777 11.252 4.36772 11.252 3.54704V3.40001C11.252 2.62697 11.879 2 12.652 2H13.352C14.125 2 14.752 2.62697 14.752 3.40001V3.54704C14.752 4.36772 15.2337 5.09777 16.0035 5.35656C16.8066 5.62885 17.6752 5.39827 18.1952 4.77825L18.2552 4.68825C18.6728 4.1409 19.4044 4.1409 19.8219 4.68825C20.2395 5.2356 20.2395 5.96789 19.8219 6.51524L19.7619 6.60524C19.2601 7.3253 19.1295 8.19392 19.4018 8.99704C19.6606 9.76682 20.3906 10.2485 21.2113 10.2485H21.3613C22.1344 10.2485 22.7613 10.8754 22.7613 11.6485V12.3485C22.7613 13.1215 22.1344 13.7485 21.3613 13.7485H21.2113C20.3906 13.7485 19.6606 14.2302 19.4018 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  // 4. Product & Data Tool Development (tools icon)
  const ProductIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.7251 2.97923 20.5061C3.76027 21.2872 5.02664 21.2872 5.80769 20.5061L12.8787 13.435" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8889 10.8889L10.4444 7.44444M15.5556 9.22222L18.6667 6.11111M10.8889 13.8889L7.44446 10.4444M9.22224 15.5556L6.11113 18.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.2247 5.74524L17.68 4.29L19.7101 6.32005L18.2548 7.77528M16.2247 5.74524L10.6364 11.3335L12.6665 13.3635L18.2548 7.77528M16.2247 5.74524L18.2548 7.77528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );


const ServiceCard = ({ title, description, examples, deliverables, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='services' className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-100">
      <div 
        className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="mr-4 text-primary w-6 h-6">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-textcl">{title}</h3>
        </div>
        <div>
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-primary" />
          ) : (
            <ChevronDown className="h-6 w-6 text-primary" />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-gray-100">
              <p className="text-gray-700 mb-4">{description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2 text-textcl">What this could look like:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2 text-textcl">Deliverables:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {deliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StepCard = ({ number, title, description, icon }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute h-full w-px bg-blue-200 left-1/2 transform -translate-x-1/2 -z-10" />
      
      <div className="rounded-full bg-primary w-14 h-14 flex items-center justify-center text-white text-2xl font-bold z-10">
        {number}
      </div>
      
      <div className="mt-4 bg-white rounded-lg shadow-md p-6 w-full border border-gray-100">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-primary">{icon}</div>
          <h3 className="text-xl font-bold text-textcl">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      title: "Strategy & Insights",
      description: "We help businesses make smarter decisions by using data to evaluate new opportunities, optimize operations, and stay ahead of competitors.",
      icon: <StrategyIcon />,
      examples: [
        "Market entry assessment with key risks and opportunities",
        "Competitive benchmarking report with data-driven positioning",
        "Cost optimization strategy with projected savings",
        "Customer and product positioning insights"
      ],
      deliverables: [
        "Executive strategy report with key findings",
        "Data-backed scenario models and projections",
        "Actionable roadmap for implementation"
      ]
    },
    {
      title: "Growth & Sales Strategy",
      description: "We analyze customer behavior, pricing, and sales performance to improve revenue and retention.",
      icon: <GrowthIcon />,
      examples: [
        "Customer segmentation analysis with data-driven targeting strategies",
        "Pricing model optimization for increased conversions",
        "Sales funnel evaluation with recommendations for reducing drop-off",
        "Churn analysis with retention strategies"
      ],
      deliverables: [
        "Growth strategy playbook",
        "Segmentation and targeting framework",
        "Sales optimization dashboard",
        "Revenue forecasting models"
      ]
    },
    {
      title: "Operations & Efficiency Improvements",
      description: "We identify inefficiencies and streamline workflows to cut costs and improve productivity.",
      icon: <OperationsIcon />,
      examples: [
        "Supply chain analysis with bottleneck identification",
        "Process automation to eliminate repetitive manual tasks",
        "Workforce planning insights for better resource allocation",
        "Workflow efficiency mapping to improve decision-making speed"
      ],
      deliverables: [
        "Operational improvement roadmap",
        "Performance tracking dashboard",
        "Custom process automation tools"
      ]
    },
    {
      title: "Product & Data Tool Development",
      description: "We build dashboards, predictive models, and automation tools to help businesses make faster, data-driven decisions.",
      icon: <ProductIcon />,
      examples: [
        "Dynamic pricing tool that adjusts based on market demand",
        "Real-time business dashboard tracking key metrics",
        "Financial forecasting model for revenue projections",
        "Automated reporting system to visualize data with no manual input"
      ],
      deliverables: [
        "Custom-built dashboards and data visualization tools",
        "User-friendly predictive models for business decisions",
        "Automated reporting and workflow solutions"
      ]
    }
  ];

  // For the workflow steps, we should also create SVG icons instead of emojis,
  // but I'll keep them as emojis for now since they weren't part of your request
  const steps = [
    {
      number: 1,
      title: "Get in Touch",
      description: "Schedule an initial consultation where we'll discuss your business challenges and goals to understand how we can help.",
      icon: ""
    },
    {
      number: 2,
      title: "Preliminary Research",
      description: "We conduct a deep dive into your industry, competition, and business processes to identify opportunities for improvement.",
      icon: ""
    },
    {
      number: 3,
      title: "Strategy Planning",
      description: "We present our findings and collaborate with you to determine the best approach, with regular check-ins to ensure alignment.",
      icon: ""
    },
    {
      number: 4,
      title: "Implementation",
      description: "Our team develops and implements data-driven solutions tailored to your specific needs, with ongoing feedback and adjustments.",
      icon: ""
    },
    {
      number: 5,
      title: "Delivery & Support",
      description: "We deliver the final product along with documentation and training, ensuring you have everything needed to maintain success.",
      icon: ""
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0B1C2B] to-[#2562F5] overflow-hidden shadow-lg mb-16">
        <div className="p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            At Cornell Data Strategy, we help businesses put data to work.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-16">
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
          At Cornell Data Strategy, we help businesses put data to work. We find inefficiencies, explore new market opportunities, and solve financial and operational challenges. Whether it's improving supply chains, adjusting pricing, or evaluating market expansion, we don't just give advice—we build tools, create models, and implement solutions that make a real difference.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-textcl">Overview</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-8">
            At Cornell Data Strategy, our projects are designed to deliver results within a single semester (8-10 weeks) during the Spring or Fall. Each team is led by experienced directors and supported by a group of dedicated associates, ensuring close collaboration and focused execution. We offer regular touch-points, whether weekly or bi-weekly, and customize our approach to align with each client's unique needs and goals, ensuring every partnership is impactful and efficient.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-2">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="text-4xl mb-2">🔍</div>
              <p className="font-semibold text-textcl">Discovery</p>
            </div>
            
            <div className="hidden md:block text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="text-4xl mb-2">📊</div>
              <p className="font-semibold text-textcl">Analysis</p>
            </div>
            
            <div className="hidden md:block text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="text-4xl mb-2">🏗</div>
              <p className="font-semibold text-textcl">Solution Development</p>
            </div>
            
            <div className="hidden md:block text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎯</div>
              <p className="font-semibold text-textcl">Implementation & Handoff</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-textcl">How It Works</h2>
        
        <div className="grid grid-cols-1 gap-10 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
          
          {/* Hide the last connector line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-14 bg-white z-10"></div>
        </div>
      </div>

      {/* Our Services */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-textcl">Our Services</h2>
        
        <div>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              examples={service.examples}
              deliverables={service.deliverables}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 shadow-inner">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-textcl">Ready to transform your business with data?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Let's discuss how our expert team can help you solve challenges and unlock new opportunities.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default OurServices;