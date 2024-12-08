import React from "react";
import { Timeline } from "./ui/TimeLine";

const Recru = () => {
  const data = [
    {
      title: "Sept 13",
      content: (
        <div>
          <p className="text-neutral-800 text-2xl md:text-4xl font-normal mb-4 font-shippori-mono">
            Info Session
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Location: White Hall 106
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Time: 4:30 pm
          </p>
          <div className="mt-2">
            <img
              src="Recru62.png"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sept 16",
      content: (
        <div>
          <p className="text-neutral-800 font-shippori-mono text-2xl md:text-4xl font-normal mb-4">
            Info Session
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Location: White Hall 106
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Time: 5:00 pm
          </p>
          <div className="mt-2">
            <img
              src="Recru62.png"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sept 23",
      content: (
        <div>
            <p className="text-neutral-800 font-shippori-mono text-2xl md:text-4xl font-normal mb-4">
            Application <span className="underline">Deadline</span>
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Submit your application before midnight to be considered.
          </p>
          <div className="mt-2">
            <img
              src="Recru64.png"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
        title: "Sept 25-27",
        content: (
          <div>
            <p className="text-neutral-800 font-shippori-mono text-2xl md:text-4xl font-normal mb-4">
            In-person Interviewes
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Time: Specific time slots will be communicated via email.
          </p>
          <div className="mt-2">
            <img
              src="Recru65.png"
              alt="hero template"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          </div>
        ),
      },

  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default Recru;
