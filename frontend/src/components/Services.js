import React, { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./Footer";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";

import "../index.css";


const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Trigger the animation after a delay to allow the overlay to play first
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 500); // Adjust timing as needed (1.5 seconds in this case)
        return () => clearTimeout(timer);
    }, []);



    return (
        <>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-das z-50 transition-all duration-1000 ease-in-out ${animationComplete ? 'translate-y-full' : 'translate-y-0'
                    }`}
            ></div>

            <div className="relative min-h-screen flex bg-white">
                {/* Main content on the left */}
                <div className="flex-1">

                    <div className="">
                        {/* Hamburger Icon */}
                        {!isOpen && (
                            <button
                                className="fixed top-10 right-4 lmd:hidden z-40 text-black"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg width="37" height="18" viewBox="0 0 37 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="37" height="4" fill="#9A9A9A" />
                                    <rect y="7" width="37" height="4" fill="#9A9A9A" />
                                    <rect y="14" width="37" height="4" fill="#9A9A9A" />
                                </svg>


                            </button>
                        )}

                        <Header
                            theme="light"
                            textcl={"white"}
                            bg={"cas"}
                            active={"capabilities"}
                        ></Header>
                        {/* Page Content */}
                        <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px] font-gs">




                            <div className="mt-12 mb-16">
                                <h1 className="text-[40px] text-black mb-3 font-cond">
                                    Our Services </h1>
                                <img
                                    className="w-[100%] h-auto"
                                    src="services.png"
                                >

                                </img>
                            </div>


                            <section className="pb-20">
                            <p className="font-gs font-[300] mb-6 text-cas md:text-[25px] text-[20px]">
  At Cornell Data Strategy, we specialize in leveraging data science to address critical business challenges.<br /><br />

  Our focus extends to solving operational inefficiencies, expanding market opportunities, tackling financial complexities, and uncovering the root causes of business issues.<br /><br />

  Through data-driven analysis and actionable strategies, we empower organizations to make informed decisions, optimize performance, and achieve sustainable growth.
</p>

                            </section>

                            <section className="flex justify-center items-center md:flex-row flex-col mb-[120px]">

                                <div className="w-full max-w-[550px] bg-das h-auto md:h-[400px] text-white p-8">
                                    <div className="flex justify-between items-center mb-5">
                                        <h1 className="text-[25px] md:text-[30px] font-gs max-w-[300px] self-start">Market Expansion & Financial Analysis</h1>
                                        <img src="svg/bat2.svg"></img>
                                    </div>
                                    <p className="text-[22px] font-gs max-w-[450px]" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From identifying new market opportunities to solving complex financial challenges, we use advanced analytics to help organizations expand and thrive.</p>

                                </div>
                                <div className="w-full max-w-[550px] bg-[#F7F7FA] h-auto md:h-[400px] p-8 text-cas md:-mb-[240px] md:-ml-[70px]">

                                    <div className="flex justify-between items-center mb-5">
                                        <h1 className="text-[25px] md:text-[30px] font-gs max-w-[300px] self-start">Predictive Modeling & Market Research</h1>
                                        <img src="svg/predict.svg"></img>
                                    </div>
                                    <p className="text-[22px] font-gs max-w-[450px]" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We aim to utilize predictive modeling to assist organizations in anticipating future trends and behaviors. Through data-driven insights, we plan to support businesses in making informed decisions and developing more effective market strategies.</p>


                                </div>

                            </section>



                            <style>
                                {`
          @media (max-width: 1275px) {
            .flex-container {
              flex-direction: column;
            }
          }

        `}
                            </style>


                            <section className="pt-[60px]">
                            <p className="font-gs font-[300] text-cas md:text-[25px] text-[20px]">
                                <span className="font-[500] text-[30px]">Transformative Data Solutions.</span><br /><br />

                                We empower organizations to leverage data as a strategic asset. By uncovering patterns, predicting outcomes, and enabling informed decision-making, we help businesses address challenges.<br /><br />

                                Enabling you to seize opportunities and achieve long-term growth in an ever-evolving landscape.<br /><br />
                                </p>


                            </section>






                            <section className="font-gs py-10 mx-auto mt-10">
                                <div className="flex flex-col mb-6 bg-[#333333] max-w-[900px] py-5 px-5 shadow-2xl">
                                    <div className="flex flex-col lmd:flex-row-reverse justify-between gap-5">

                                        <div className="flex justify-center items-start flex-col">
                                            <h3 className="md:text-[35px] pt-5 text-[25px] font-cond text-white mb-5 leading-[1.2]">
                                                Business Insights & Strategy
                                            </h3>
                                            <p className="font-georgia md:text-[18px] text-[15px] mb-6 text-white max-w-[550px] leading-[1.2]">
                                                We deliver data-driven solutions to address operational inefficiencies, optimize market strategies, and provide actionable insights that guide smarter business decisions. work closely with our clients to understand their unique challenges, craft  strategies, execution to drive measurable outcomes and long-term success.
                                            </p>
                                        </div>

                                        <div className="flex lmd:justify-center justify-start items-center w-full lmd:w-1/2">
                                            <img
                                                className="w-auto h-auto  max-w-full max-h-[322px]"
                                                src="biz.png"
                                                alt="Consulting"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6 bg-[#686868] max-w-[900px] py-5 px-5 md:-mt-[36px] md:ml-auto shadow-2xl">
                                    <div className="flex flex-col lmd:flex-row justify-between gap-5">

                                        <div className="flex justify-center items-start flex-col">
                                            <h3 className="md:text-[35px] pt-5 text-[25px] font-cond text-white mb-5 leading-[1.2]">
                                                Strategic Implementation & Impact
                                            </h3>
                                            <p className="font-georgia md:text-[18px] text-[15px] mb-6 text-white max-w-[550px] leading-[1.2]">
                                                We go beyond insights to deliver actionable strategies that drive real change. Our team ensures seamless execution of tailored solutions designed to address operational and market challenges. With a focus on measurable outcomes, we help organizations achieve sustainable growth and long-term success.
                                            </p>
                                        </div>

                                        <div className="flex lmd:justify-center justify-start items-center w-full lmd:w-1/2">
                                            <img
                                                className="w-auto h-auto  max-w-full max-h-[322px]"
                                                src="consulting.png"
                                                alt="Consulting"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </section>




                            <div className="h-[10px] max-w-[700px] w-full bg-das mt-10"></div>
                            <section
                                className="my-10 relative bg-cover bg-center bg-no-repeat rounded overflow-hidden"
                                style={{ backgroundImage: "url('projectstruct.png')" }}
                            >
                                <div className="bg-black/70 text-white p-8 md:p-12 rounded-md">
                                    <h4 className="text-md uppercase font-medium mb-2">Timeline</h4>
                                    <h2 className="text-2xl md:text-4xl mb-4 font-bold">Project Structure</h2>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        At Cornell Data Strategy, our projects are designed to deliver results
                                        within a single semester (8-10 weeks) during the Spring or Fall. Each team
                                        is led by experienced project leads and supported by a group of dedicated
                                        analysts, ensuring close collaboration and focused execution. We offer
                                        regular touchpoints, whether weekly or bi-weekly, and customize our
                                        approach to align with each client’s unique needs and goals, ensuring
                                        every partnership is impactful and efficient.
                                    </p>

                                    <a href="/projects">
                                        <button className="bg-white py-2 rounded-md text-sm flex justify-start mt-5 items-center hover:bg-zinc-500 pl-3 pr-7 text-black font-gs transition-transform duration-300 hover:translate-y-1">
                                            Past Projects
                                            <img className="ml-2" src="svg/inblack.svg"></img>
                                        </button>
                                    </a>
                                </div>

                                <div className="absolute top-8 right-8">
                                    <img src="svg/block2.svg" alt="Project Icon" className="w-12 h-12" />
                                </div>
                            </section>




                            <section className="my-[100px]">
                                <h1 className="md:text-[30px] text-[22px] f text-black font-bold text-start mt-10">
                                    Let’s talk! We’re here to help you achieve your goals.
                                </h1>
                                <p className="md:text-[22px] text-[15px] text-black font-gs text-start max-w-[1000px]">
                                    As a student-led initiative, we provide these services at no cost, ensuring our focus remains on delivering impactful solutions and gaining practical experience.
                                </p>

                                <a href="mailto:c.data.strategy@gmail.com">
                                    <button className="bg-das py-2 rounded-md text-sm my-4 flex justify-center items-center hover:bg-hov px-5 text-white font-gs transition-transform duration-300 hover:translate-y-1">
                                        Book a call

                                    </button>
                                </a>

                            </section>





                            {/* Add more sections as needed */}
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile */}
                {isOpen && (
                    <div className="fixed inset-0 bg-[#333333] z-20">
                        <div className="absolute top-10 right-4">
                            <button
                                className="text-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        y="23.4629"
                                        width="33.1814"
                                        height="3.58717"
                                        transform="rotate(-45 0 23.4629)"
                                        fill="white"
                                    />
                                    <rect
                                        width="33.1814"
                                        height="3.58717"
                                        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26 23.4629)"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col items-center justify-center h-full">
                            <a
                                href="/"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Home
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-12 h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>

                            <a
                                href="/services"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Capabilities
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>

                            <a
                                href="/projects"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Impact
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>

                            <a
                                href="/about"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Our People
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>

                            <a
                                href="/careers"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Careers
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-[70px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>

                            <a
                                href="/contact-us"
                                className="block py-1 text-white text-[18px] font-gs group relative hover:text-[#c3c3c3]"
                            >
                                Contact Us
                                <span
                                    className="absolute inset-x-0 bottom-1.5 w-[100px] h-0.5 bg-[#1E53EF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                                ></span>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
            <Footer
                theme={"dark"}
            ></Footer>
        </>
    );
};

export default Services;
