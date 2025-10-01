import React from 'react';

const OurServices = () => {
  return (
    <div className="pt-16 px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading and description */}
        <h2 className="text-56 font-bold mb-4">Our Services</h2>
        <p className="text-22-inter font-intern max-w-7xl mb-16">
        From Strategy to Execution: Services We Deliver
        </p>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Service 1: Growth Strategy */}
          <div className="flex flex-col">
            <div className="mb-6">
                <img src='/images/stairs.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Growth Strategy</h3>
            <p className="text-16 mb-4">
              Helping businesses scale into new sectors and customers.
            </p>
            <a href="/services#services" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 2: M&A Due Diligence */}
          <div className="flex flex-col">
            <div className="mb-6">
            <img src='/images/analytic.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">M&A Due Diligence</h3>
            <p className="text-16 mb-4">
              Conduct diligence, market screens, and acquisition target evaluations.
            </p>
            <a href="/services#services" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 3: Transformation */}
          <div className="flex flex-col">
            <div className="mb-6">
                <img src='/media/marketre.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Transformation</h3>
            <p className="text-16 mb-4">
              Reposition businesses through turnarounds and operating model redesign.
            </p>
            <a href="/services#services" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 4: Technology Solutions */}
          <div className="flex flex-col">
            <div className="mb-6">
            <img src='/images/prod.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Technology Solutions</h3>
            <p className="text-16 mb-4">
              Develop AI tools and innovative products that make strategy executable.
            </p>
            <a href="/services#services" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;