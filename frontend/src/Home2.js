import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Footer } from "./components/Footer";
import Navbar from "./components/ui/Navbar";
import Header from "./components/ui/Header";
import Projcard from "./components/ui/Projcard";
import "./index.css";


const Home2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletterEmails"), {
        email: email,
      });
      setEmail("");
      setMessage({ text: "Subscribed successfully!", type: "success" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({ text: "Error subscribing, please try again.", type: "error" });
    }
  };

  useEffect(() => {
    // Trigger the animation after a delay to allow the overlay to play first
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Adjust timing as needed (1.5 seconds in this case)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transitionDelay = entry.target.dataset.delay;
          } else {
            entry.target.style.transform = `translateY(${entry.target.dataset.translate})`;
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);


  return (
    <>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#dfdfdf] z-50 transition-all duration-1000 ease-in-out ${animationComplete ? 'translate-y-full' : 'translate-y-0'
          }`}
      ></div>

      <div className="relative min-h-screen flex bg-[#ffffff]">
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
              active={"home"}
            ></Header>

            <div className="relative mb-16 max-h-[100vh] overflow-hidden">
              <img
                className="w-[100%] h-auto"
                src="homehero1.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-start md:justify-end items-start mb-20 max-w-[1000px] mx-10 mt-5 md:mx-20">
                <h1 className="text-[35px] md:text-[45px] lmd:text-[73px] font-gserif font-[300] text-start text-white">We are Cornell Data Strategy</h1>
                <p className="font-gs font-[300] mb-6 text-white text-[12px] lmd:text-[25px] md:text-[15]px]">
                  a student-run consulting organization delivering data-driven solutions and strategic insights.
                  We combine Cornell’s academic rigor with industry expertise to solve complex challenges. Using advanced analytics and innovative strategies, we help organizations achieve measurable results.

                  To analyze. To innovate. To excel.
                </p>
                <button
                  className="flex font-gserif justify-start gap-2 items-center mt-3 group bg-white hover:bg-slate-200 text-cas py-2 px-5"
                  onClick={() => window.location.href = '/projects'}
                >
                  <span>See our Impact</span>
                  <img
                    className="mt-1 transition-transform duration-300 transform group-hover:translate-x-2"
                    src="/svg/inblack.svg"
                    alt="Arrow Icon"
                  />
                </button>

              </div>
            </div>

            {/* Page Content */}
            <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px]">






              {/* <section className="pb-10">
                <p className="font-gs font-regular mb-6 text-cas md:text-[35px text-[25px]">
                  We are Cornell Data Strategy, a student-run consulting organization delivering data-driven solutions and strategic insights.<br></br><br></br>

                  We combine Cornell’s academic rigor with industry expertise to solve complex challenges.
                  Using advanced analytics and innovative strategies, we help organizations achieve measurable
                  results.<br></br><br></br>


                  To analyze. To innovate. To excel.
                </p>
                <div className="my-8 h-[8px] bg-cas w-full"></div>
              </section> */}



              <style>
                {`
          @media (max-width: 1275px) {
            .flex-container {
              flex-direction: column;
            }
          }

        `}
              </style>


              <section className="font-gs px-8 bg-[#F7F7FA] py-10">
                <div className="flex lmd:flex-row flex-col justify-between items-start">
                  <div className="py-10">
                    <p className="font-bold font-gs text-md text-three -mb-2">D&SA</p>
                    <h3 className="md:text-[50px] text-[35px] text-three font-bold">What We Offer</h3>
                  </div>
                  <p className="font-cond text-[22px] font-normal max-w-[650px] leading-[1.2] my-auto text-three">
                    We provide strategic insights and execute customized solutions that set us apart. Leveraging predictive analytics, innovative product development, and actionable strategies, we help organizations navigate challenges and achieve impactful results.
                  </p>

                </div>

              </section>

              <div className=" mt-10 h-[2px] bg-[#7f7f7f] w-full"></div>

              <section className="font-gs my-10">
                {/* <div className="flex flex-col mb-6 bg-white">
                  <div className="flex flex-col lmd:flex-row justify-between">

                    <div className="pl-8 py-[30px]">
                      <h3 className="md:text-[33px] text-[25px] font-gs text-das mb-5 leading-[1.2]">
                        Trusted by Organizations Across
                        <span className="block">Industries</span>
                      </h3>
                      <p className="font-gs md:text-[20px] text-[15px] mb-6 text-cas max-w-[550px] leading-[1.2]">
                        At Cornell Data Strategy, we deliver data-driven solutions that drive measurable impact. Trusted by startups and established businesses, we help unlock the full potential of your data.
                      </p>
                      <a href="mailto:c.data.strategy@gmail.com">
                    <button className="bg-das py-2 rounded-md text-sm flex justify-center items-center hover:bg-hov px-5 text-cas font-gs transition-transform duration-300 hover:translate-y-1">
                      Book a call
                    </button>
                  </a>
                    </div>

                    <div className="flex lmd:justify-center justify-start items-center w-full lmd:w-1/2 py-6">
                      <img
                        className="w-auto h-auto lmd:pl-3 pl-[32px] max-w-full max-h-[322px]"
                        src="consulting.png"
                        alt="Consulting"
                      />
                    </div>
                  </div>
                </div> */}


                <div className="flex flex-col lxl:flex-row gap-8 mt-12">
                  {/* Predictive Modeling & Market Research */}
                  <div
                    className="bg-[#F7F7FA] text-cas font-gs p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
                    data-delay="0.2s"
                    data-translate="70px"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[30px] font-medium  mb-2 font-gs">
                        Market<br></br>Research
                      </h3>
                      <img className="mb-10" src="svg/bat.svg" alt="Predictive Modeling" />
                    </div>
                    <p className="text-[18px] font-gs leading-[1.2]">
                      We aim to utilize predictive modeling to assist organizations in anticipating future trends and behaviors. Through data-driven insights, we plan to support businesses in making informed decisions and developing more effective market strategies.
                    </p>
                  </div>

                  {/* Product Development and Strategy */}
                  <div
                    className="bg-[#F7F7FA] text-cas font-gs p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
                    data-delay="0.4s"
                    data-translate="24px"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[30px] font-medium  mb-2 font-gs">
                        Strategy & <br></br>Implementation
                      </h3>
                      <img className="mb-10" src="svg/stair.svg" alt="Product Development" />
                    </div>
                    <p className="text-[18px] font-gs leading-[1.2]">
                      Our goal is to guide product development using advanced data analytics and thorough research. From ideation to product launch, we strive to help businesses refine their strategies to better align with market needs and business objectives.
                    </p>
                  </div>

                  {/* Data Analytics & Corporate Advisory */}
                  <div
                    className="bg-[#F7F7FA] text-cas font-gs p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
                    data-delay="0.6s"
                    data-translate="32px"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-[30px] font-medium  mb-2 font-gs">
                        Advanced<br></br> Data Modeling
                      </h3>
                      <img className="mb-10 ml-2" src="svg/block.svg" alt="Data Analytics" />
                    </div>
                    <p className="text-[18px] font-gs leading-[1.2]">
                      We seek to offer comprehensive data analytics services, aiming to identify emerging trends and actionable insights. Our focus is on improving corporate strategies and enhancing decision-making processes across diverse industries.
                    </p>
                  </div>
                </div>

              </section>







              {/* Contact Section */}
              {/* <section className="font-gs py-10 px-10 bg-white">
                <div className="flex items-center mb-2">
                  <h3 className="text-[40px] text-[#252525]">Interested in Collaborating?</h3>
                </div>
                <p className="para mb-6 text-[#252525]">
                  If you're interested in working with us or need our services to solve your organization's challenges, feel free to reach out! We're always looking for new projects and exciting opportunities to collaborate. Contact us at <a
                    href="mailto:c.data.strategy@gmail.com"
                    className="underline decoration-[1.5px] underline-offset-[3px] text-inherit"
                  >
                    c.data.strategy@gmail.com
                  </a>
                  and let’s explore how we can help your business thrive.
                </p>

              </section> */}


              <section className="font-gs px-8 bg-cas my-28 p-12">

                <div className="flex flex-col justify-between items-start text-white">
                  <h2 className="font-generalSans font-regular text-lg m-0">Our Impact</h2>
                  <h2 className="text-[50px] font-cond -mt-3">Latest Projects</h2>
                </div>

                <div className="flex flex-col lxl:flex-row gap-8 mt-10">
                  <Projcard
                    title={"Driving Growth for a B2B Service Provider"}
                    body={
                      "Boosted leads by 15% and secured $400K in contracts within three months by optimizing outreach and leveraging trade events"
                    }
                    link={"/projects"}
                    image={"projects/proj2"}
                  />
                  <Projcard
                    title={"Improving Retention for an E-Commerce Client"}
                    body={
                      "Enhanced repeat purchases by 8% and improved inventory turnover by 17% through personalized recommendations and A/B testing."
                    }
                    link={"/projects"}
                    image={"projects/proj4"}
                  />
                  <Projcard
                    title={"Transforming Customer Experience for a Retailer"}
                    body={
                      "Boosted retention by 12% and customer satisfaction by 23% within six months by standardizing layouts and staff training."
                    }
                    link={"/projects"}
                    image={"projects/proj5"}
                  />

                </div>

              </section>


              <section className="my-[100px] bg-[#F7F7FA] py-5 px-10">
                <h1 className="md:text-[40px] text-[22px] font-medium text-three font-gs text-start mb-2 mt-10">
                  Interested? Let’s Talk.
                </h1>
                <p className="md:text-[22px] text-[15px] text-black font-gs text-start mb-2 max-w-[1000px]">
                  As a student-led initiative, we provide these services at no cost, ensuring our focus remains on delivering impactful solutions and gaining practical experience.
                </p>

                <a href="mailto:c.data.strategy@gmail.com">
                  <button className="bg-das py-2 rounded-md text-sm my-4 flex justify-center items-center hover:bg-hov px-5 text-white font-gs transition-transform duration-300 hover:translate-y-1">
                    Contact

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
        theme={"light"}
      ></Footer>
    </>
  );
};

export default Home2;
