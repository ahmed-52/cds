const TeamMember = ({ image, name, title }) => {
    return (
      <div className="flex flex-col items-start justify-start text-center">
        {/* Image Container with Cropping */}
        <div className="relative w-[240px] h-[275px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Name and Title */}
        <h3 className="mt-4 text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    );
  };
  
  export default TeamMember;
  