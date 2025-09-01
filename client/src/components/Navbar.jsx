import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 h-20 items-center w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <div className="text-2xl font-bold tracking-wide">
          RentWise<span className="text-pink-400">.</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
            Features
          </li>
          <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button className="cursor-pointer">Sign In</Button>
          <Button className="cursor-pointer">Get Started</Button>
          <ModeToggle className="cursor-pointer" />
        </div>

       
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4 text-white space-y-4">
          <ul className="space-y-2 text-sm font-medium">
            <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
              Features
            </li>
            <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button className="cursor-pointer w-full">Sign In</Button>
            <Button className="cursor-pointer w-full">Get Started</Button>
            <ModeToggle className="cursor-pointer self-start" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
