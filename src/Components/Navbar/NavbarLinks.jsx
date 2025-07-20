import { Link } from "react-scroll";
import { IoMdCloseCircleOutline } from "react-icons/io";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Project", section: "project" },
  { link: "Achievement", section: "achievement" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ menuOpen, setMenuOpen }) => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-MutedRose/30  backdrop-blur-lg lg:bg-black sm:w-full py-4">
      <li className="absolute top-1 right-2 lg:hidden sm:block text-3xl text-black cursor-pointer">
        <button
          className="hover:scale-105 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdCloseCircleOutline />
        </button>
      </li>
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-white transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-MutedRose w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
