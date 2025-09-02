import React from "react";

import interviewData from '../../data/Interview.json';

const Interview = () => {
  return (
    <div className="md:max-w-[1400px] mx-auto p-5 pt-10 pb-20 font-Domine">
      <h2 className="text-[35px] font-bold mb-10 text-textcl">Interview Preparation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Strategy & Advisory */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="bg-blue-500 min-w-[40px] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
              SA
            </div>
            <h3 className="text-2xl font-bold text-textcl">Strategy & Advisory</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 ml-[52px]">
            Learn more on the Strategy & Advisory division
          </p>
          
          
          <div className="mb-6 ml-[52px]">
            <h4 className="font-bold mb-1 text-textcl">How to prepare?</h4>
            <p className="text-sm text-gray-700">
              Practice case frameworks, brush up on market sizing questions, and review financial 
              analysis concepts. Be prepared to structure your thinking and present clear recommendations.
            </p>
          </div>
          
          {/* <div className="ml-[52px]"> */}
            {/* <h4 className="font-bold mb-2 text-textcl">Example Interviews</h4>
            <div className="flex flex-col space-y-2">
              {interviewData.strategy.examples.map((item, index) => (
                <a 
                  key={`strategy-example-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div> */}
        </div>
        
        {/* Tech & Implementation */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="bg-blue-500 min-w-[40px] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
              TI
            </div>
            <h3 className="text-2xl font-bold text-textcl">Tech & Implementation</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 ml-[52px]">
            Learn more on the Technology & Implementation division
          </p>
          
          
          <div className="mb-6 ml-[52px]">
            <h4 className="font-bold mb-1 text-textcl">How to prepare?</h4>
            <p className="text-sm text-gray-700">
              Review algorithm fundamentals, practice system design questions, and strengthen your 
              understanding of data structures. Be ready to demonstrate problem-solving approaches 
              to technical challenges similar to those you might encounter in software engineering interviews.
            </p>
          </div>
          
          {/* <div className="ml-[52px]">
            {interviewData.tech.examples.map((item, index) => (
              <a 
                key={`tech-example-${index}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline font-bold mb-2"
              >
                {item.title}
              </a>
            ))}
          </div> */}
        </div>
        
        {/* Business Development */}
        {/* <div className="relative">
          <div className="flex items-start mb-3">
            <div className="bg-blue-500 min-w-[40px] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
              BD
            </div>
            <h3 className="text-2xl font-bold text-textcl">Business Development</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 ml-[52px]">
            Learn more on the Business Development division
          </p>
          
          
          <div className="mb-6 ml-[52px]">
            <h4 className="font-bold mb-1 text-textcl">How to prepare?</h4>
            <p className="text-sm text-gray-700">
              Study sales methodologies, negotiation strategies, and client relationship management. 
              Review business development strategies and prepare examples of your past outreach 
              or partnership experiences.
            </p>
          </div>
           */}
          {/* <div className="ml-[52px]">
            <h4 className="font-bold mb-2 text-textcl">Example Interviews</h4>
            <div className="flex flex-col space-y-2">
              {interviewData.business.examples.map((item, index) => (
                <a 
                  key={`business-example-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div> */}
        {/* </div> */}
        
        {/* Brand & Innovation */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="bg-blue-500 min-w-[40px] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
              PI
            </div>
            <h3 className="text-2xl font-bold text-textcl">Brand & Innovation</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 ml-[52px]">
            Learn more on the Brand & Innovation division
          </p>
          
          
          <div className="mb-6 ml-[52px]">
            <h4 className="font-bold mb-1 text-textcl">How to prepare?</h4>
            <p className="text-sm text-gray-700">
              Prepare to showcase your portfolio and discuss your design thinking process. 
              Be ready to talk about your experiences with UI/UX design, marketing strategy, 
              or operational improvements that demonstrate your innovative approach.
            </p>
          </div>
          
          {/* <div className="ml-[52px]">
            <h4 className="font-bold mb-2 text-textcl">Example Interviews</h4>
            <div className="flex flex-col space-y-2">
              {interviewData.platform.examples.map((item, index) => (
                <a 
                  key={`platform-example-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Interview;