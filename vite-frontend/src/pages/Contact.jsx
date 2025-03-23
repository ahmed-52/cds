import React, { useState } from "react";
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
        console.log(formData);
    };


    return (
        <>

            <div className="relative min-h-screen bg-white flex flex-col">
                <div className="md:max-w-[1400px] xlx:mx-auto md:mx-[50px] mx-[20px] mt-16">
                    <h1 className="text-[40px] font-cond text-black mb-6">Contact Us</h1>
                    <div className="h-[10px] w-full bg-[#2562f5] mb-10"></div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Text */}
                        <div>
                            <p className="text-textcl md:text-[22px] text-[18px] leading-relaxed mb-6">
                                Have a question, or want to collaborate with us? Reach out! We're always excited to hear from you.
                            </p>
                            <p className="text-textcl md:text-[22px] text-[18px] leading-relaxed">
                                Email us directly at:
                                <a href="mailto:c.data.strategy@gmail.com" className="text-[#2562f5] font-medium hover:underline ml-2">
                                    c.data.strategy@gmail.com
                                </a>
                            </p>
                            <p className="text-textcl md:text-[22px] text-[18px] leading-relaxed mt-4 font-bold">
                                Ithaca, New York
                            </p>
                            <p className="text-textcl md:text-[22px] text-[18px] leading-relaxed">
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
                                className="bg-[#2562f5] py-2 rounded-md text-sm flex justify-center items-center hover:bg-hov px-5 text-white font-medium transition-transform duration-300 hover:translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
