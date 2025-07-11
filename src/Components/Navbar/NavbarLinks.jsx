import React from "react";
const NavbarLinks = () => {
  return (
    <ul className="flex  gap-9 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:text-black sm:bg-white/50  backdrop-blur-lg lg:bg-black lg:text-whiteSmoke sm:w-[80%] py-1 ">
      <li className="group">
        About_Me <a href="about"></a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        Skills <a href="skills"></a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        Projects <a href="project"></a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
      <li className="group">
        Contact <a href="contact"></a>
        <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </li>
    </ul>
  );
};

export default NavbarLinks;
