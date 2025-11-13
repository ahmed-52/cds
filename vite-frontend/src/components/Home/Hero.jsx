import Navbar from "../UI/Navbar";

const Hero = () => {
  return (
    <main className="hero w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/groupphoto.png')",
        backgroundSize: "105%",
        backgroundPosition: "50% 38%"
      }}
    >
      <Navbar dark={false} />
      
      {/* Main container */}
      <div className="relative z-10 flex items-center justify-start h-[calc(100vh-80px)] px-6 lmd:px-12 xl:px-16">
        {/* Content section - left aligned */}
        <div className="flex flex-col gap-6 max-w-4xl text-left pb-24">
          {/* Main headline */}
          <h1 className="text-4xl lmd:text-5xl xl:text-6xl font-normal text-white leading-snug">
            Transforming strategy,<br />
            Delivering execution
          </h1>

          {/* Subheadline */}
          <p className="text-base lmd:text-lg xl:text-xl text-white/95 font-light leading-relaxed max-w-2xl">
            Cornell's first consulting organization advising C-suites on growth, transformation, and execution
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black font-normal text-base px-8 py-3 hover:bg-white/90 transition-all duration-300"
            >
              Get In Touch
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with border line */}
      <div className="absolute bottom-0 left-0 right-0 px-6 lmd:px-12 xl:px-16 pb-8 border-t border-white/20">
        <div className="flex items-center justify-between pt-6">
          <p className="text-xs lmd:text-sm text-white/70 font-light uppercase tracking-wider">
            We combine boardroom strategy with execution power
          </p>
          <p className="text-xs lmd:text-sm text-white/70 font-light uppercase tracking-wider hidden lmd:block">
            Scroll to explore
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;