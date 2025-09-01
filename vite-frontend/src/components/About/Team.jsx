import React from 'react';
import TeamMember from '../UI/TeamMember';
import membersData from '../../data/Members.json';

const Team = () => {
    const { directorsAndVPs, engagementManagers, projectLeads, seniorAssociates, associates, advisory } = membersData;

    return (
        <main className='max-w-[1400px] mx-auto flex justify-center items-center'>
            <section className="container px-10 my-12">
                <h1 className="text-[40px] font-bold font-gs mt-20 text-center mb-3">
                    Minds Behind Cornell Data Strategy
                </h1>

                <div className="mt-6 h-[4px] bg-[#2562F5] w-full mb-16"></div>

                {/* Directors and VPs */}
                <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Directors</h2>
                <div id='directors' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-1">
                    {directorsAndVPs.map((member, index) => (
                        <TeamMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            title={member.title}
                        />
                    ))}
                </div>

                <div className="my-10 h-[1px] bg-[#7f7f7f] md:w-2/3 w-full"></div>

                {/* Engagement Managers */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Engagement Managers</h2>
                    <div id='managers' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 gap-y-5">
                        {engagementManagers.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="my-10 h-[1px] bg-[#7f7f7f] md:w-2/3 w-full"></div>

                {/* Project Leads */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Project Leads</h2>
                    <div id='project-leads' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-1">
                        {projectLeads.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="my-10 h-[1px] bg-[#7f7f7f] md:w-2/3 w-full"></div>

                {/* Senior Associates */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Senior Associates</h2>
                    <div id='senior-associates' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-1">
                        {seniorAssociates.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="my-10 h-[1px] bg-[#7f7f7f] md:w-2/3 w-full"></div>

                {/* Associates */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Associates</h2>
                    <div id='associates' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-1 mb-12">
                        {associates.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="my-10 h-[1px] bg-[#7f7f7f] md:w-2/3 w-full"></div>

                {/* Advisory */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-gs mb-8 text-cas">Advisory</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-1 mb-12">
                        {advisory.map((member, index) => (
                            <TeamMember
                                key={index}
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Team;