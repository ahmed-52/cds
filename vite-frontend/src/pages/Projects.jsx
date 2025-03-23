import React from 'react';
import ProjectCard from '../components/UI/ProjectCard';
import pastProjects from '../data/PastProjects.json';
import currentProjects from '../data/CurrentProjects.json';

const Projects = () => {



  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Featured Projects Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#0f1521] to-[#4364a8] overflow-hidden shadow-lg mb-16">
        <div className="p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            You can find some of our most impactful projects below.
          </p>
        </div>
      </div>
      </section>

      {/* Current Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-2">Current Projects</h2>
        <div className="mb-6">
          <p className="text-gray-700 mb-6">
            We're tackling a range of exciting projects, from deep-dive data analysis to building new 
            products and uncovering market insights. Our team is working with startups, local
            businesses, and larger organizations to solve real challenges—whether it's refining a 
            pricing model, streamlining operations, or helping a company break into a new market.
          </p>
          <p className="text-gray-700 mb-6">
            As these projects take shape, we're finding new ways to turn data into real impact. We are
            always exploring what's possible. Stay tuned for updates!
          </p>
          <div className="mt-4">
            <a 
              href="/projects#recent-projects" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Recent Projects →
            </a>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-2">Past Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              body={project.body}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

            <section className="mb-16">
        <h2 id='recent-projects' className="text-3xl font-bold mb-6 border-b border-gray-300 pb-2">Current Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              body={project.body}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 mb-8">
        <h2 className="text-3xl font-bold mb-4">Let's talk! We're here to help you achieve your goals.</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          As a student-led initiative, we provide these services at no cost, ensuring our focus remains on delivering impartial solutions and practical expertise.
        </p>
        <a 
          href="/contact" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Projects;