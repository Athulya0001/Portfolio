import React, { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContext'
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux  } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-12 lg:px-20 transition-all ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        } flex justify-center md:justify-end`}
    >
      <div className="md:w-1/2 space-y-6 text-right">
        <button className={`${darkMode ? "bg-blue-400 text-blue-950" : "bg-gray-400 text-gray-800"} shadow-md font-semibold rounded-md px-3 py-1`}>
          ABOUT ME
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-right mb-6">Hello! My Name is <span className="text-pink-600">Athulya S</span></h1>

        <p className="text-lg text-justify leading-relaxed">
          I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in FrontEnd Development and improving full-stack development and am always eager to expand my skillset and take on new challenges.
        </p>

        <p className="text-lg text-justify mt-4 leading-relaxed">
          As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.
        </p>

        <div className="mt-8 text-center md:text-right">
          <h3 className={`${darkMode ? "bg-gray-600 text-gray-50":"bg-gray-100 text-gray-900"} text-lg mb-4 px-3`}>Some Stacks I know</h3>
          <div className="flex flex-wrap justify-center mt-4 gap-6">
            <div className="flex flex-col items-center">
               <FaJs className="text-yellow-500 text-4xl" />
               <span className="text-sm mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500 text-4xl" />
              <span className="text-sm mt-2">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500 text-4xl" />
              <span className="text-sm mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-gray-500 text-4xl" />
              <span className="text-sm mt-2">Express.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-600 text-4xl" />
              <span className="text-sm mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-blue-400 text-4xl" />
              <span className="text-sm mt-2">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-red-500 text-4xl" />
              <span className="text-sm mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <IoLogoCss3 className="text-blue-600 text-4xl" />
              <span className="text-sm mt-2">CSS</span>
            </div><div className="flex flex-col items-center">
              <IoLogoHtml5 className="text-orange-500 text-4xl" />
              <span className="text-sm mt-2">HTML</span>
            </div><div className="flex flex-col items-center">
              <SiRedux className="text-purple-500 text-4xl" />
              <span className="text-sm mt-2">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
