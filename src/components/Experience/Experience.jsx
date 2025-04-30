import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";

const steps = [
  {
    title: "MERN Stack Developer Intern (On-site)",
    duration: "Oct 2024 - Present",
    companyName: "Synnefo Solutions",
    description:
      "Worked as a MERN stack developer Intern, using React.js, MongoDB, Node.js and Express.js. Also used Tailwind CSS, Bootstrap etc for css styling, worked with Redux Toolkit, also gained experience in Git and Github version control.",
  },
];

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 text-center ${
        !darkMode ? " text-gray-100" : " text-gray-900"
      }`}
      id="experience"
    >
      <div className="py-4">
        <span
          className={`uppercase text-lg font-bold px-4 py-2 mb-15 rounded-md ${
            !darkMode
              ? "text-blue-300 bg-blue-900"
              : "text-blue-500 bg-blue-100"
          }`}
          id="about"
        >
          My Experience
        </span>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-4/5 lg:w-1/2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`mt-4 p-4 shadow-md rounded-lg border-l-4 relative ${
                !darkMode
                  ? "bg-gray-900 border-pink-500"
                  : "bg-gray-100 border-pink-500"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute top-4 left-[-10px] bg-pink-500 text-white p-2 rounded-full">
                <FaCheckCircle size={20} />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm font-semibold">{step.duration}</p>
              <p className="text-sm font-semibold">{step.companyName}</p>
              <p className="text-sm mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
