import React from "react";
import NavbarLogo from "./NavbarLogo.jsx";
import NavbarLinks from "./NavbarLinks.jsx";
import NavbarBtn from "./NavbarBtn.jsx";
const NavbarMain = () => {
  return (
    <nav>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarBtn />
    </nav>
  );
};

export default NavbarMain;
