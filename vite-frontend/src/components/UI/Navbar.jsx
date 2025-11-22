import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeHover, setActiveHover] = useState(null);

  // --- LOGO CONFIGURATION ---
  // Update these paths to match your actual files
  const LOGO_WHITE = "/logo2.svg"; // Your existing white logo
  const LOGO_DARK = "/logo2dark.svg";   // Your black/dark logo (Check this filename!)

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route Logic
  const isHome = location.pathname === '/';
  const isEventPage = location.pathname.includes('gatsby-event');
  
  // Determine Theme
  const isTransparentMode = (isHome || isEventPage) && !isScrolled;
  
  const textColorClass = isTransparentMode ? 'text-white' : 'text-[#051C2C]';

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isTransparentMode 
          ? 'bg-transparent border-transparent py-6' 
          : 'bg-white border-[#051C2C]/10 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* --- LOGO SECTION FIXED --- */}
        <a href="/" className="relative z-50 flex items-center">
           <img 
             src={isTransparentMode ? LOGO_WHITE : LOGO_DARK} 
             alt="Cornell Data Strategy" 
             className="h-10 md:h-12 transition-all duration-300"
             // Optional: If you don't have a dark logo file yet, uncomment the line below 
             // and use logo2.svg for both. It will mathematically invert the white logo to black.
             // style={{ filter: isTransparentMode ? 'none' : 'invert(1) brightness(0)' }}
           />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink href="/" text="Home" isTransparent={isTransparentMode} />
          <NavLink href="/services" text="Services" isTransparent={isTransparentMode} />
          <NavLink href="/projects" text="Projects" isTransparent={isTransparentMode} />
          
          {/* Dropdown */}
          <div 
            className="relative group h-full flex items-center"
            onMouseEnter={() => setActiveHover('about')}
            onMouseLeave={() => setActiveHover(null)}
          >
            <a 
                href="/about" 
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors py-2 ${
                    isTransparentMode ? 'text-white/90 hover:text-white' : 'text-slate-500 hover:text-[#155cfc]'
                }`}
            >
              About
              <ChevronDown size={12} />
            </a>
            
            {/* Dropdown Content */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                <div className="bg-white border border-[#051C2C]/10 w-48 flex flex-col shadow-xl">
                    <DropdownLink 
                        href="/about#about-top" 
                        onClick={() => handleScrollTo('about-top')} 
                        text="Our Story" 
                    />
                    <DropdownLink 
                        href="/about#team-members" 
                        onClick={() => handleScrollTo('team-members')} 
                        text="Our Team" 
                    />
                </div>
            </div>
          </div>

          <NavLink href="/corporate-partnerships" text="Corporate" isTransparent={isTransparentMode} />
          <NavLink href="/membership" text="Apply" isTransparent={isTransparentMode} />
          <NavLink href="/gatsby-event" text="Event" isTransparent={isTransparentMode} />
          
          <div className={`h-4 w-px mx-2 opacity-20 ${isTransparentMode ? 'bg-white' : 'bg-[#051C2C]'}`}></div>
          
          <a 
            href="/contact" 
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
               isTransparentMode ? 'text-white hover:text-white/80' : 'text-[#051C2C] hover:text-[#155cfc]'
            }`}
          >
            Contact
          </a>

          <a 
            href="/signin" 
            className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all border ${
                isTransparentMode 
                ? 'bg-white text-[#051C2C] border-white hover:bg-transparent hover:text-white' 
                : 'bg-[#051C2C] text-white border-[#051C2C] hover:bg-[#155cfc] hover:border-[#155cfc]'
            }`}
          >
            Sign In
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden focus:outline-none ${textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           {isMenuOpen ? <X size={28} className="text-[#051C2C]" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-32 px-6 transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
            <MobileLink href="/" text="Home" />
            <MobileLink href="/services" text="Services" />
            <MobileLink href="/projects" text="Projects" />
            
            <div className="border-l-2 border-[#051C2C]/10 pl-6 flex flex-col gap-4 py-2">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">About Us</p>
                <MobileLink href="/about" text="Our Story" />
                <MobileLink href="/about#team-members" text="Our Team" />
            </div>

            <MobileLink href="/corporate-partnerships" text="Corporate" />
            <MobileLink href="/membership" text="Apply" />
            <MobileLink href="/gatsby-event" text="Event" />
            <MobileLink href="/contact" text="Contact" />
            
            <a 
              href="/signin" 
              className="mt-4 w-full text-center bg-[#051C2C] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#155cfc]"
            >
                Sign In
            </a>
        </div>
      </div>
    </header>
  );
};

// --- Sub-Components ---

const NavLink = ({ href, text, isTransparent }) => (
  <a 
    href={href} 
    className={`relative group py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
       isTransparent 
        ? 'text-white/90 hover:text-white' 
        : 'text-slate-500 hover:text-[#155cfc]'
    }`}
  >
    {text}
    <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
        isTransparent ? 'bg-white' : 'bg-[#155cfc]'
    }`}></span>
  </a>
);

const DropdownLink = ({ href, text, onClick }) => (
    <a 
      href={href} 
      onClick={onClick}
      className="block px-6 py-4 text-sm text-[#051C2C] hover:bg-gray-50 hover:text-[#155cfc] transition-colors border-b border-[#051C2C]/5 last:border-none font-serif"
    >
        {text}
    </a>
);

const MobileLink = ({ href, text }) => (
    <a 
        href={href} 
        className="text-2xl font-serif text-[#051C2C]"
    >
        {text}
    </a>
);

export default Navbar;
