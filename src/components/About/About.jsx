import React, { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContext'
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-12 lg:px-20 transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } flex justify-center md:justify-end`}
    >
      <div className="md:w-1/2 space-y-6 text-right">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-right mb-6">
          About <span className="text-pink-500">Me</span>
        </h2>

        <p className="text-lg text-justify leading-relaxed">
          I am a <strong>MERN Stack Developer</strong> with experience in building
          dynamic and scalable web applications. I specialize in{" "}
          <strong>React.js, Node.js, Express.js, and MongoDB</strong>, with a
          strong focus on creating responsive and user-friendly interfaces using{" "}
          <strong>Tailwind CSS</strong>.
        </p>

        <p className="text-lg text-justify mt-4 leading-relaxed">
          Beyond full-stack development, I am proficient in{" "}
          <strong>Git version control</strong> and have experience in{" "}
          <strong>deploying applications</strong> to production environments. I
          enjoy optimizing web performance, implementing best practices, and
          continuously learning new technologies.
        </p>

        <div className="mt-8 text-center md:text-right">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
