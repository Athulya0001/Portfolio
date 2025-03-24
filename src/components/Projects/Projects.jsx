import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { projects } from "../../utils/projects";
import { ThemeContext } from "../../Context/ThemeContext";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const placeholderImage = "https://via.placeholder.com/300"; 

  return (
    <section
      id="projects"
      className={`py-16 px-6 md:px-12 lg:px-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="text-center">
        <span
          className={`uppercase font-semibold px-3 py-1 rounded-md transition-colors ${
            darkMode
              ? "text-blue-300 bg-blue-900"
              : "text-blue-500 bg-blue-100"
          }`}
        >
          My Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Here are some of My Projects
        </h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-4"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {projects?.map(({ id, image, title, description, tags, source, visit }) => (
          <div
            key={id}
            className={`shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 ${darkMode ? "bg-gray-600 text-white": "bg-gray-100 text-gray-800"}`}
          >
            <img
              src={image || placeholderImage}
              alt={title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p
                className={`mt-2 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {description}
              </p>

              <div className="mt-4">
                <strong className="block mb-2">Stack:</strong>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => window.open(visit, "_blank")}
                >
                  Visit
                </button>
                <button
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                  onClick={() => window.open(source, "_blank")}
                >
                  <BsGithub size={20} />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
