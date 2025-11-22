import React from 'react';
import membersData from '../../data/Members.json';

// Local helper component to ensure strict grid styling
const MemberCard = ({ image, name, title }) => (
  <div className="group relative border-r border-b border-[#051C2C]/10 bg-white hover:bg-gray-50 transition-colors duration-300">
    <div className="aspect-[3/4] overflow-hidden relative  transition-all duration-500">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Blue overlay flash on hover */}
      <div className="absolute inset-0 bg-[#155cfc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply pointer-events-none"></div>
    </div>
    
    <div className="p-6 md:p-8">
      <h3 className="font-serif text-xl text-[#051C2C] mb-2 leading-tight group-hover:text-[#155cfc] transition-colors">
        {name}
      </h3>
      <div className="h-px w-6 bg-[#051C2C]/20 my-3 group-hover:w-full group-hover:bg-[#155cfc]/30 transition-all duration-500"></div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-700">
        {title}
      </p>
    </div>
  </div>
);

// Helper for Section Headers
const SectionHeader = ({ title, id }) => (
  <div id={id} className="col-span-full py-16 px-6 md:px-12 border-b border-[#051C2C]/10 bg-gray-50/50">
    <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-8 bg-[#155cfc]"></div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">Group</span>
    </div>
    <h2 className="text-4xl lg:text-5xl font-serif text-[#051C2C]">{title}</h2>
  </div>
);

const Team = () => {
    const { directorsAndVPs, projectLeads, seniorAssociates, associates, advisory } = membersData;

    return (
        <main className='bg-white border-t border-[#051C2C]/10'>
            <section id="team-members" className="max-w-[1600px] mx-auto">
                
                {/* Main Page Header */}
                <div className="py-24 px-6 md:px-12 xl:px-16 border-b border-[#051C2C]/10">
                    <h1 className="text-5xl lg:text-7xl font-serif text-[#051C2C] mb-6 leading-[1.1]">
                        The minds behind <br />
                        <span className="italic text-slate-400">Cornell Data Strategy.</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600 font-light">
                        Our strength lies in our diversity. We are engineers, economists, and strategists united by a passion for solving complex problems.
                    </p>
                </div>

                {/* Directors Section */}
                <div className="border-t border-[#051C2C]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#051C2C]/10">
                        <SectionHeader title="Directors & VPs" id="directors" />
                        {directorsAndVPs.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>

                {/* Project Leads Section */}
                <div className="border-t border-[#051C2C]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#051C2C]/10">
                        <SectionHeader title="Project Leads" id="project-leads" />
                        {projectLeads.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>

                {/* Senior Associates Section */}
                <div className="border-t border-[#051C2C]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#051C2C]/10">
                        <SectionHeader title="Senior Associates" id="senior-associates" />
                        {seniorAssociates.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>

                {/* Associates Section */}
                <div className="border-t border-[#051C2C]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#051C2C]/10">
                        <SectionHeader title="Associates" id="associates" />
                        {associates.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>

                {/* Advisory Section */}
                <div className="border-t border-[#051C2C]/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#051C2C]/10">
                        <SectionHeader title="Advisory Board" id="advisory" />
                        {advisory.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Team;