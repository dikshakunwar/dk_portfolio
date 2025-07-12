import React from "react";

const PhotoBack = () => {
  return (
    <div className="flex font-bold text-1.5xl justify-center mt-3 items-center border-2 border-MutedRose rounded-full px-5 py-1 mx-auto">
      <button className="px-4 py-2 -ml-4 rounded-full  text-MutedRose hover:bg-MutedRose hover:text-white hover:text-2xl transition-all duration-300">
        Linkedln
      </button>
      <button className="px-4 py-2 -mr-4 rounded-full  text-MutedRose hover:bg-MutedRose hover:text-white hover:text-2xl transition-all duration-300">
        CV
      </button>
    </div>
  );
};

export default PhotoBack;
