import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} p-4 ${darkMode ? "text-white" : "text-black"} w-full`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Athulya S
        </h1>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-gray-400">{link}</a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
          
          <button onClick={toggleMenu} className="md:hidden text-xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-gray-400" onClick={toggleMenu}>{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
