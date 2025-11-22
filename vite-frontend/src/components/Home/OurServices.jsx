import { ArrowUpRight } from 'lucide-react';
import { TrendingUp, Search, RefreshCw, Cpu } from 'lucide-react';

const SERVICES = [
  {
    title: "Growth Strategy",
    description: "Helping businesses scale into new sectors and customers through rigorous market analysis.",
    linkText: "Learn more",
    icon: TrendingUp,
    image: "/services/growth2.webp"
  },
  {
    title: "M&A Due Diligence",
    description: "Conduct diligence, market screens, and acquisition target evaluations to de-risk investment.",
    linkText: "Learn more",
    icon: Search,
    image: "/services/m&a.webp"
  },
  {
    title: "Transformation",
    description: "Reposition businesses through turnarounds and operating model redesign for long-term viability.",
    linkText: "Learn more",
    icon: RefreshCw,
    image: "/services/earth.jpg"
  },
  {
    title: "AI Implementation",
    description: "Develop AI tools and innovative products that make strategy executable and sustainable.",
    linkText: "Learn more",
    icon: Cpu,
    image: "/services/tech.webp"
  }
];

const OurServices = () => {
  return (
    <section id="services" className="bg-white pb-32 pt-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">
              What we do
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#051C2C] leading-tight mt-3">
              Services we offer
            </h2>
          </div>
          <p className="text-slate-500 max-w-2xl text-sm md:text-base">
            Boardroom-grade strategy paired with execution muscle. Each mandate blends research, operating rigor,
            and technology so transformations stick long after the slides are done.
          </p>
        </div>
        
        {/* Horizontal Grid Layout - mimicking the reference card row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {SERVICES.map((service, index) => {
            return (
                <div 
                    key={index} 
                    className="group relative h-[420px] md:h-[460px] lg:h-[480px] overflow-hidden cursor-pointer reveal-on-scroll bg-gray-100"
                    style={{transitionDelay: `${index * 100}ms`}}
                >
                  {/* Icon Top Right */}
                  <div className="absolute top-6 right-6 z-20 p-2 transition-transform duration-300 group-hover:rotate-45 text-white bg-white/20 backdrop-blur-sm rounded-sm">
                      <ArrowUpRight size={18} />
                  </div>

                  {/* Background Content */}
                  <>
                    <img 
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </>

                  {/* Text Content Bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <h4 className="text-2xl font-serif mb-3 leading-tight text-white">
                        {service.title}
                    </h4>
                    <p className="text-xs font-light leading-relaxed line-clamp-3 text-gray-200">
                        {service.description}
                    </p>
                  </div>
                </div>
            );
          })}
        </div>

        <div className="mt-12 text-center md:text-left">
             <p className="text-slate-400 text-sm max-w-xl">
                 Leverage market inefficiencies to generate returns uncorrelated to standard benchmarks. Our teams provide the alpha.
             </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
