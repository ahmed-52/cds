import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({dark = true}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [currentRoute, setCurrentRoute] = useState('/');
  const location = useLocation();

  // Set active link based on URL path
  useEffect(() => {
    setCurrentRoute(location.pathname) 
    
    const path = window.location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path.includes('services')) setActiveLink('services');
    else if (path.includes('projects')) setActiveLink('projects');
    else if (path.includes('about')) setActiveLink('about');
    else if (path.includes('membership')) setActiveLink('membership');
    else if (path.includes('contact')) setActiveLink('contact');
    else if (path.includes('signin')) setActiveLink('signin');
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };


  const handleHome = () => {
    window.location.href = "/";
  }

  return (
    <nav className={`text-white ${currentRoute === '/' ? 'p-4 pt-5' : 'py-4' } px-6 md:px-12 ${dark ? 'bg-[#0f1521]' : ''}`}>
      <div className="max-w-[1720px] mx-auto">
        <div className="flex justify-between items-center">

          <div onClick={handleHome} className="flex items-center pt-2">
            <img src="/logo2.svg" alt="Cornell Data Strategy Logo" className={`${currentRoute == '/' ? 'h-12' : "h-12"}`} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/" active={activeLink === 'home'}>Home</NavLink>
            <NavLink href="/services" active={activeLink === 'services'}>Services</NavLink>
            <NavLink href="/projects" active={activeLink === 'projects'}>Projects</NavLink>
            <NavLink href="/about" active={activeLink === 'about'}>About</NavLink>
            <NavLink href="/membership" active={activeLink === 'membership'}>Membership</NavLink>
            <NavLink href="/contact" active={activeLink === 'contact'}>Contact Us</NavLink>
            <a 
              href="/signin" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-sm transition-colors text-[15px] ml-4"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0f1521] z-50 flex flex-col pt-20 px-6">
            <button 
              className="absolute top-5 right-6 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            
            <div className="flex flex-col space-y-6">
              <MobileNavLink href="/" active={activeLink === 'home'} onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink href="/services" active={activeLink === 'services'} onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink href="/projects" active={activeLink === 'projects'} onClick={toggleMenu}>Projects</MobileNavLink>
              <MobileNavLink href="/about" active={activeLink === 'about'} onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink href="/membership" active={activeLink === 'membership'} onClick={toggleMenu}>Membership</MobileNavLink>
              <MobileNavLink href="/contact" active={activeLink === 'contact'} onClick={toggleMenu}>Contact Us</MobileNavLink>
              <a 
                href="/signin" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-sm transition-colors text-[15px] text-center mt-4"
                onClick={toggleMenu}
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, active, children }) => {
  return (
    <a 
      href={href} 
      className={`relative px-1 py-2 text-[15px] transition-colors ${
        active ? 'text-blue-300' : 'hover:text-blue-300'
      }`}
    >
      {children}
      <span 
        className={`absolute left-0 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </a>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, active, onClick, children }) => {
  return (
    <a 
      href={href} 
      className={`text-xl font-medium py-2 border-b border-gray-700 ${
        active ? 'text-blue-300' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;