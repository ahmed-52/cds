import React from 'react';

const Organization = () => {
  return (
    <>
    <section className="p-6 md:px-20 md:pb-20 max-w-[1400px] mx-auto">
        <div className="border-b-2 border-[#000000] mb-20"></div>
      <h2 className="text-44 font-bold mb-12 text-center">Organization Divisions</h2>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
        <div className="flex-1">
          <div className="mb-8">
            <h3 id='strategy-advisory' className="text-24 font-bold mb-2">Strategy & Advisory</h3>
            <p className="text-18">
              Tackle our consulting cases head-on by conducting market research, financial analysis, and competitive benchmarking. Develop strategic recommendations that help clients make informed decisions on growth, operations, and efficiency.
            </p>
          </div>
          <div className="mb-8">
            <h3 id='tech-implementation' className="text-24 font-bold mb-2">Technology Implementation</h3>
            <p className="text-18">
              Build and deploy data science, software, and tech-driven solutions to solve client problems. From developing automation tools and analytics dashboards to integrating machine learning models and streamlining operations, this division turns strategy into execution with practical, scalable technology.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-24 font-bold mb-2">Business Development</h3>
            <p id='business-development' className="text-18">
              Expand our reach by identifying potential clients, industry partners, and funding opportunities. Take the lead on outreach, deal structuring, and partnership negotiations, ensuring long-term engagement and value creation.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-24 font-bold mb-2">Platform & Innovation</h3>
            <p id='platform-innovation' className="text-18">
              Shape the internal backbone of our organization by developing knowledge management systems, optimizing recruitment strategies, and refining branding & digital presence. Lead projects in UI/UX design, marketing strategy, and operational improvements to make our work more efficient and impactful.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-0 p-10 self-center">
          <img src="/media/divisions.svg" alt="Organization Divisions" className="w-full h-auto max-w-[500px]" />
        </div>
      </div>
    </section>

    <section className="bg-[#0B1C2B] py-12 md:py-20">
  <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-16">
      {/* Image container - properly sized and positioned */}
      <div className="w-full lg:w-5/12 order-2 lg:order-1">
        <img 
          src="/collab.png" 
          alt="Collaboration" 
          className="w-full h-auto  shadow-lg" 
        />
      </div>
      
      {/* Content container - properly aligned */}
      <div className="w-full lg:w-7/12 order-1 lg:order-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          How do they work together?
        </h2>
        <p className="text-base md:text-lg text-white leading-relaxed">
          These divisions work seamlessly, collaborating closely across projects to blend expertise, insights, and innovative solutions. There are no rigid boundaries—each team continuously engages with others, ensuring holistic strategies, integrated technology, proactive business development, and impactful innovation.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Organization;