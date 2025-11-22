import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  // Navigation structure
  const navigation = {
    services: [
      { name: "Growth & Sales", url: "/services#services" },
      { name: "Product Development", url: "/services#services" },
      { name: "Analytics & Insights", url: "/services#services" }
    ],
    about: [
      { name: "Who we are", url: "/about#who-we-are" },
      { name: "What we do", url: "/about#what-we-do" },
      { name: "Alumni Network", url: "/about#alumni" }
    ],
    divisions: [
      { name: "Strategy & Transformation", url: "/services" },
      { name: "Tech Implementation", url: "/services" },
      { name: "Brand & Innovation", url: "/services" }
    ],
    team: [
      { name: "Directors", url: "/about#directors" },
      { name: "Project Leads", url: "/about#project-leads" },
      { name: "Senior Associates", url: "/about#senior-associates" },
      { name: "Associates", url: "/about#associates" }
    ],
    socialMedia: [
      { name: "Instagram", url: "https://instagram.com/cornelldatastrategy" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/cornell-data-strategy-club/" }
    ]
  };

  // Scroll Logic
  const scrollToSection = (e, targetId) => {
    const [pagePath, anchor] = targetId.split('#');
    if (pagePath === '' || window.location.pathname === pagePath || 
       (pagePath === '/' && window.location.pathname === '')) {
      e.preventDefault();
      const targetElement = document.getElementById(anchor);
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
        }
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <footer className="bg-[#051C2C] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* --- TOP SECTION: BRANDING --- */}
        <div className="py-20 border-b border-white/10">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-[#155cfc]"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Est. 2023</span>
                 </div>
                 <h2 className="text-5xl lg:text-7xl font-serif leading-none">
                    Cornell Data <br />
                    <span className="italic text-gray-500">Strategy.</span>
                 </h2>
              </div>
              
              <div className="flex gap-6 grayscale opacity-60 hover:opacity-100 transition-all duration-500">
                 <img src="/logo.svg" alt="CDS Logo" className="h-16 w-16" />
                 {/* Only showing main logo for cleaner look, or keep both if strictly required */}
              </div>
           </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b border-white/10">
           
           {/* Column 1 */}
           <div className="p-8 lg:py-12 lg:pl-0 border-b md:border-b-0 border-white/10 md:border-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Services</h4>
              <ul className="space-y-4">
                 {navigation.services.map((item, i) => (
                    <li key={i}>
                       <a href={item.url} onClick={(e) => scrollToSection(e, item.url)} className="text-sm text-gray-300 hover:text-[#155cfc] transition-colors">
                          {item.name}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 2 */}
           <div className="p-8 lg:py-12 border-b md:border-b-0 border-white/10 md:border-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">About</h4>
              <ul className="space-y-4">
                 {navigation.about.map((item, i) => (
                    <li key={i}>
                       <a href={item.url} onClick={(e) => scrollToSection(e, item.url)} className="text-sm text-gray-300 hover:text-[#155cfc] transition-colors">
                          {item.name}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3 */}
           <div className="p-8 lg:py-12 border-b md:border-b-0 border-white/10 md:border-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Divisions</h4>
              <ul className="space-y-4">
                 {navigation.divisions.map((item, i) => (
                    <li key={i}>
                       <a href={item.url} onClick={(e) => scrollToSection(e, item.url)} className="text-sm text-gray-300 hover:text-[#155cfc] transition-colors">
                          {item.name}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 4 */}
           <div className="p-8 lg:py-12 border-b md:border-b-0 border-white/10 lg:border-r">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Team</h4>
              <ul className="space-y-4">
                 {navigation.team.map((item, i) => (
                    <li key={i}>
                       <a href={item.url} onClick={(e) => scrollToSection(e, item.url)} className="text-sm text-gray-300 hover:text-[#155cfc] transition-colors">
                          {item.name}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 5 (Socials) */}
           <div className="p-8 lg:py-12 col-span-2 lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Connect</h4>
              <ul className="space-y-4">
                 <li>
                     <a href="/membership" className="text-sm font-bold text-white hover:text-[#155cfc] flex items-center gap-2 transition-colors">
                        Apply Now <ArrowUpRight size={14} />
                     </a>
                 </li>
                 {navigation.socialMedia.map((item, i) => (
                    <li key={i}>
                       <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-[#155cfc] transition-colors">
                          {item.name}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* --- BOTTOM SECTION: LEGAL --- */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-gray-500 font-light">
           <div className="space-y-2">
              <p>© {getCurrentYear()} Cornell Data Strategy. All rights reserved.</p>
              <p className="max-w-xl">
                 This organization is a registered student organization of Cornell University. Cornell is an equal opportunity employer and educator. 
                 <a href="https://hr.cornell.edu/eeo" target="_blank" rel="noreferrer" className="text-[#155cfc] hover:underline ml-1">Learn more</a>
              </p>
           </div>
           
           {/* Optional: Keeping the "Greatest Good" or "Stars" iconography small and subtle if desired */}
           <div className="flex items-center gap-4  transition-all">
               <img src="/good.svg" alt="Greatest Good" className="h-4" />
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;