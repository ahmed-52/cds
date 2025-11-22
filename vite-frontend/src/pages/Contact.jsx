import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [currentTime, setCurrentTime] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Live Clock
    useEffect(() => {
        setCurrentTime(new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }));

        const interval = setInterval(() => {
            setCurrentTime(
                new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formUrl =
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSewZCSgoOj75kUAAwLbD-DiXogO-KSl5ldTH3lGUjdvx4MCdg/formResponse";

        const googleForm = new FormData();
        googleForm.append("entry.1167041686", formData.name);
        googleForm.append("entry.820330395", formData.email);
        googleForm.append("entry.1029667494", formData.message);

        try {
            await fetch(formUrl, {
                method: "POST",
                mode: "no-cors",
                body: googleForm,
            });

            setSuccess(true);

            // CLEAR FIELDS
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error("Error submitting Google Form:", err);
        }
    };

    return (
        <div className="bg-white min-h-screen pt-24 lg:pt-32 mb-10">
            <div className="max-w-[1600px] mx-auto border-t border-[#051C2C]/10">
                <div className="grid lg:grid-cols-12 min-h-[80vh]">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-5 bg-[#051C2C] text-white p-8 lg:p-20 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#155cfc] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-12 bg-[#155cfc]"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">
                                    Get in Touch
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-8">
                                Let's build<br />
                                <span className="italic text-gray-400">solutions.</span>
                            </h1>

                            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-md mb-12">
                                Have a question about our services, or want to explore a partnership?
                                Our team is ready to engage.
                            </p>
                        </div>

                        <div className="space-y-8 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                                    <Mail size={14} /> Email Us
                                </p>
                                <a
                                    href="mailto:c.data.strategy@gmail.com"
                                    className="text-xl lg:text-2xl font-serif hover:text-[#155cfc] transition-colors"
                                >
                                    c.data.strategy@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                                    <MapPin size={14} /> Headquarters
                                </p>
                                <p className="text-xl font-serif">Ithaca, New York</p>
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                                    <Clock size={14} /> Local Time (EST)
                                </p>
                                <p className="text-xl font-serif tabular-nums text-[#155cfc]">
                                    {currentTime}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — FORM */}
                    <div className="lg:col-span-7 bg-white p-8 lg:p-24 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">

                            {success && (
                                <div className="bg-green-50 text-green-800 px-6 py-4 text-sm border-l-2 border-green-600">
                                    Thank you for reaching out. We will respond shortly.
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-xs font-bold uppercase tracking-widest text-[#051C2C]"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-[#051C2C] focus:outline-none focus:border-[#155cfc] focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-xs font-bold uppercase tracking-widest text-[#051C2C]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-[#051C2C] focus:outline-none focus:border-[#155cfc] focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-xs font-bold uppercase tracking-widest text-[#051C2C]"
                                    >
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-[#051C2C] focus:outline-none focus:border-[#155cfc] focus:bg-white transition-all duration-300 placeholder:text-gray-300 resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group inline-flex items-center justify-center bg-[#051C2C] text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 hover:bg-[#155cfc] transition-all duration-300 w-full md:w-auto"
                            >
                                Send Message
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
