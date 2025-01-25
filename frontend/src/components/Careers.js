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

const onClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSceTQZWDOCguSu0uKlJB8CHwhPRkPeRb0PW3nVmiMiTVoAUsg/viewform?usp=header", "_blank");
    }

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
                            active={"careers"}
                        ></Header>


                        <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px] ">
                            <div className="mt-[100px] mb-16">
                                {/* <p className="font-Domine text-cool px-[2px] py-[1px] border-2 border-black w-[80px] text-center font-bold">DS&A</p> */}
                                <h1 className="lg:text-[60px] font-bold text-[40px] text-cool mb-3 font-Domine">
                                    Joining Cornell Data Strategy</h1>
                                <p className="font-Domine text-[20px] text-cool para2 max-w-[1000px]">We're looking for passionate people to join us on our mission to empowering data-driven leaders through impactful projects, critical thinking, and innovative solutions.</p>
                                <button onClick={onClick} className="bg-das text-white font-bold hover:bg-hov px-6 py-2 mt-6 font-Domine flex justify-end gap-5 items-center group">
                                Apply
                                <img
                                    src="svg/anglearrow.svg"
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]"
                                />
                                </button>
                                <div className=" mt-6 h-[6px] bg-[#2562F5] w-full"></div>
                            </div>


                        </div>
                        {/* Page Content */}
                        <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px] py-5">

                            <section className="">
                                <h1 className="font-Domine text-cool text-[40px] mb-5 text-start">What sets us apart?</h1>
                                <div className="bg-[#F7F7FA] py-10 px-3 md:px-0">
                                    <div className="flex flex-col md:flex-row items-start justify-around gap-8">
                                        <div className="md:max-w-[370px]">
                                            <h1 className="font-Domine text-2xl font-bold text-three mb-3">1.1 Projects That Matter</h1>
                                            <p className="para2 text-lg text-three">Our work delivers value where it’s needed most—whether improving customer retention, optimizing operations, or assessing ROI. Every project solves a challenge with real impact</p>
                                        </div>
                                        <div className="md:max-w-[370px]">
                                            <h1 className="font-Domine text-2xl font-bold text-three mb-3">1.2 Building  Thinkers</h1>
                                            <p className="para2 text-lg text-three">Data experts learn to align their insights with business goals, while strategists master tools like Python and financial modeling to back their decisions with data.
                                            </p>
                                        </div>
                                        <div className="md:max-w-[370px]">
                                            <h1 className="font-Domine text-2xl font-bold text-three mb-3">1.3 Solutions That Stick</h1>
                                            <p className="para2 text-lg text-three">We go beyond recommendations, delivering tools and strategies that drive measurable results—from custom dashboards to optimized workflows.</p>
                                        </div>
                                    </div>

                                    <img
                                        className="ml-auto mt-5"
                                        src="svg/dsaarrow.svg"></img>
                                </div>

                            </section>



                            <div className="font-Domine text-cool w-full mx-auto mt-10">
                                {/* Wrapper to make them side-by-side on larger screens, stacked on mobile */}
                                <div className="flex flex-col lg:flex-row gap-5">

                                    {/* LEFT SECTION: Recruitment Timeline */}
                                    <div className="lg:w-1/2 bg-three text-white p-8">
                                        <h2 className="text-3xl font-bold mb-6">Recruitment Timeline</h2>

                                        {/* Timeline Container (vertical line) */}
                                        <div className="relative pl-8">
                                            {/* Vertical line */}
                                            <div className="absolute left-1.5 top-0 bottom-0 border-l border-2 border-white mb-7 mt-5" />

                                            {/* 1) Club Fest */}
                                            <div className="relative mb-10">
                                                {/* White circle */}
                                                <div className="absolute -left-[33px] top-1.5 bg-white w-4 h-4 rounded-full" />
                                                <p className="text-sm mb-1">February 2nd</p>
                                                <p className="text-lg font-semibold mb-0.5">Club fest</p>
                                                <p className="text-sm">Barton Hall</p>
                                            </div>

                                            {/* 2) Club Info Session */}
                                            <div className="relative mb-10">
                                                <div className="absolute -left-[33px] top-1.5 bg-white w-4 h-4 rounded-full" />
                                                <p className="text-sm mb-1">February 4th &amp; 6th</p>
                                                <p className="text-lg font-semibold mb-0.5">Club Info Session</p>
                                                <p className="text-sm">Location: TBD</p>
                                            </div>

                                            {/* 3) Resume & Interview Workshop */}
                                            <div className="relative mb-10">
                                                <div className="absolute -left-[33px] top-1.5 bg-white w-4 h-4 rounded-full" />
                                                <p className="text-sm mb-1">February 8th</p>
                                                <p className="text-lg font-semibold mb-0.5">Resume &amp; Interview Workshop</p>
                                                <p className="text-sm">Location: TBD</p>
                                            </div>

                                            {/* 4) Application Due (blue circle) */}
                                            <div className="relative mt-16">
                                                <div className="absolute -left-[33px] top-2 bg-blue-500 w-4 h-4 rounded-full" />
                                                <p className="text-sm">February 10th</p>
                                                <p className="text-lg font-semibold">Application Due</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT SECTION: Recruitment Process */}
                                    <div className="lg:w-1/2 bg-white p-8 border-2 border-three">
                                        <h2 className="text-3xl font-bold mb-6">Recruitment Process</h2>

                                        {/* Stage 1 */}
                                        <div className="mb-6">
                                            <h3 className="text-xl font-semibold mb-2">Stage 1: Resume Screen</h3>
                                            <p className="leading-relaxed">
                                                We’ll evaluate your qualifications, experiences, and interest in solving meaningful challenges.
                                            </p>
                                        </div>

                                        {/* Stage 2 */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-semibold mb-2">Stage 2: Final Round Interviews</h3>
                                            <p className="leading-relaxed">
                                                We’ll evaluate your problem-solving approach and ability to deliver actionable solutions across 4 dimensions
                                            </p>
                                        </div>

                                        {/* 4 Dimensions */}
                                        <div className="relative">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Data and Analysis */}
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-1">Data and Analysis</h4>
                                                    <p className="leading-relaxed text-sm">
                                                        Demonstrate your understanding of statistical concepts and dataset analysis.
                                                    </p>
                                                </div>

                                                {/* Finance Fundamentals */}
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-1">Finance Fundamentals</h4>
                                                    <p className="leading-relaxed text-sm">
                                                        Discuss topics like financial statement connections, profitability drivers, or valuations.
                                                    </p>
                                                </div>

                                                {/* Business Problem-Solving */}
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-1">Business Problem-Solving</h4>
                                                    <p className="leading-relaxed text-sm">
                                                        Solve a short business case, identify potential challenges, and propose actionable solutions.
                                                    </p>
                                                </div>

                                                {/* Personal Experience */}
                                                <div>
                                                    <h4 className="text-lg font-semibold mb-1">Personal Experience</h4>
                                                    <p className="leading-relaxed text-sm">
                                                        Reflect on past experiences where you worked in teams, resolved conflicts, or tackled complex challenges creatively.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Vertical Line */}
                                            {/* Vertical Line */}
                                            <div className="hidden md:flex absolute inset-0 justify-center mr-5">
                                                <div className="w-[1px] bg-gray-300 h-full"></div>
                                            </div>

                                            {/* Horizontal Line */}
                                            <div className="hidden md:flex absolute inset-0 items-center">
                                                <div className="w-full h-[1px] bg-gray-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <section className="my-20">

                                <h1 className="font-Domine text-three text-[35px] mb-5 text-start">Why Join Us?</h1>

                                <p className="para2 text-lg text-three max-w-[1200px]">
                                    At Cornell Data Strategy, we don’t just solve problems—we <strong>rethink</strong> how they’re approached. Whether anticipating the unexpected, streamlining operations, or turning <strong>raw data</strong> into <strong>transformative strategies</strong>, our projects demand <strong>creativity</strong> and <strong>precision</strong>.
                                    <br /><br />
                                    Here, you won’t just learn—you’ll lead. From corporate strategy to finance, data science, and beyond, you’ll build skills that set you apart. Our alumni have gone on to thrive in fields like <strong>quantitative trading</strong>, <strong>investment banking</strong>, <strong>private equity</strong>, <strong>management consulting</strong>, and <strong>software engineering</strong>.
                                </p>



                                <div className="flex justify-start items-center mt-10">
                                    <div className="bg-green-600 w-3 h-3 rounded-full" />
                                    <h2 className="font-Domine sm:text-lg text-base font-bold md:ml-2 ml-1 text-three">Applications are live—be part of something bigger.</h2>
                                </div>

                                <button onClick={onClick} className="bg-das text-white font-bold hover:bg-hov px-6 py-2 mt-6 font-Domine flex justify-end gap-5 items-center group">
                                Apply
                                <img
                                    src="svg/anglearrow.svg"
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]"
                                />
                                </button>

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

export default Careers;
