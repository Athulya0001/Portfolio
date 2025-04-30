import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { IconCloud } from "../3D/IconCloud";
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

const stackIcons = [
  { icon: <FaJs className="text-yellow-500 w-12 h-12" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-500 w-12 h-12" />, label: "React.js" },
  { icon: <FaNodeJs className="text-green-500 w-12 h-12" />, label: "Node.js" },
  { icon: <SiExpress className="text-gray-500 w-12 h-12" />, label: "Express" },
  {
    icon: <SiMongodb className="text-green-700 w-12 h-12" />,
    label: "MongoDB",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />,
    label: "Tailwind",
  },
  { icon: <FaGitAlt className="text-orange-600 w-12 h-12" />, label: "Git" },
  { icon: <IoLogoCss3 className="text-blue-600 w-12 h-12" />, label: "CSS3" },
  {
    icon: <IoLogoHtml5 className="text-orange-500 w-12 h-12" />,
    label: "HTML5",
  },
  { icon: <SiRedux className="text-purple-500 w-12 h-12" />, label: "Redux" },
];

const slugs = [
  "html5",
  "css3",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "mongodb",
  "tailwindcss",
  "redux",
  "git",
];
const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const bgClass = darkMode
    ? "bg-white/90 text-gray-900"
    : "bg-gray-900/90 text-white";
  const badgeClass = darkMode
    ? "text-blue-500 bg-blue-100"
    : "text-blue-300 bg-blue-900";

  const cloudClass =
    "absolute scale-[2] opacity-40 pointer-events-none z-0 hidden md:block";

  return (
    <section
      id="skills"
      className="relative py-20 px-4 md:px-16 overflow-hidden"
    >
      {/* Only Two IconClouds */}
      <div className={`${cloudClass} top-[15%] left-[5%]`}>
        <IconCloud images={images} />
      </div>
      <div className={`${cloudClass} bottom-[10%] right-[5%]`}>
        <IconCloud images={images} />
      </div>

      <div className="text-center mb-10">
        <span
          className={`uppercase text-lg font-bold px-4 py-2 mb-15 rounded-md ${
            !darkMode
              ? "text-blue-300 bg-blue-900"
              : "text-blue-500 bg-blue-100"
          }`}
          id="about"
        >
          My Skills
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          What I Bring to the Table
        </h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-3" />
      </div>

      <div className="relative opacity-85 z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "Web Design",
            desc: "Translating ideas into clean, engaging UI layouts is the first step I love.",
          },
          {
            title: "Web Development",
            desc: "Full Stack MERN Developer with hands-on experience building real-world apps.",
          },
          {
            title: "Problem Solving",
            desc: "Whether it's code or real life, solving challenges drives me every day.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 shadow-xl hover:scale-[1.03] transform transition-all duration-300 backdrop-blur-sm ${bgClass}`}
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-500">
              {card.title}
            </h3>
            <p className="leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="z-10 text-center">
        <h3 className="font-bold uppercase text-xl mb-6 tracking-wide text-blue-500 dark:text-blue-400">
          Tech I'm Familiar With
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {stackIcons.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition duration-300"
            >
              {icon}
              <span className="mt-2 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
