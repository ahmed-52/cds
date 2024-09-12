import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Intro = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-[#333333] text-white">
      {/* Spotlight effect */}
      <Spotlight className="absolute top-0 left-0" fill="rgba(255, 255, 255, 0.3)" />

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-apercu">
          Introducing Cornell Data Strategy Club
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-4xl mx-auto font-apercu">
       
We are excited to announce the formation of Cornell Data Strategy Club, a student organization dedicated to merging data science and business consulting. Our mission is to deliver actionable insights and forecasts that empower local businesses and the Cornell community to make informed, data-driven decisions. By combining in-depth analysis with practical strategies, we aim to address real-world challenges effectively.

        </p>
      </div>
    </div>
  );
};

export default Intro;
