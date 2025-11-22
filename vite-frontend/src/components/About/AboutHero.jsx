import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const AboutHero = () => {
    return (
        <>
            {/* Main Hero Section */}
            <section id="about-top" className="relative h-[80vh] min-h-[600px] w-full bg-[#051C2C] overflow-hidden">
                {/* Background Image with sophisticated gradient */}
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        src="/images/cornellHome.png"
                        alt="Cornell Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-12 max-w-[1600px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-white/30"></div>
                            <p className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase">
                                About Us
                            </p>
                        </div>
                        
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
                            A team that dreams<br />
                            <span className="italic text-gray-400">and executes.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro / Mission Statement - The "Grid" Look */}
            <section className="border-b border-[#051C2C]/10 bg-white">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-0">
                        
                        {/* Left Column: Header */}
                        <div className="lg:col-span-4 p-8 lg:p-16 border-r border-[#051C2C]/10 flex flex-col justify-between">
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#051C2C] leading-tight">
                                What is Cornell<br />Data Strategy?
                            </h2>
                            <div className="hidden lg:block mt-12">
                                <ArrowDown className="text-[#155cfc] animate-bounce" size={24} />
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="lg:col-span-8 p-8 lg:p-16">
                            <p className="text-xl md:text-2xl font-light text-[#051C2C] leading-relaxed mb-8">
                                Cornell Data Strategy is a student-run consulting organization dedicated to solving complex business challenges through <span className="font-medium text-[#155cfc]">data-driven approaches</span>.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
                                <div>
                                    <h4 className="font-serif text-lg mb-3 text-[#051C2C]">Our Mission</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We bring together talented students across disciplines to deliver actionable insights and strategic recommendations to clients.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg mb-3 text-[#051C2C]">Our Approach</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We combine technical expertise with business acumen to bridge the gap between analytical methodologies and practical implementation.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHero;