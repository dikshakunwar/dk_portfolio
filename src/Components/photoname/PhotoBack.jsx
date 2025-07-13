import React from "react";

const PhotoBack = () => {
  return (
    <div className="flex font-bold text-1.5xl justify-center md:-mt-0 sm:mt-3 items-center border-2 sm:border-MutedRose md:border-white rounded-full hover:scale-110 transition-all duration-300 px-5 py-1  mx-auto relative z-10">
      <button className="px-4 py-2 -ml-4 rounded-full sm:text-MutedRose md:text-white hover:bg-MutedRose hover:text-white hover:scale-105 transition-all duration-300">
        Linkedln
      </button>
      <button className="px-4 py-2 -mr-4 rounded-full sm:text-MutedRose md:text-white hover:bg-MutedRose hover:text-white hover:scale-105 transition-all duration-300">
        CV
      </button>
    </div>
  );
};

export default PhotoBack;
