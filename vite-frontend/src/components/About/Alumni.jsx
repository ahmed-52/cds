import React, { useEffect, useRef } from 'react';

const Alumni = () => {
  const trackRef = useRef(null);
  
  useEffect(() => {
    // Clone the first set to create a truly seamless loop
    if (trackRef.current) {
      const firstSet = trackRef.current.querySelector('.logo-container');
      if (firstSet) {
        const clone = firstSet.cloneNode(true);
        trackRef.current.appendChild(clone);
      }
    }
  }, []);

  const logos = [
    { src: "/alumni/cbre.svg", alt: "CBRE Group" },
    { src: "/alumni/bcg.svg", alt: "BCG" },
    { src: "/alumni/buildgroup.svg", alt: "Build Group" },
    { src: "/alumni/CME 1.svg", alt: "CME" },
    { src: "/alumni/efcg.svg", alt: "EFCG" },
    { src: "/alumni/unitednations.svg", alt: "United Nations" },
    { src: "/alumni/g.webp", alt: "Google" },
    { src: "/alumni/nomura.png", alt: "Nomura" },
    { src: "/alumni/mckinsey.svg", alt: "" },
    { src: "/alumni/justice.svg", alt: "Justice" },
    { src: "/alumni/kpmg.svg", alt: "KPMG" },
    { src: "/alumni/mel.svg", alt: "Mel" },
    { src: "/alumni/susquehanna.svg", alt: "Susquehanna" },
    { src: "/alumni/Pfizer.svg", alt: "Pfizer" },
    { src: "/alumni/royalCaribbean.svg", alt: "Royal Caribbean" },
    { src: "/alumni/zs.svg", alt: "ZS Associates" }
  ];

  return (
    <section className="p-6 md:p-20 bg-gray-200">
      <h2 className="text-44 font-bold mb-18 text-center">Alumni Placings</h2>
      
      <div className="logo-carousel">
        <div className="logo-track" ref={trackRef}>
          <div className="logo-container">
            {logos.map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          
          {/* Second copy for seamless loop - a third will be added by JS */}
          <div className="logo-container">
            {logos.map((logo, index) => (
              <div className="logo-item" key={`second-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .logo-carousel {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .logo-track {
          display: flex;
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo-item {
          flex: 0 0 180px;
          height: 70px;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-item img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}

export default Alumni;