import React, { useEffect } from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  // Navigation structure with page and section information
  const navigation = {
    services: [
      { name: "Growth & Sales", url: "/services#services" },
      { name: "Product Dev.", url: "/services#services" },
      { name: "Analytics & Insights", url: "/services#services" }
    ],
    about: [
      { name: "Who we are", url: "/about#who-we-are" },
      { name: "What we do", url: "/about#what-we-do" }
    ],
    divisions: [
      { name: "Strategy & Advisory", url: "/about#strategy-advisory" },
      { name: "Tech & Implem.", url: "/about#tech-implementation" },
      { name: "Business Dev.", url: "/about#business-development" },
      { name: "Platform & Inov.", url: "/about#platform-innovation" }
    ],
    team: [
      { name: "Directors", url: "/about#directors" },
      { name: "Managers", url: "/about#managers" },
      { name: "Snr. Associates", url: "/about#senior-associates" },
      { name: "Associates", url: "/about#associates" }
    ],
    joinUs: [
      { name: "Learn more", url: "/membership" }
    ],
    socialMedia: [
      { name: "Instagram", url: "https://instagram.com/cornelldatastrategy" },
      { name: "Linkedin", url: "https://www.linkedin.com/company/cornell-data-strategy-club/" }
    ]
  };

  // Helper function to handle smooth scrolling to anchors
  const scrollToSection = (e, targetId) => {
    // Check if it's an anchor on the current page
    const [pagePath, anchor] = targetId.split('#');
    if (pagePath === '' || window.location.pathname === pagePath || 
       (pagePath === '/' && window.location.pathname === '')) {
      e.preventDefault();
      const targetElement = document.getElementById(anchor);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for header
          behavior: 'smooth'
        });
      }
    }
  };

  // Add event listener for hash change to handle direct anchor navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Run once on mount
    handleHashChange();

    // Add event listener
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <footer className="bg-[#0f1521] text-white py-10 md:py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row mb-10 md:mb-20">
          {/* Left Column: Logo and Branding */}
          <div className="w-full lg:w-[20%] mb-10 lg:mb-0 order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-medium mb-5 md:mb-10 leading-7">
              Cornell Data<br />&nbsp;&nbsp;<span className='ml-12'>& Strategy</span>
            </h2>
            
            <div className="flex space-x-3 mb-8 md:mb-12">
              <img src="/logo.svg" alt="Cornell Data Strategy Logo" className="h-[44px] w-[44px] md:h-[50px] md:w-[50px]" />
              <img src="/condlogo.svg" alt="D&SA Logo" className="h-[44px] w-[44px] md:h-[50px] md:w-[50px]" />
            </div>
            
            <div className="flex items-start mb-6 md:mb-10">
              <img src="/data.svg" alt="Star" className="" />
            </div>
            
            <div>
              <img src="/good.svg" alt="the greatest good" className="h-4 md:h-5" />
            </div>
          </div>
          
          {/* Right Grid: Navigation Links */}
          <div className="w-full lg:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10 lg:mb-0 order-1 lg:order-2">
            {/* Services */}
            <div className="mb-6 sm:mb-0">
              <h3 className="font-medium mb-3 md:mb-5">Services</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.services.map((item, index) => (
                  <li key={`service-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                      onClick={(e) => scrollToSection(e, item.url)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* About */}
            <div className="mb-6 sm:mb-0">
              <h3 className="font-medium mb-3 md:mb-5">About</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.about.map((item, index) => (
                  <li key={`about-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                      onClick={(e) => scrollToSection(e, item.url)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Divisions */}
            <div className="mb-6 sm:mb-0">
              <h3 className="font-medium mb-3 md:mb-5">Divisions</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.divisions.map((item, index) => (
                  <li key={`division-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                      onClick={(e) => scrollToSection(e, item.url)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Team */}
            <div className="mb-6 sm:mb-0">
              <h3 className="font-medium mb-3 md:mb-5">Team</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.team.map((item, index) => (
                  <li key={`team-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                      onClick={(e) => scrollToSection(e, item.url)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Join Us */}
            <div className="mb-6 sm:mb-0">
              <h3 className="font-medium mb-3 md:mb-5">Join Us</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.joinUs.map((item, index) => (
                  <li key={`join-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-medium mb-3 md:mb-5">Social Media</h3>
              <ul className="space-y-2 text-[15px]">
                {navigation.socialMedia.map((item, index) => (
                  <li key={`social-${index}`}>
                    <a 
                      href={item.url} 
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Copyright and Decorative Elements */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="mb-6 md:mb-0">
            <p className="text-[13px] mb-1 opacity-90">This organization is a registered student organization of Cornell University.</p>
            <p className="text-[13px] opacity-90">© {getCurrentYear()} Cornell Data Strategy. All rights reserved.</p>
          </div>
          <div className="hidden md:flex md:flex-col md:space-y-3">
            <img src="/media/arrows.svg" alt="Decorative element" className="h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;