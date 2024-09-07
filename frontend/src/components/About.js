import React from 'react';
import { Beam } from './Beam';
const About = () => {

  return(
    <>
      <section className='bg-[#333333] h-full'>
        <h1 className='md:text-7xl text-4xl text-white font-medium font-apercu pt-12 mb-12 text-center'>About</h1>
        <Beam />
      </section>
      
      <section className='my-5'> 
        <h1 className='text-center text-[40px] md:text-[60px] font-medium font-apercu-mono text-[#333333] py-12'>Meet The Team!</h1>
        
        <div className='flex flex-wrap justify-center items-center max-w-[1300px] mx-auto gap-3'>

          <div className="group relative block w-80 h-64 sm:h-80">
            <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
            <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
              <img 
                src="chris.jpeg" 
                alt="Chris Wang"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
              />
              <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Chris Wang<br></br><span className='text-[16px]'>President</span></h2>
              </div>
              <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
                <p className="mt-4 text-sm sm:text-base">
                  Chris leads the strategic direction of the club, ensuring all initiatives align with our mission to merge data science and business consulting.
                </p>
                <p className="mt-1 font-bold">Senior</p>
              </div>
            </div>
          </div>

          <div className="group relative block w-80 h-64 sm:h-80">
            <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
            <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
              <img 
                src="ahmed.jpg" 
                alt="Ahmed Abdulla"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
              />
              <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Ahmed Abdulla<br></br><span className='text-[16px]'>Vice President</span></h2>
              </div>
              <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
                <p className="mt-4 text-sm sm:text-base">
                Ahmed oversees project management and team collaboration is the club's primary software engineer.
                </p>
                <p className="mt-1 font-bold">Sophomore</p>
              </div>
            </div>
          </div>

          <div className="group relative block w-80 h-64 sm:h-80">
            <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
            <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
              <img 
                src="michael.jpeg" 
                alt="Michael Raybetz"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
              />
              <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Michael Raybetz<br></br><span className='text-[16px]'>Treasurer</span></h2>
              </div>
              <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
                <p className="mt-4 text-sm sm:text-base">
                  Michael manages the club's finances, ensuring our resources are allocated effectively for maximum impact.
                </p>
                <p className="mt-1 font-bold">Senior</p>
              </div>
            </div>
          </div>

          <div className="group relative block w-80 h-64 sm:h-80">
            <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
            <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
              <img 
                src="alex_stol.jpeg" 
                alt="Alex Stöllinger"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
              />
              <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Alex Stöllinger<br></br><span className='text-[16px]'>Director of Recruitment</span></h2>
              </div>
              <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
                <p className="mt-4 text-sm sm:text-base">
                  Alex leads our efforts in attracting top talent and ensuring our team is well-equipped to tackle complex problems.
                </p>
                <p className="mt-1 font-bold">Senior</p>
              </div>
            </div>
          </div>

          <div className="group relative block w-80 h-64 sm:h-80">
            <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
            <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
              <img 
                src="viktor.jpeg" 
                alt="Viktor Stöllinger"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
              />
              <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Viktor Stöllinger<br></br><span className='text-[16px]'>Business Development Director</span></h2>
              </div>
              <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
                <p className="mt-4 text-sm sm:text-base">
                  Viktor focuses on expanding our client base and ensuring the club's growth aligns with our long-term vision.
                </p>
                <p className="mt-1 font-bold">Sophomore</p>
              </div>
            </div>
          </div>

          <div className="group relative block w-80 h-64 sm:h-80">
  <span className="absolute inset-0 border-2 border-dashed border-[#ECEADD]"></span>
  <div className="relative flex h-full w-full items-end border-2 border-[#ECEADD] bg-white transition-all group-hover:bg-white group-hover:shadow-lg">
    <img 
      src="carey.jpeg" 
      alt="Carey Manwa"
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 filter brightness-75"
    />
    <div className="p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
      <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#ECEADD] m-0">Carey Manwa<br></br><span className='text-[16px]'>Project Lead</span></h2>
    </div>
    <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-6 z-10">
      <p className="mt-4 text-sm sm:text-base">
        Carey leads key projects, ensuring high-quality deliverables and managing collaboration between teams.
      </p>
      <p className="mt-1 font-bold">Junior</p>
    </div>
  </div>
</div>


        </div>
      </section>
    </>
  )
}

export default About;
