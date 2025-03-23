import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import projectHighlight from '../../data/highlightProjects.json';

const ProjectHighlights = () => {
  return (
    <div className="bg-[#252526] py-10">
      <div className="max-w-7xl  mx-auto px-10">
        <h2 className="text-56 font-bold !text-white text-center my-5">Project Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projectHighlight.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              body={project.body}
              image={project.image}
              link={project.link}
              dark={false}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;