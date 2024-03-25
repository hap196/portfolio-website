import React from "react";
import FolioLandingImage from "../assets/foliolandingpage.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Folio = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative items-center lg:mx-auto px-10"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-full lg:absolute lg:right-10 lg:pl-72 z-10 mt-10 lg:mt-0">
        <div className="flex justify-center lg:justify-end">
          <div className="text-center lg:text-right">
            <h3 className="font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
              Featured Project
            </h3>
            <h3 className="font-bold text-3xl pb-2 text-black dark:text-off-white">
              Folio
            </h3>
            <div className="bg-light-blue-2 dark:bg-dark-blue p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black">
              <p className="text-lg text-navy dark:text-light-blue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end space-x-2 mt-4 text-md font-semibold text-navy dark:text-light-blue">
              <span className="px-3 py-1 text-blue-800">Swift</span>
              <span className="px-3 py-1 text-blue-800">Firebase</span>
              <span className="pl-3 py-1 text-blue-800">Node.js</span>
            </div>
            <div className="flex justify-center lg:justify-end space-x-5 text-xl mt-4 text-navy dark:text-light-blue">
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
        </div>
      </div>
      <img
        src={FolioLandingImage}
        alt="Folio Landing Page"
        className="rounded-xl z-0 w-full lg:mr-auto mt-10 lg:mt-0"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default Folio;
