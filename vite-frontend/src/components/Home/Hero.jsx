import Navbar from "../UI/Navbar";

const Hero = () => {
  return (
    <main className="hero">
      <Navbar dark={false} />
      <div className="w-full h-auto lmd:h-[480px] max-w-[1520px] mx-auto bg-hero bg-cover bg-center relative">
        {/* Main container - centered with flex */}
        <div className="flex flex-col lmd:flex-row justify-center lmd:items-center items-start h-full px-4 lmd:px-10 py-12 lmd:py-0">
          {/* Text content */}
          <div className="flex flex-col justify-start gap-4 items-start lmd:items-start text-center lmd:text-left mb-8 lmd:mb-0">
            <h1 className="lmd:text-6xl text-5xl font-medium text-start text-white">
              Empowering Decisions,<br></br>
              Driving Results
            </h1>
            <p className="text-white text-start font-inter xl text-xl mt-5">
              Transform your business strategy into<br></br> measurable outcomes.
            </p>
            <a href="/contact" className="bg-white text-black font-medium font-inter text-lg px-5 py-2 mt-5 hover:cursor-pointer hover:bg-slate-300">
              Get In Touch &rarr;
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center lmd:justify-end lmd:ml-auto">
            <img
              src="/media/arrows.svg"
              className="lmd:w-[500px] w-[300px] h-auto"
              alt="Hero Arrows"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;