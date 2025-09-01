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
            <h3 id='strategy-advisory' className="text-24 font-bold mb-2">Strategy & Transformation</h3>
            <p className="text-18">
            Drive our client-facing consulting projects through market research, financial analysis, and competitive benchmarking. Deliver clear strategic recommendations on growth, operations, and efficiency. Beyond engagements, this team also leads business development and partnerships — identifying potential clients, structuring outreach, and maintaining long-term relationships. Members also publish monthly market research reports to expand our thought leadership.            </p>
          </div>
          <div className="mb-8">
            <h3 id='tech-implementation' className="text-24 font-bold mb-2">Technology Implementation</h3>
            <p className="text-18">
            Build and deploy data science, software, and tech-driven solutions to solve client problems. From developing automation tools and analytics dashboards to integrating machine learning models and streamlining operations, this division turns strategy into execution with practical, scalable technology.            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-24 font-bold mb-2">Brand and Innovation</h3>
            <p id='business-development' className="text-18">
            Lead both the internal and external presence of the organization. This team manages recruitment, knowledge systems, and club operations, while also driving external relations, partnerships, and fundraising. They shape the club’s brand through social media, marketing campaigns, and design work (website, UI/UX graphics, publications).            </p>
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