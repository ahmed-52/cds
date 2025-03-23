import React from 'react';

const ProjectCard = ({ title, body, image, link, dark = false }) => {
  return (
    <div className={`max-w-sm bg-white  shadow-sm h-full
      ${dark ? 'bg-[#252526] border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="overflow-hidden">
        <img 
          className=" w-full h-56 object-cover" 
          src={image} 
          alt={title} 
        />
      </div>
      <div className="p-6 flex flex-col min-h-[320px]">
        <h5 className={`mb-3 text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-textcl'}`}>
          {title}
        </h5>
        <p className={`mb-4 font-normal ${dark ? 'text-gray-300' : 'text-textcl'} line-clamp-6 flex-grow`}>
          {body}
        </p>
        <div className="flex items-center mt-auto">
          {/* <a 
            href={link}
            className={`inline-flex items-center text-16 font-medium ${dark ? 'text-blue-400' : 'text-primary'} hover:underline`}
          >
            Learn more
            <svg 
              className={`w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-2 ${dark ? '' : '!invert'}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;