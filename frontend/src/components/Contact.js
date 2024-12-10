import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import { Footer } from "./Footer";
import Header from "./ui/Header";
import { db } from "../firebase";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })); // Live clock state


    const [isOpen, setIsOpen] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }));
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "contactMessages"), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date().toISOString(),
            });

            // Reset form and show success message
            setFormData({ name: "", email: "", message: "" });
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };


    return (
        <>
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

            <Header theme="light" bg="cas" textcl="white" active="contact" />

            <div className="relative min-h-screen bg-white flex flex-col">
                <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px] mt-16">
                    <h1 className="text-[40px] font-cond text-black mb-6">Contact Us</h1>
                    <div className="h-[10px] w-full bg-das mb-10"></div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Text */}
                        <div>
                            <p className="font-gs text-cas md:text-[22px] text-[18px] leading-relaxed mb-6">
                                Have a question, or want to collaborate with us? Reach out! We're always excited to hear from you.
                            </p>
                            <p className="font-gs text-cas md:text-[22px] text-[18px] leading-relaxed">
                                Email us directly at:
                                <a href="mailto:c.data.strategy@gmail.com" className="text-das font-medium hover:underline ml-2">
                                    c.data.strategy@gmail.com
                                </a>
                            </p>
                            <p className="font-gs text-cas md:text-[22px] text-[18px] leading-relaxed mt-4 font-bold">
                                Ithaca, New York
                            </p>
                            <p className="font-gs text-cas md:text-[22px] text-[18px] leading-relaxed">
                                <span className="font-medium text-black">{currentTime}</span>
                            </p>
                        </div>

                        {/* Right Column: Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
                            {success && (
                                <p className="text-green-600 font-medium">
                                    Thank you for reaching out! We will get back to you soon.
                                </p>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    required
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                    required
                                    placeholder="Your Message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-das py-2 rounded-md text-sm flex justify-center items-center hover:bg-hov px-5 text-white font-medium transition-transform duration-300 hover:translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

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

            <Footer theme={"dark"} />
        </>
    );
};

export default Contact;
