import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrResume } from "react-icons/gr";

const PhotoBack = () => {
  return (
    <div className="flex font-bold text-1.5xl aljustify-center md:-mt-0 sm:mt-3 items-center border-2 border-MutedRose rounded-full hover:scale-110 transition-all duration-300 px-5 py-1  mx-auto relative z-10">
      <div>
        <button
          onClick={"https://www.linkedin.com/in/diksha-kunwar-3a9b4a314/"}
          className="flex flex-row gap-1 px-4 py-2 -ml-4 rounded-full text-MutedRose hover:bg-MutedRose hover:text-white hover:scale-105 transition-all duration-300"
        >
          <a href="https://www.linkedin.com/in/diksha-kunwar-3a9b4a314/">
            Linkedln
          </a>
          <FaLinkedin className="sm:hidden md:block" />
        </button>
      </div>
      <button className="flex flex-row gap-2 px-4 py-2 -mr-4 rounded-full text-MutedRose hover:bg-MutedRose hover:text-white hover:scale-105 transition-all duration-300">
        <a href="/dk_portfolio/Images/diksha_resumee.pdf"> CV </a>
        <GrResume className="sm:hidden md:block" />
      </button>
    </div>
  );
};

export default PhotoBack;
