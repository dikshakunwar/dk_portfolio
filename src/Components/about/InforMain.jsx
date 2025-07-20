import React from "react";
import Info from "./Info";
import Picture from "./Picture";
import { LuCircleDashed } from "react-icons/lu";

const InforMain = () => {
  return (
    <div
      id="about"
      className="w-[20%] h-[800px] bg-greyLight text-white md:-mt-[130px] sm:-mt-4  rounded-2xl flex md:flex-row sm:flex-col md:w-full sm:w-full items-center relative"
    >
      <div className="h-[20px] flex items-center justify-center">
        <Picture />
        <div className="absolute -z-9 mr-[500px] flex justify-center items-center animate-pulse sm:hidden lg:block">
          <LuCircleDashed className="md:h-[10%] sm:h-[120%] min-h-[600px] w-[400px] mt-[15%] text-ShadowBlue blur-2xl animate-pulse duration-[1s] ease-linear" />
        </div>
        <Info />
      </div>
    </div>
  );
};

export default InforMain;
