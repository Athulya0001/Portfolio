import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const bgClass = darkMode ? "bg-gray-100 text-gray-800" : "bg-gray-950 text-white";
  const hoverClass = darkMode ? "hover:text-blue-600" : "hover:text-blue-300";

  return (
    <footer className={`relative z-10 ${bgClass} backdrop-blur-md py-10 px-4 md:px-20`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-pink-500">ATHULYA S</h1>
          <p className="text-sm mt-1">MERN Stack Developer</p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Athulyas0001"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition duration-300`}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/athulyas02"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverClass} transition duration-300`}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:athulyas336@gmail.com"
            className={`${hoverClass} transition duration-300`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Athulya S. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;