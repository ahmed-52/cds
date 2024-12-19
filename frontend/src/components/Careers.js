import React, { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./Footer";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";

import "../index.css";
import Proj from "./ui/Proj";

const Careers = () => {
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

            <div className="relative min-h-screen flex bg-cas">
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
                            theme="dark"
                            textcl={"cas"}
                            bg={"white"}
                            active={"careers"}
                        ></Header>

                        {/* Page Content */}
                        <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px]">



                            <div className="mt-12 mb-16">
                                <h1 className="text-[40px] text-white mb-3 font-cond">
                                    Joining Cornell Data Strategy</h1>
                                <img
                                    className="w-[100%] h-auto"
                                    src="/svg/arrowhero.svg"
                                >

                                </img>
                            </div>


                            <section className="pb-10">
                                <p className="font-gs font-medium mb-6 text-white md:text-[20px]">
                                    <span className="font text-[30px]">Why Cornell Data Strategy</span><br></br><br></br>
                                    We enable you to merge your passion for tech or business with real-world impact. Gain hands-on experience, solve meaningful challenges, and drive innovation in a collaborative environment.<br></br><br></br>
                                    If you’re passionate about technology, business, or both, we want you on our team. Whether you’re a data enthusiast or a strategic thinker, we offer opportunities to collaborate, grow, and make a real difference.
                                </p>
                            </section>

                            <div className="mb-8 h-[8px] bg-white w-full my-3"></div>




                            <style>
                                {`
          @media (max-width: 1275px) {
            .flex-container {
              flex-direction: column;
            }
          }

        `}
                            </style>

                            {/* projects */}

                            <section className="pb-10">


                                <p className="font-gs text-[20px] mb-6 mt-10 text-white ">
                                    <span className="font-extrabold text-[30px]">What We Look For</span><br></br>
                                    We seek driven and enthusiastic individuals who are passionate about solving real-world problems. Whether you're a tech-savvy innovator, a strategic thinker, or eager to learn, we value talent, curiosity, and a readiness to tackle challenges.<br></br>

                                    Join us if you’re ready to make an impact and grow alongside a dynamic, collaborative team.


                                </p>


                                <p className="font-gs text-[20px] mb-6 mt-16 text-white">
                                    <span className="font-extrabold text-[30px]">When To Apply</span><br></br>
                                    Applications open at the beginning of every semester, offering a window to join our team. Be sure to check this section of the website for updates on key dates and deadlines.<br></br>


                                </p>
                            </section>

                            <section className="bg-das text-white py-12 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between my-12">
                                {/* Text Content */}
                                <div className="max-w-screen-md">
                                    <h2 className="text-[40px] mb-4 font-gs">
                                        Interview Process
                                    </h2>
                                    <p className="text-[22px] font-g ">
                                        The application process consists of two interview rounds designed to assess your skills, enthusiasm, and fit for our team. Stay tuned for detailed information on the application timeline and process. </p>
                                </div>

                                {/* Icon */}
                                <div className="mt-6 md:mt-0">
                                    <img
                                        src="/svg/bat2.svg" // Replace with your icon path
                                        alt="Student Impact Icon"
                                        className="h-24 w-24 md:h-32 md:w-32"
                                    />
                                </div>
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
                theme={"light"}
            ></Footer>
        </>
    );
};

export default Careers;
