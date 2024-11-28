import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-4 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-full max-w-[250px] lg:max-w-full object-cover"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4 lg:pl-8"
            >
              <h3 className="mb-2 font-semibold text-xl md:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-stone-900 p-2 text-xs md:text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center">
                {project.link && (
                  <div className="mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 rounded bg-white px-4 py-2 text-xs md:text-sm font-medium text-black hover:underline"
                    >
                      Visit Project
                    </a>
                  </div>
                )}
                {project.github && (
                  <div className="mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-white hover:text-gray-600"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
