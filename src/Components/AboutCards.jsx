import React from "react";

const AboutCards = ({ title, description, logo, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card flex flex-col gap-1 justify-center items-center w-full max-w-xs md:w-[200px] md:h-[180px] rounded-3xl bg-[#242F40] hover:bg-[#1E2A38] shadow-2xs hover:shadow-gray-800 transition-all duration-300 ease-in-out hover:-translate-y-2 px-4 py-6 md:px-0 md:py-0"
    >
      <div className="logo animate-bounce ">{logo}</div>
      <div className="content flex flex-col items-center justify-center flex-wrap p-2">
        <h1 className="text-lg md:text-xl font-bold text-center">{title}</h1>
        <p className="text-sm md:text-base text-center">{description}</p>
      </div>
    </div>
  );
};

export default AboutCards;
