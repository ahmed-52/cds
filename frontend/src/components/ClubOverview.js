import React from "react";
import { StickyScroll } from "./ui/StickyScroll"; // Assuming StickyScroll is the component

export const ClubOverview = () => {
  const content = [
    {
      title: "Predictive Modeling & Market Research",
      description:
        "We aim to utilize predictive modeling to assist organizations in anticipating future trends and behaviors. Through data-driven insights, we plan to support businesses in making informed decisions and developing more effective market strategies.",
      image: "3.png", // Path to the image for this section
    },
    {
      title: "Product Development and Strategy",
      description:
        "Our goal is to guide product development using advanced data analytics and thorough research. From ideation to product launch, we strive to help businesses refine their strategies to better align with market needs and business objectives.",
      image: "4.png", // Path to the image for this section
    },
    {
      title: "Data Analytics & Corporate Advisory",
      description:
        "We seek to offer comprehensive data analytics services, aiming to identify emerging trends and actionable insights. Our focus is on improving corporate strategies and enhancing decision-making processes across diverse industries.",
      image: "5.png", // Path to the image for this section
    },
  ];

  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};
