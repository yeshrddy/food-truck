import React from "react";
import Logo from "../assets/main_logo.png";

const Header = () => {
  return (
    <header className=" absolute w-full z-50 py-6 mb-12 px-8">
      <nav className="  md:m-auto max-w-7xl flex justify-between items-start">
        <a href="" className=" hidden xl:block ">
          <img src={Logo} alt="" />
        </a>
        <button className="rounded-full px-3 py-2 ml-auto text-base font-semibold text-white border transition-all transform hover:scale-105 duration-300 ease-in-out">
          Get In Touch
        </button>
      </nav>
    </header>
  );
};

export default Header;
