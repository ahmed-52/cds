import React, { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./Footer";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";

import "../index.css";
import Proj from "./ui/Proj";

const Project = () => {
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
                            active={"impact"}
                        ></Header>

                        {/* Page Content */}
                        <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px]">



                            <div className="mt-12 mb-16">
                                <h1 className="text-[40px] text-black mb-3 font-cond">
                                    Projects</h1>
                                <img
                                    className="w-[100%] h-auto"
                                    src="/projects.png"
                                >

                                </img>
                            </div>


                            <section className="pb-10">
                            <p className="font-gs font-[300] mb-6 text-cas md:text-[25px] text-[20px]">
  Projects In Progress...<br /><br />
  We currently have several exciting projects underway. Our team is working on advanced data analysis, product development, and market research for startups, local businesses, and larger organizations.<br /><br />
  These projects are designed to offer practical solutions that help our clients navigate their industries more effectively. Stay tuned for updates on these projects as we continue to push the boundaries of what data can do.
</p>

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

                            <h1 className="font-cond  text-[45px] mt-[80px] mb-4">Past Projects</h1>
                            <div className="h-[10px] w-full bg-das"></div>

                            {/* projects */}
                            <section>

                                <Proj
                                    title="Driving Growth for a B2B Service Provider"
                                    body="A B2B service provider struggled to expand its customer base, relying heavily on referrals. By optimizing their outreach and leveraging high-value trade events, we increased qualified leads by 15% and secured ~ $400,000  in new contracts within three months."
                                    image={"/projects/proj2"}
                                    link={"#"}
                                />


                                <Proj
                                    title="Optimizing Delivery Efficiency for a Logistics Company"
                                    body="A logistics company experienced rising fuel costs and delivery inefficiencies due to overlapping routes. We conducted a fleet analysis and redesigned delivery zones using a best-route algorithm, prioritizing time-sensitive shipments. This streamlined operations, reducing fuel expenses by 9% and improving delivery times by 14%."
                                    image={"/projects/proj1"}
                                    link={"#"}
                                />

                                <Proj
                                    title="Optimizing Patient and Payer Strategy for a Healthcare Provider"
                                    body="A healthcare provider needed to better serve underserved demographics and improve payer negotiations. Our multilingual outreach initiatives and pricing framework increased patient engagement by 12% and payer reimbursements by 4.72%."
                                    image={"/projects/projx"}
                                    link={"#"}
                                />

                                <Proj
                                    title="Improving Retention for an E-Commerce Client"
                                    body="Faced with declining customer retention, an e-commerce client sought to optimize their user experience and engagement. We analyzed purchasing patterns and implemented A/B testing to personalize product recommendations and refine their homepage design. These changes increased repeat purchases by 8% and improved inventory turnover by 17%."
                                    image={"/projects/proj4"}
                                    link={"#"}
                                />

                                <Proj
                                    title="Transforming Customer Experience for a Regional Retailer"
                                    body="A regional retailer faced a 15% decline in customer retention due to inconsistent product placement and insufficient staff training. We implemented a standardized layout and launched a targeted training program, boosting retention by 12% and customer satisfaction by 23% within six months."
                                    image={"/projects/proj5"}
                                    link={"#"}
                                />
                            </section>





                            <section className="my-[100px]">
                                <h1 className="md:text-[30px] text-[22px] font-bold text-black text-start mt-10">
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
                                Membership
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

export default Project;
