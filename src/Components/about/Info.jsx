import React from "react";

const Info = () => {
  return (
    <div className="text-black text-center px-5 py-6 md:pt-0 justify-center space-between sm:items-center  sm:pt-[700px]">
      <h1 className="uppercase font-body3 font-bold text-6xl sm:text-5xl sm:text-center lg:text-left lg:ml-[20px]  lg:pt-[5px] sm:px-6 md:ml-[50px] ">
        About Me
      </h1>
      <p className="text-base font-body2 leading-relaxed text-justify text-black sm:text-xl lg:text-2xl max-w-prose mx-auto px-0 ml-[50px] sm:pt-[20px] sm:m-[30px] sm:px-6 lg:pt-[30px] lg:mr-[50px] lg:w-[550px] md:justify-center md:text-2xl md:ml-[50px]">
        I am a third-year Computer Science student currently pursuing a Bachelor
        of Technology. I have a strong interest in full-stack web development
        and enjoy building applications using both frontend and backend
        technologies. I take pride in my coding skills and am dedicated to
        continuous learning and improvement.
      </p>
    </div>
  );
};

export default Info;
