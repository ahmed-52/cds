import { motion } from "framer-motion";

const TeamMember = ({ image, name, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Reveal when in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true }} // Trigger only once
      className="flex flex-col items-start justify-start text-center"
    >
      {/* Responsive Image Container */}
      <div className="relative aspect-w-360 aspect-h-412 w-full max-w-[360px]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full mr-auto"
        />
      </div>

      {/* Name and Title */}
      <h3 className="mt-4 md:text-2xl text-xl font-semibold font-Domine">{name}</h3>
      <p className="text-sm text-gray-600 italic">{title}</p>
    </motion.div>
  );
};

export default TeamMember;
