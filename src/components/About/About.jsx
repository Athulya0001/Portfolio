import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import DevImage from "../../assets/mern-stack-inner.png";
import MyImage from "../../assets/profile.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-16 mt-10 px-6 md:px-10 transition-all ${
        !darkMode ? "text-gray-100 bg-gray-800" : "text-gray-900 bg-white"
      } flex flex-col md:flex-row items-center gap-10`}
    >
      <div className="flex justify-center md:w-1/2">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className={`p-1 md:p-1.5 rounded-full bg-gradient-to-tr ${darkMode
              ? "from-blue-500 via-blue-300 to-blue-500"
              : "from-blue-300 via-blue-100 to-blue-300"} shadow-2xl`}
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <img
              src={MyImage}
              alt="Developer"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full bg-pink-500"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="md:w-1/2 space-y-6">
        <span
          className={`uppercase text-lg font-bold px-4 py-2 mb-15 rounded-md ${
            !darkMode ? "text-blue-300 bg-blue-900" : "text-blue-500 bg-blue-100"
          }`}       id="about"
        >
          About Me
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Hello! My Name is{" "}
          <motion.span
            className="text-pink-600 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Athulya S
          </motion.span>
          <motion.div
            className="h-1 bg-pink-600 mt-1"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </h1>

        <p className="text-lg leading-relaxed text-justify">
          I’m working as a Technical Support Engineer, where I troubleshoot and resolve technical issues using HTML, CSS, and JavaScript, while supporting users and ensuring smooth application performance. Alongside this, I have hands-on experience as a MERN Stack Developer, building responsive and efficient web applications with React.js, Node.js, and MongoDB.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Passionate about continuous learning, I’m always exploring new tools
          and frameworks to stay up to date in this fast-evolving tech space.
        </p>

        <div className="mt-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 mr-4"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1qc3AtvwSXK6xWsWY-zCmmsRLJncSLW8t/view?usp=drive_link"
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

        <div className="flex items-center gap-4 mt-6">
          <span className="text-xl">Connect With Me:</span>
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
    </section>
  );
};

export default About;
