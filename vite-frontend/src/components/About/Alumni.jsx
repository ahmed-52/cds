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
    <section className="py-20 bg-white border-b border-[#051C2C]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc] block mb-2">Network</span>
            <h2 className="text-4xl font-serif text-[#051C2C]">Alumni Placements</h2>
          </div>
          <div className="hidden md:block h-px w-full max-w-md bg-[#051C2C]/10 mb-4"></div>
      </div>
      
      <div className="logo-carousel relative">
        {/* Fade gradients to mask the edges of the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="logo-track" ref={trackRef}>
          <div className="logo-container">
            {logos.map((logo, index) => (
              <div className="logo-item opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          
          {/* Second copy for seamless loop */}
          <div className="logo-container">
            {logos.map((logo, index) => (
              <div className="logo-item opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" key={`second-${index}`}>
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
          height: 60px;
          margin: 0 40px;
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