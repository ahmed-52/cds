import React from 'react';

const ScheduleCall = () => {
  return (
    <section className="relative bg-gray-100 py-36 px-8 overflow-hidden">
      {/* Background SVG Pattern - Positioned to the right side */}
      <div className="absolute top-0 right-0 h-full w-3/4 z-0 pointer-events-none">

        <img 
          src="/waves.svg" 
          alt=""
          className="object-cover h-full w-full opacity-20"
          style={{
            objectPosition: 'right center',
            mixBlendMode: 'multiply' // This helps blend the SVG with the background
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-lg">
          <h2 className="text-44 font-bold text-black mb-4">Schedule a call today</h2>
          <p className="text-18 text-gray-700 mb-8">
            Contact us for a free consultation and discover how our expertise translates to value for your business.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors"
          >
            Contact us
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;