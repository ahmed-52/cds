import React from 'react';

const Impact = () => {
    return (
        <>
            <div className="w-full bg-blue-950 text-white py-16 mt-5">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-20">Our Impact</h2>
                    
                    {/* Changed to flex-col on mobile, flex-row on md and up */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 md:gap-0">
                        {/* First Column - full width on mobile, 1/3 on larger screens */}
                        <div className="w-full md:w-1/3 flex flex-col items-center text-center px-4">
                            <div className="text-6xl font-bold mb-8">+$1.6M</div>
                            <div className="text-26 font-medium mb-6 !text-white">Business Value Generation</div>
                            <p className="text-16 !text-white px-6 max-w-xs">
                            Delivered through cost reduction, pricing optimization, targeted growth strategies, and operational improvements
                            </p>
                        </div>
                        
                        {/* First Divider - hidden on mobile */}
                        <div className="hidden md:block w-px bg-white opacity-60 h-72"></div>
                        
                        {/* Second Column */}
                        <div className="w-full md:w-1/3 flex flex-col items-center text-center px-4">
                            <div className="text-6xl font-bold mb-8">~23%</div>
                            <div className="text-26 font-medium mb-6 !text-white">Resource Optimization</div>
                            <p className="text-16 !text-white px-6 max-w-xs">
                                Improved efficiency through optimized workflows and data-driven resource allocation
                            </p>
                        </div>
                        
                        {/* Second Divider - hidden on mobile */}
                        <div className="hidden md:block w-px bg-white opacity-60 h-72"></div>
                        
                        {/* Third Column */}
                        <div className="w-full md:w-1/3 flex flex-col items-center text-center px-4">
                            <div className="text-6xl font-bold mb-8">8</div>
                            <div className="text-26 font-medium mb-6 !text-white">Industries Transformed</div>
                            <p className="text-16 !text-white px-6 max-w-xs">
                                From retail and healthcare to finance and education, our expertise spans diverse sectors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Impact;