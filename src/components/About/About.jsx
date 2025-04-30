import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import DevImage from "../../assets/mern-stack-inner.png";
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
        <img
          src={DevImage}
          alt="Developer"
          className="w-3/4 md:w-2/3 object-contain"
        />
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
          I’m a MERN Stack Developer focused on building responsive and
          efficient web applications. With hands-on experience in React.js,
          Node.js, and MongoDB, I enjoy crafting clean code and user-friendly
          interfaces.
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
            href="https://drive.google.com/file/d/1DoKbRmq5IbEmVDWT83Ga91hrFYaFa8ET/view?usp=drivesdk"
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
