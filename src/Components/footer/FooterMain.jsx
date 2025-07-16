import React from "react";
const FooterMain = () => {
  return (
    <div className="px-4 bg-grey/50 h-[70px] mt-[70px]">
      <div className="flex md:justify-between mt-4 max-w-[1200px] mx-auto  text-black font-body2 ">
        <p className="text-3xl mt-2 font-body3 uppercase sm:hidden md:block">
          Diksha Kunwar
        </p>
        <p className="flex mt-3 sm:text-right sm:ml-[180px]">
          © 2025 Diksha Kunwar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
