import { motion } from "framer-motion";

const TeamMember = ({ image, name, title }) => {
  if (!image) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      viewport={{ once: true }} 
      className="flex flex-col items-start justify-start"
    >
      {/* Standardized image container with fixed aspect ratio */}
      <div className="relative w-full max-w-[360px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <div className="absolute inset-0 bg-gray-100">
          {/* Image wrapper for positioning */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top"
              style={{
                objectPosition: "center 25%"
              }}
            />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="mt-4 w-full">
        <h3 className="text-xl md:text-2xl font-semibold font-Domine">{name}</h3>
        <p className="text-sm text-gray-600 italic">{title}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;