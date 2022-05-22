import React from "react";
import {AiOutlineMenuFold} from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-[70px] bg-white px-[20px]">
      <div className="left text-2xl font-bold">Flooring Home</div>
      <nav className="hidden md:flex "></nav>
      <button className="menuBtn flex w-8 h-8  items-center justify-center md:hidden">
        <AiOutlineMenuFold className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
