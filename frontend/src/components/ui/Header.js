const Header = ({ theme, textcl, active, bg }) => {
  const size = "text-[19px]";
  const fontFamily = "font-Domine"; // Tailwind class for General Sans Medium

  return (
    <header className={` bg-${bg} shadow-inner py-5`}>
      {/* Top Header Section */}
      <div className="flex justify-start lmd:justify-around items-center px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={`${theme === "light" ? "/svg/newlogo.svg" : "/svg/newlogodark.svg"}`}
            width={170}
            height={170}
            alt="Logo"
          />
        </div>

        {/* Navbar Section */}
        <div className="hidden lmd:block">
          <nav className="flex space-x-8 ">
            <a
              href="/"
              className={`py-1 ${active === "home" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Home
              <span className="absolute inset-x-0 bottom-1.5 w-12 h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>
            <a
              href="/services"
              className={`py-1 ${active === "capabilities" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Capabilities
              <span className="absolute inset-x-0 bottom-1.5 w-[100px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>
            <a
              href="/projects"
              className={`py-1 ${active === "impact" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Impact
              <span className="absolute inset-x-0 bottom-1.5 w-[60px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>
            <a
              href="/about"
              className={`py-1 ${active === "our-people" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Our People
              <span className="absolute inset-x-0 bottom-1.5 w-[100px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>
            <a
              href="/careers"
              className={`py-1 ${active === "careers" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Careers
              <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>
            <a
              href="/contact-us"
              className={`py-1 ${active === "contact-us" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative`}
            >
              Contact Us
              <span className="absolute inset-x-0 bottom-1.5 w-[100px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
            </a>

          </nav>
        </div>

        <a
          href="/login"
          className={`py-1 ${active === "Signin" ? "text-[#1E53EF]" : `text-${textcl}`} ${size} ${fontFamily} group relative hidden lmd:block`}
        >
          Sign In
          <span className="absolute inset-x-0 bottom-1.5 w-12 h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>

      </div>
    </header>
  );
};

export default Header;
