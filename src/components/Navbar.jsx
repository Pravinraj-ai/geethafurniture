import React, { useState } from "react";
import { Link, scroller } from "react-scroll"; // 👈 import scroller
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = ({ onNavigateToHome }) => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Categories", route: "categories" },
    { name: "Contact", route: "contact" },
  ];

  const handleLinkClick = (section) => {
    // Step 1: Ensure we return to home view if not already there
    if (onNavigateToHome) onNavigateToHome();

    // Step 2: Delay scroll a bit so sections mount first
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -80,
        duration: 1000,
      });
    }, 200);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/20 shadow-md md:px-8 px-1">
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className="text-xl font-medium text-decoration-none whitespace-nowrap text-black"
            >
              Geetha Furniture
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li
                  key={el.name}
                  className="cursor-pointer block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                  onClick={() => handleLinkClick(el.route)}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <Hamburger toggled={toggle} toggle={setToggle} color="#000" />
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className="bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li
                  key={el.name}
                  className="hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  onClick={() => {
                    handleLinkClick(el.route);
                    setToggle(false);
                  }}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
