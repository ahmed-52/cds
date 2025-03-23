import React from 'react';

const OurServices = () => {
  return (
    <div className="pt-16 px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading and description */}
        <h2 className="text-56 font-bold mb-4">Our Services</h2>
        <p className="text-22-inter font-intern max-w-7xl mb-16">
          We at Cornell Data Strategy transform raw data into a strategic asset for your business.
          Through custom-built models and tools, we implement real-world solutions that optimize
          supply chains, refine pricing, and drive successful market expansion.
        </p>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Service 1: Market Research */}
          <div className="flex flex-col">
            <div className="mb-6">
                <img src='/media/marketre.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Market Research</h3>
            <p className="text-16 mb-4">
              From mapping out competitive landscape to forecasting sector growth, we deliver top-tier 
              market insights for our clients.
            </p>
            <a href="#" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 2: Analytics Solution */}
          <div className="flex flex-col">
            <div className="mb-6">
            <img src='/images/analytic.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Analytics Solution</h3>
            <p className="text-16 mb-4">
              We utilize predictive analytics, machine learning, and natural language processing to 
              anticipate future trends and behaviors.
            </p>
            <a href="#" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 3: Growth Strategy */}
          <div className="flex flex-col">
            <div className="mb-6">
                <img src='/images/stairs.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Growth Strategy</h3>
            <p className="text-16  mb-4">
              We help organizations to scale their businesses, either to the next stage or 
              expanding their current business model.
            </p>
            <a href="#" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
          
          {/* Service 4: Product development */}
          <div className="flex flex-col">
            <div className="mb-6">
            <img src='/images/prod.svg'></img>
            </div>
            <h3 className="text-24 font-bold mb-3">Product development</h3>
            <p className="text-16 mb-4">
              We work hand-in-hand with clients to realize the blueprints, from launching new 
              products to expanding into new markets.
            </p>
            <a href="#" className="text-16 font-semibold text-primary hover:underline mt-auto">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;