import { useContext } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";

const educationData = [
  // {
  //   degree: "Web Development Course (MERN Stack)",
  //   duration: "2024 (6 Months)",
  //   institution: "Training Institute",
  //   description:
  //     "Completed a 6-month intensive web development course focused on the MERN stack (MongoDB, Express.js, React.js, Node.js). Gained hands-on experience in building full-stack applications, version control with Git & GitHub, and modern UI with Tailwind CSS.",
  // },
  {
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "2020 - 2024",
    institution: "APJ Abdul Kalam Technological University, Kerala",
    description:
      "Graduated in ECE with an interest in software and web technologies. Contributed to academic projects and participated in technical events that sparked a shift toward web development.",
  },
  {
    degree: "Higher Secondary Education (Biology Science)",
    duration: "2018 - 2020",
    institution: "XYZ Higher Secondary School",
    description:
      "Studied core science subjects including Biology, Physics, and Chemistry. Developed curiosity and adaptability that later helped in transitioning to tech.",
  },
];

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 text-center ${
        !darkMode ? "text-gray-100" : "text-gray-900"
      }`}
      id="education"
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
          My Education
        </span>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-4/5 lg:w-1/2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`mt-4 p-4 shadow-md rounded-lg border-l-4 relative ${
                !darkMode
                  ? "bg-gray-900 border-pink-400"
                  : "bg-gray-100 border-pink-500"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute top-4 left-[-10px] bg-pink-500 text-white p-2 rounded-full">
                <FaGraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p className="text-sm font-semibold">{edu.duration}</p>
              <p className="text-sm font-semibold">{edu.institution}</p>
              <p className="text-sm mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
