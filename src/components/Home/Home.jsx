import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`w-full mx-auto py-20 px-6 md:flex md:items-center md:justify-between ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to my <span className="text-pink-500">Portfolio!</span>
        </h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          I am a MERN Stack Developer with experience in building dynamic and
          responsive web applications. I am skilled in React.js, Node.js,
          Express.js, MongoDB, and Tailwind CSS. I also have experience with Git
          version control and deploying applications. I enjoy creating clean,
          efficient, and user-friendly interfaces.
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600"
          >
            Hire me
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-full ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="flex space-x-4 mt-6 md:mt-0">
        <a
          href="https://github.com/Athulya0001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/athulyas02"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;