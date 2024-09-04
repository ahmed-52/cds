"use client";
import { motion } from "framer-motion";

function TeamCard({ img, name, position }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="md:h-72 w-72 h-64 md:w-72 min-w-[240px] min-h-[240px] bg-transparent rounded-lg overflow-hidden group/card relative"
      >
        <img
          alt="team member"
          className="h-full w-full object-cover scale-[1.15]"
          width="1000"
          height="1000"
          src={img}
        />
      </motion.div>
      {/* Name and Position Below the Image */}
      <p className="font-bold text-lg mt-4">{name}</p>
      <p className="text-sm text-gray-600">{position}</p>
    </div>
  );
}

export default TeamCard;
