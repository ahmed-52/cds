"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function Beam() {
  return (
    <TracingBeam className="py-12">
      <div className="max-w-2xl mx-auto antialiased pt-12 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl text-white mb-4")}>
              {item.title}
            </p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
    {
      title: "About Cornell Data Strategy",
      description: (
        <>
          <p>
            Cornell Data Strategy is a student organization dedicated to merging the disciplines of data science and business consulting. Our mission is to offer actionable insights and forecasts that empower local businesses and the Cornell community to make informed, data-driven decisions. By combining in-depth analysis with practical strategies, we aim to address real-world challenges effectively.
          </p>
          <p>
            Our team brings together passionate individuals with diverse expertise, fostering an environment where students can grow, learn, and make a real impact through data.
          </p>
        </>
      ),
      badge: "Our Mission",
      image:
        "10.png",
    },
    {
      title: "Our Approach",
      description: (
        <>
          <p>
            At Cornell Data Strategy, we specialize in translating complex data into actionable insights that help businesses make informed decisions. By leveraging data analysis, predictive modeling, and strategic business consulting, we provide comprehensive solutions tailored to specific needs.
          </p>
          <p>
            From market research to product development, we aim to enhance decision-making processes for organizations through data-driven strategies.
          </p>
        </>
      ),
      badge: "Our Approach",
      image:
        "20.png",
    },
    {
      title: "Student Impact",
      description: (
        <>
          <p>
            Our club offers a unique opportunity for students to apply their analytical skills in real-world settings. Through consulting projects, students gain hands-on experience, working with local businesses and organizations to solve strategic problems using data insights.
          </p>
          <p>
            We host workshops, research opportunities, and events that allow students to deepen their understanding of data strategy and its application in various industries.
          </p>
        </>
      ),
      badge: "Impact & Opportunities",
      image:
        "30.png",
    },
  ];
