import React from "react";
import Namee from "./Namee";
import PhotoBack from "./PhotoBack";

import Picc from "./Picc";
const PNMain = () => {
  return (
    <div
      id="mainn"
      className="flex md:flex-col sm:flex-col md:w-auto md:h-auto mx-auto justify-center gap-[5%] items-center relative px-1"
    >
      <div className=" flex flex-col justify-center pt-40 pb-16 sm:flex-col sm:justify-content-space-between">
        <Namee />
        <Picc />
        <PhotoBack />
      </div>
    </div>
  );
};

export default PNMain;
