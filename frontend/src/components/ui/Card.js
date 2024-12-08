import React from "react";

function Card({ icon, title, description, delay, translate }) {
  return (
    <div
      className="bg-white text-cas font-ant p-8 flex-1 scroll-fade transform transition-transform duration-1000 ease-out hover:scale-110"
      style={{ "--delay": delay, "--translate": translate }}
    >
      <div className="flex items-center mb-4">
        <img className="mr-4" src={icon} alt={`${title} icon`} />
        <h3 className="text-[25px] font-semibold">{title}</h3>
      </div>
      <p className="text-[18px] font-shippori font-medium leading-[1.2]">{description}</p>
    </div>
  );
}

export default Card;
