import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FolioLandingImage from "../assets/foliolandingpage.png";

const AtlasUROP = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center mx-auto px-10"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-full flex flex-col items-center justify-center mb-10 lg:w-auto lg:items-start lg:mb-3 lg:absolute left-1/2 transform translate-x-0 md:left-auto lg:pr-72 z-10">
        <h3 className="text-left font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
          Featured Project
        </h3>
        <h3 className="text-left font-bold text-3xl text-black dark:text-off-white pb-2">
          Atlas
        </h3>
        <div className="p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black bg-light-blue-2 dark:bg-dark-blue">
          <p className="text-lg lg:text-left text-navy dark:text-light-blue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-wrap justify-start space-x-2 text-md font-semibold text-navy dark:text-light-blue">
          <span className="pr-3 py-1">Python</span>
          <span className="px-3 py-1">Dash</span>
          <span className="px-3 py-1">Plotly</span>
          <span className="pl-3 py-1">Node.js</span>
        </div>
        <div className="flex space-x-5 text-xl justify-start mt-4 text-navy dark:text-light-blue">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://liveprojectlink.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <img
        src={FolioLandingImage}
        alt="Chat View"
        className="rounded-xl z-0 lg:ml-auto w-full"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default AtlasUROP;
