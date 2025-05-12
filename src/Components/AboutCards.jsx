import React from "react";

const AboutCards = ({ title, description, logo, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card flex flex-col gap-1 justify-center items-center w-[230px] h-[180px] rounded-3xl bg-[#242F40] hover:bg-[#1E2A38] shadow-2xs hover:shadow-blue-900 transition-all duration-300 ease-in-out hover:-translate-y-2"
    >
      <div className="logo animate-bounce ">{logo}</div>
      <div className="content flex flex-col items-center justify-center flex-wrap p-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCards;
