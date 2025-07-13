import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tooggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="mt-3.5 pt-0 nav-w-[1200px] mb-0 mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-0 ">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-2 rounded-r-full  rounded-l-full border-[0.5px] border-RaisinBlack">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="py-2 flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-RaisinBlack">
        <button
          className="text-2xl p-3 rounded-full text-white"
          onClick={tooggleMenu}
        >
          <TfiMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
