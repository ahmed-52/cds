import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Proj = ({ title, body, image, link }) => {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    toast.info('Reports are under construction. Please check back later.');
  };

  return (
    <section
      className="my-10 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${image}.png')` }}
    >
      <div className="bg-black/30 text-white p-8 md:p-12">
        <h2 className="text-2xl md:text-4xl mb-4 font-cond">{title}</h2>
        <p className="text-sm md:text-base leading-relaxed max-w-[600px]">
          {body}
        </p>

        <div className="flex justify-start gap-2 items-center mt-10 group">
          <a className="hover:underline" href="#" onClick={handleLearnMoreClick}>Learn More</a>
          <img
            className="mt-1 transition-transform duration-300 transform group-hover:translate-x-2"
            src="/svg/in.svg"
          />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Proj;