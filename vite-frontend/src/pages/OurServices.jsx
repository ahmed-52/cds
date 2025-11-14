import React from 'react';

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


const ServiceCard = ({ title, description, examples, deliverables }) => {
  return (
    <div id='services' className="mb-16 last:mb-0 group">
      {/* Header with title and upward caret */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl md:text-4xl font-bold text-textcl">{title}</h3>
        <span className="text-primary text-2xl opacity-60 group-hover:opacity-100 transition-opacity">▲</span>
      </div>
      
      {/* Blue divider line */}
      <div className="h-1.5 bg-primary w-full mb-8 rounded-full"></div>
      
      {/* Description paragraph */}
      <p className="text-18 text-gray-700 mb-10 leading-relaxed max-w-4xl">{description}</p>
      
      {/* Two-column content box - no gap, lighter blue */}
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* Left Panel - Light Blue */}
        <div className="bg-gradient-to-br from-[#E4F2FF] to-[#D0E5FF] p-10">
          <h4 className="font-bold text-xl mb-6 text-textcl">What this could look like:</h4>
          <ul className="list-none space-y-3">
            {examples.map((example, index) => (
              <li key={index} className="text-16 text-gray-700 flex items-start gap-3">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Panel - Primary Blue (same as Contact Us button) */}
        <div className="bg-gradient-to-br from-primary to-blue-700 p-10">
          <h4 className="font-bold text-xl mb-6 text-white">Deliverables:</h4>
          <ul className="list-none space-y-3">
            {deliverables.map((deliverable, index) => (
              <li key={index} className="text-16 text-white flex items-start gap-3" style={{ color: 'white' }}>
                <span className="text-white/90 mt-1.5 flex-shrink-0">•</span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ title, description, buttonText, buttonLink, isLast }) => {
  return (
    <div className="relative flex items-start mb-10 last:mb-0">
      {/* Vertical arrow line on the left */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <svg 
            className="w-5 h-5 text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {!isLast && (
          <div className="w-0.5 bg-primary/30 min-h-[90px] rounded-full"></div>
        )}
      </div>
      
      {/* Content aligned to the right */}
      <div className="flex-1 pt-1">
        <h3 className="text-2xl font-bold text-textcl mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {buttonText}
          </a>
        )}
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

  const steps = [
    {
      number: 1,
      title: "Get in Touch",
      description: "We learn more about you, your business, and your goals.",
      buttonText: "Contact Us",
      buttonLink: "/contact"
    },
    {
      number: 2,
      title: "Research",
      description: "We conduct thorough research to create the best plan-of-action to achieve your goals.",
      buttonText: null,
      buttonLink: null
    },
    {
      number: 3,
      title: "Implement Project",
      description: "We choose the right project type for your needs and implement actionable solutions.",
      buttonText: "View our Project Types",
      buttonLink: "/services#services"
    },
    {
      number: 4,
      title: "Deliver Result",
      description: "We deliver a polished project that produces real results for your business.",
      buttonText: "Featured Projects",
      buttonLink: "/projects"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-44 md:text-5xl font-bold mb-10 text-textcl tracking-tight">Our Services</h1>
        
        {/* First paragraph */}
        <p className="text-18 md:text-xl leading-relaxed mb-6 text-textcl max-w-4xl">
          At Cornell Data Strategy, we help businesses put data to work. We find inefficiencies, explore new market opportunities, and solve financial and operational challenges.
        </p>
        
        {/* Second paragraph */}
        <p className="text-18 md:text-xl leading-relaxed mb-0 text-textcl max-w-4xl">
          Whether it's improving supply chains, adjusting pricing, or evaluating market expansion, we don't just give advice - we build tools, create models, and implement solutions that make a real difference.
        </p>
      </div>

      {/* Overview Sub-header */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-textcl tracking-tight">Overview</h2>
        <div className="h-1.5 bg-primary w-full rounded-full"></div>
      </div>

      {/* Two-Column Section with Shared Blue Gradient Background - Full Width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-64 pb-16 mb-20" style={{ background: 'linear-gradient(to bottom, #0B1C2B, #4A90E2, white)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            {/* Left Panel - How it Works Card (floating on top of blue gradient) */}
            <div className="bg-gradient-to-b from-[#E4F2FF] to-[#B8D9F5] p-10 rounded-2xl shadow-2xl border border-white/50 -mt-72 lg:-mt-80 max-w-lg backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-textcl tracking-tight">How it Works</h2>
              
              <div className="relative">
                {steps.map((step, index) => (
                  <StepCard
                    key={index}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    buttonText={step.buttonText}
                    buttonLink={step.buttonLink}
                    isLast={index === steps.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Right Panel - Text directly on blue gradient */}
            <div className="flex items-start pt-8 pb-12 -mt-20">
              <div className="space-y-8 text-left w-full max-w-2xl">
                {/* First paragraph with icon */}
                <div className="flex items-start gap-5 group -mt-12">
                  <div className="flex-shrink-0 mt-1.5 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed pt-1" style={{ color: 'white' }}>
                    At Cornell Data Strategy, our projects are designed to <span className="font-bold text-white">deliver results within a single semester (8-10 weeks)</span> during the Spring or Fall.
                  </p>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-white/30 w-full ml-16"></div>
                
                {/* Second paragraph with icon */}
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 mt-1.5 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed pt-1" style={{ color: 'white' }}>
                    Each team is led by <span className="font-bold text-white">experienced</span> directors and supported by a group of dedicated associates, ensuring close <span className="font-bold text-white">collaboration</span> and focused <span className="font-bold text-white">execution</span>.
                  </p>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-white/30 w-full ml-16"></div>
                
                {/* Third paragraph with icon */}
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 mt-1.5 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed pt-1" style={{ color: 'white' }}>
                    We offer <span className="font-bold text-white">regular touch-points</span>, whether weekly or bi-weekly, and customize our approach to align with each client's unique needs and goals, ensuring <span className="font-bold text-white">every partnership is impactful and efficient</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="mt-20">
        <div className="space-y-0">
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

      {/* Current Projects Section */}
      <div className="mt-24 mb-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-textcl tracking-tight">Current Projects</h2>
          <div className="h-1.5 bg-primary w-full rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* REST Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img 
                className="w-full h-56 object-cover" 
                src="/projects/rest.png" 
                alt="REST Project" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-textcl">REST</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A hospitality provider needed a way to comb through guests' feedback for practical yet impactful operational changes. We're currently using web scraping and NLP to create personalized recommendations. The final product is a dashboard to monitor reviews.
              </p>
              <a 
                href="/projects"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get involved
              </a>
            </div>
          </div>

          {/* Vortex Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img 
                className="w-full h-56 object-cover" 
                src="/projects/vortex.jpeg" 
                alt="Vortex Project" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-textcl">Vortex</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A healthcare provider needed to better serve underserved demographics and improve payer negotiations. Our multilingual outreach initiatives and pricing framework increased patient engagement by 12% and payer reimbursements by 4.72%.
              </p>
              <a 
                href="/projects"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get involved
              </a>
            </div>
          </div>

          {/* Phoenix Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img 
                className="w-full h-56 object-cover" 
                src="/projects/b2b.png" 
                alt="Phoenix Project" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-textcl">Phoenix</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A B2B service provider struggled to expand its customer base, relying heavily on referrals. By optimizing their outreach and leveraging high-value trade events, we increased qualified leads by 15% and secured ~ $400,000 in new contracts within three months.
              </p>
              <a 
                href="/projects"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get involved
              </a>
            </div>
          </div>

          {/* Nexus Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img 
                className="w-full h-56 object-cover" 
                src="/projects/nexus.jpg" 
                alt="Nexus Project" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-textcl">Nexus</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A restaurant needed a way to comb through guests' feedback for practical yet impactful operational changes. We're currently using web scraping and NLP to create personalized recommendations. The final product is a dashboard to monitor reviews.
              </p>
              <a 
                href="/projects"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get involved
              </a>
            </div>
          </div>

          {/* Quantum Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img 
                className="w-full h-56 object-cover" 
                src="/projects/payerstrat.png" 
                alt="Quantum Project" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-textcl">Quantum</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A healthcare provider needed to better serve underserved demographics and improve payer negotiations. Our multilingual outreach initiatives and pricing framework increased patient engagement by 12% and payer reimbursements by 4.72%.
              </p>
              <a 
                href="/projects"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;