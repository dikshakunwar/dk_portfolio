import React from "react";
import { GoArrowDownRight } from "react-icons/go";
const NavbarBtn = () => {
  return (
    <button className="text-whiteSmoke px-4 py-4 text-xl rounded-full font-bold flex items-center gap-1 bg-MutedRose hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      <div className="sm:hidden md:block">Hire me</div>
      <GoArrowDownRight />
    </button>
  );
};

export default NavbarBtn;
