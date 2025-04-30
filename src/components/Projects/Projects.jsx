import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { projects } from "../../utils/projects";
import { ThemeContext } from "../../Context/ThemeContext";

const CARD_HEIGHT = "450px";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [expandedDesc, setExpandedDesc] = useState({});
  const placeholderImage = "https://via.placeholder.com/300";

  const toggleExpand = (id) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="projects"
      className={`py-16 px-6 md:px-12 lg:px-20 transition-colors duration-300 ${
        !darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-center">
      <span
          className={`uppercase text-lg font-bold px-4 py-2 mb-15 rounded-md ${
            !darkMode ? "text-blue-300 bg-blue-900" : "text-blue-500 bg-blue-100"
          }`}       id="about"
        >
          My Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Here are some of My Projects
        </h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-4" />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 rounded-lg shadow-lg gap-8">
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <Tilt
            key={id}
            tiltMaxAngleX={0}
            tiltMaxAngleY={15}
            glareEnable={false}
            className="transition-transform"
          >
            <div
              className={`rounded-lg shadow-md transition-colors duration-300 flex flex-col justify-between ${
                !darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              style={{ height: CARD_HEIGHT }}
            >
              <img
                src={image || placeholderImage}
                alt={title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                <div className="text-sm flex-1 overflow-y-auto">
                  {expandedDesc[id] ? description : `${description.slice(0, 100)}...`}
                  {description.length > 50 && (
                    <button
                      onClick={() => toggleExpand(id)}
                      className={`block mt-1 text-sm font-medium underline ${
                        !darkMode ? "text-blue-300" : "text-blue-500"
                      }`}
                    >
                      {expandedDesc[id] ? "View Less" : "View More"}
                    </button>
                  )}
                </div>

                <div className="mt-3">
                  <strong className="block mb-2">Stack:</strong>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          !darkMode
                            ? "bg-gray-600 text-gray-200"
                            : "bg-gray-200 text-gray-900"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm cursor-pointer"
                    onClick={() => window.open(visit, "_blank")}
                  >
                    Visit
                  </button>
                  <button
                    className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition text-sm cursor-pointer"
                    onClick={() => window.open(source, "_blank")}
                  >
                    <BsGithub size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
