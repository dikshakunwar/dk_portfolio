import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const NavbarBtn = () => {
  return (
    <button className="text-whiteSmoke px-4 md:py-2.5 sm:py-4 text-xl rounded-full font-bold font-body2 flex items-center gap-1 bg-MutedRose hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      <a href="mailto:dikshakunwar02@gmail.com">
        <div className="sm:hidden md:block">Hire me</div>
      </a>
      <a href="mailto:dikshakunwar02@gmail.com">
        <MdOutlineMailOutline />
      </a>
    </button>
  );
};

export default NavbarBtn;
