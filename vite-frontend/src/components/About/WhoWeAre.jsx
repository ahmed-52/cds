import React from 'react';

const WhoWeAre = () => {
  return (
    <main className='max-w-[1400px] mx-auto'>
    <section className="flex flex-col lmd:flex-row items-center justify-between md:items-start p-6 md:p-20">
      <div className="lmd:max-w-[750px] max-w-[500px] lmd:self-auto self-start">
        <h1 className="text-44 font-bold mb-4">Who we are</h1>
        <p className="text-18">
          At Cornell Data Strategy, we're a diverse collective of analytical problem-solvers who transform complex data into actionable business strategies. We bring together technical expertise and business acumen to uncover the narratives hidden within numbers. United by curiosity and Teamorative spirit, we forge partnerships that deliver work that matters—not just executing projects, but fundamentally changing how organizations leverage their data to achieve meaningful results.
        </p>
      </div>
      <div id='who-we-are' className="max-w-[429px] w-auto mt-6 lmd:ml-12  self-start">
        <img src="/images/group2.png" alt="Team" className="w-full h-auto" />
      </div>
    </section>

    <section className="p-6 md:px-20 md:pb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Non-stop Collaborative Culture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mx-auto">
            <img src="/media/collab5.png" alt="Collaboration 1" className="md:max-w-[270px] max-w-[350px] w-full h-auto" />
          </div>
          <div className="mx-auto">
            <img src="/images/Team2.png" alt="Collaboration 2" className="md:max-w-[300px] max-w-[350px] w-full h-auto" />
          </div>
          <div className="mx-auto">
            <img src="/images/Team3.png" alt="Collaboration 3" className="md:max-w-[300px] max-w-[350px] w-full h-auto" />
          </div>
          <div className="mx-auto">
            <img src="/images/Team4.png" alt="Collaboration 4" className="md:max-w-[270px] max-w-[350px] w-full h-auto" />
          </div>
        </div>
      </section>


      <section className="flex flex-col md:flex-row items-center justify-between md:items-start p-6 md:px-20 md:pt-20">
        <div className="self-start max-w-[300px] w-auto mt-6 md:mt-0 md:mr-12 mb-8">
          <img src="/media/group.png" alt="Journey" className="w-full h-auto min-w-[300px]" />
        </div>
        <div className="max-w-[700px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-18 mb-3">
          Our organization has grown to include members from diverse academic backgrounds. We partner with small-to-medium businesses, startups, and Cornell organizations to tackle their most pressing data challenges, delivering solutions that create measurable value while providing our members with invaluable hands-on experience in the rapidly evolving field of data analytics.
          </p>
          <div className="flex flex-row justify-end items-center w-full mb-10">
          <div className="h-8 w-[30%] bg-blue-600">
                      <div className="h-full bg-blue-600"></div>
            </div>
            </div>
        </div>
        
      </section>



    </main>
  );
}

export default WhoWeAre;