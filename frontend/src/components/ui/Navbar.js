const Navbar = ({bg,textcl,active}) => {

  const size = "text-[22px]"

  return (
    <div className={`sticky top-1 right-0 bg-${bg} pb-20 pr-20 pl-10 pt-5`}>
      <nav className="mt-5">
        <a href="/" className={`block py-1 ${active === 'home' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          Home
          <span className="absolute inset-x-0 bottom-1.5 w-12 h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
        <a href="/services" className={`block py-1 ${active === 'services' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          Services
          <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
        <a href="/projects" className={`block py-1 ${active === 'projects' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          Projects
          <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
        <a href="/about" className={`block py-1 ${active === 'about' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          About
          <span className="absolute inset-x-0 bottom-1.5 w-12 h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
        <a href="/join" className={`block py-1 ${active === 'join' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          Join Us
          <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
        <a href="/login" className={`block py-1 ${active === 'login' ? 'text-[#1E53EF]' : `text-${textcl}`} ${size} font-shipporib1 group relative`}>
          Login
          <span className="absolute inset-x-0 bottom-1.5 w-[70px] h-[2px] bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></span>
        </a>
      </nav>
    </div>
  )
}

export default Navbar