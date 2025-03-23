import React from 'react';

const Why = () => {
  return (
    <>

    <section className="bg-light-blue p-6 md:p-20 ">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-start mb-4">Why join Cornell Data & Strategy</h2>
        <p className="text-18 text-start mb-12">
          Gain real-world experience that classroom learning can't provide while building your professional portfolio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Real-World Experience</h3>
            <p className="text-18">
              Contribute to impactful projects like customer acquisition strategies, full-stack applications, data models, and efficiency solutions that deliver measurable results for actual clients.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Industry-Ready Skills</h3>
            <p className="text-18">
              Develop expertise in structured project management, data analysis, client communication, and documentation through our professional consulting model.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Career Acceleration</h3>
            <p className="text-18">
              Join a community of high-achievers and build a portfolio that has helped our alumni secure positions at top consulting firms, tech companies, and startups.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Community & Growth</h3>
            <p className="text-18">
              Commit hours weekly to meaningful work alongside motivated peers who share your passion, with continuous skills development and training opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-20 flex lmd:flex-row flex-col justify-between mb-20 p-5">
        <div className='max-w-[700px]'>
        <h2 className="text-44 font-bold text-start mb-4">What sets us apart from the other consulting organizations?</h2>
        <p className="text-18 text-start mb-12">
            What distinguishes Cornell Data Strategy is our focus on <span className="font-bold italic">high-impact client engagements with tangible outcomes</span>. Members benefit from direct client interaction and work on substantive projects that <span className="font-bold italic">create measurable value</span>. We move fast and deliver real results, not theoretical exercises. When you join Cornell Data Strategy, you'll immediately be part of <span className="font-bold italic">meaningful work that matters</span> to actual clients, providing valuable experience that directly translates to your future career.
        </p>
        </div>
        <div className="flex justify-start mb-12">
            <img src="/media/dsa.svg" alt="DSA" className="" />
        </div>
    </section>

    <section>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Organization Divisions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img src="/media/sa.svg" alt="Strategy & Advisory" className="md:w-75 md:h-75 mb-4" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/media/ti.svg" alt="Technology & Implementation" className="md:w-75 md:h-75 mb-4" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/media/bd.svg" alt="Business Development" className="md:w-75 md:h-75 mb-4" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/media/pi.svg" alt="Platform Innovation" className="md:w-75 md:h-75 mb-4" />
            </div>
          </div>
      
    </section>

          </>
  );
}

export default Why;