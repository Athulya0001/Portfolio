import React, { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContext'
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import DevImage from '../../assets/mern-stack-inner.png'
import { motion } from "framer-motion";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-0 transition-all ${darkMode ? "text-gray-100" : "text-gray-900"
        } flex flex-col md:flex-row justify-center gap-x-6 `}
    >
      <div className="flex justify-center items-center">
        <img src={DevImage} alt="Developer" className="w-25 h-25 md:w-2/3 md:h-1/2" />
      </div>

      <div className="md:w-1/2 space-y-6 text-right">
        <span
          className={`uppercase font-semibold px-3 py-1 rounded-md transition-colors ${darkMode
              ? "text-blue-300 bg-blue-900"
              : "text-blue-500 bg-blue-100"
            }`}
        >
          About Me
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-right mb-6">
          Hello! My Name is{" "}
          <div className="inline-block">
            <motion.span
              className="text-pink-600 inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Athulya S
            </motion.span>

            {/* Underline Animation */}
            <motion.div
              className="h-1 bg-pink-600 mt-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
          </div>
        </h1>;

        <p className="text-lg text-justify leading-relaxed">
          I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in FrontEnd Development and improving full-stack development and am always eager to expand my skillset and take on new challenges.
        </p>

        <p className="text-lg text-justify mt-4 leading-relaxed">
          As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.
        </p>

        <div className="mt-8 text-center md:text-right">
          <h3
            className={`${darkMode ? "bg-gray-600 text-gray-50" : "bg-gray-100 text-gray-900"
              } text-lg mb-4 px-3`}
          >
            Some Stacks I know
          </h3>

          <div className="flex flex-wrap justify-center mt-4 gap-6">
            {[
              { icon: <FaJs className="text-yellow-500 text-4xl" />, label: "JavaScript" },
              { icon: <FaReact className="text-blue-500 text-4xl" />, label: "React.js" },
              { icon: <FaNodeJs className="text-green-500 text-4xl" />, label: "Node.js" },
              { icon: <SiExpress className="text-gray-500 text-4xl" />, label: "Express.js" },
              { icon: <SiMongodb className="text-green-600 text-4xl" />, label: "MongoDB" },
              { icon: <SiTailwindcss className="text-blue-400 text-4xl" />, label: "Tailwind CSS" },
              { icon: <FaGitAlt className="text-red-500 text-4xl" />, label: "Git" },
              { icon: <IoLogoCss3 className="text-blue-600 text-4xl" />, label: "CSS" },
              { icon: <IoLogoHtml5 className="text-orange-500 text-4xl" />, label: "HTML" },
              { icon: <SiRedux className="text-purple-500 text-4xl" />, label: "Redux" },
            ].map((stack, index) => (
              <div key={index} className="flex flex-col items-center">
                {stack.icon}
                <span className="text-sm mt-2">{stack.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
