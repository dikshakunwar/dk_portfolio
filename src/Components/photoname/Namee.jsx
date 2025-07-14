import React from "react";

const Namee = () => {
  return (
    <div className="flex -mt-14 flex-col gap-4 h-full justify-center md:test-center sm:text-center ">
      <div className="justify-between">
        <button className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-MutedRose border rounded-full px-0 py-0 sm:w-[20%] md:w-[30%] hover:bg-MutedRose hover:text-white transition-all duration-500">
          hello!!
        </button>
      </div>
      <h1 className="md:text-[2.8rem] lg:text-4xl sm:text-3xl font-body3 text-bold">
        I'm Diksha Kunwar
      </h1>
      <h2 className="-mt-3 -mb-6 md:text-[1.8rem] lg:text-xl sm:text-1xl font-special">
        Aspiring Software Engineer
      </h2>
    </div>
  );
};

export default Namee;
