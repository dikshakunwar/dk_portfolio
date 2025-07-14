import React from "react";
const NavbarLinks = () => {
  return (
    <ul className="flex  gap-9 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:text-black sm:bg-MutedRose/10  backdrop-blur-lg lg:bg-black lg:text-whiteSmoke sm:w-[100%] py-1 ">
      <li className="group">
        <a
          href="about"
          className="cursor-pointer hover:text-2xl transition-all duration-500 "
        >
          About_Me
        </a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        <a
          href="skills"
          className="cursor-pointer hover:text-2xl transition-all duration-500 "
        >
          Skills{" "}
        </a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        <a
          href="project"
          className="cursor-pointer hover:text-2xl transition-all duration-500"
        >
          {" "}
          Projects{" "}
        </a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        <a
          href="contact"
          className="cursor-pointer hover:text-2xl transition-all duration-500"
        >
          Contact{" "}
        </a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
    </ul>
  );
};

export default NavbarLinks;
