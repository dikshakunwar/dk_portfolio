import React from "react";
import { Link } from "react-scroll";
const NavbarLogo = () => {
  return (
    <div className="font-body3 text-bold ">
      <h1 className="text-whiteSmoke text-3xl px-3 sm:hidden md:block">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-130}
          to="mainn"
          className="cursor-pointer text-white transition-all duration-500"
        >
          DIKSHA KUNWAR
        </Link>
      </h1>
      <h1 className="text-whiteSmoke px-4  text-3xl sm:block md:hidden">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-130}
          to="mainn"
          className="cursor-pointer text-white transition-all duration-500"
        >
          DK
        </Link>
      </h1>
    </div>
  );
};

export default NavbarLogo;
