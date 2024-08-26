import React, { useState, useEffect } from "react";
import Nav from "./Nav"; // Import the Nav component

const MobileNav = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [burgerColor, setBurgerColor] = useState("bg-black")

  useEffect(() => {
    setBurgerColor(theme === 'dark' ? "bg-white" : "bg-black" )
  }, [theme])
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block xl:hidden mr-4 ">
      <button
        className="group "
        onClick={toggleDropdown} // Toggle the dropdown when clicked
      >
        <div className="grid justify-items-center gap-1.5">
          {/* Top Bun */}
          <span
            className={`h-1 w-8 rounded-full ${burgerColor}  transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          {/* Meat Patty */}
          <span
            className={`h-1 w-8 rounded-full ${burgerColor} transition-transform duration-300 ${
              isOpen ? "scale-x-0" : ""
            }`}
          ></span>
          {/* Bottom Bun */}
          <span
            className={`h-1 w-8 rounded-full ${burgerColor} transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-2 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <Nav 
            containerStyles="flex flex-col p-2 space-y-2 "
            linkStyles="block px-4 py-2 text-gray-800 hover:bg-pink-200 rounded "
          />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
