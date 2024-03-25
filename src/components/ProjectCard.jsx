import React from "react";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-light-blue-2 dark:bg-dark-blue text-white p-4 rounded-lg shadow-md w-full hover:-translate-y-3">
      <div className="flex justify-between items-center mb-4">
        <FaFolder className="text-brighter-coral dark:text-coral" size={32} />
        <div className="flex space-x-5 text-navy dark:text-light-blue">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-brighter-coral dark:hover:text-coral" size={28} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="hover:text-brighter-coral dark:hover:text-coral" size={28} />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-2xl mb-4 text-black dark:text-off-white">
        {title}
      </h3>
      <p className="text-lg mb-10 text-navy dark:text-light-blue">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 text-md font-semibold">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 dark:text-navy text-off-white bg-dark-blue dark:bg-light-blue rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
