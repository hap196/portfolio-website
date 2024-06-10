import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AtlasImage from "../assets/atlas.png";

const AtlasUROP = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center mx-auto px-10 max-w-5xl"
    >
      <div className="w-full flex flex-col items-center justify-center mb-10 lg:w-auto lg:items-start lg:mb-3 lg:absolute left-1/2 transform translate-x-0 md:left-auto lg:pr-72 z-10">
        <h3 className="text-left font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
          Featured Project
        </h3>
        <h3 className="text-left font-bold text-2xl text-black dark:text-off-white pb-2">
          Atlas
        </h3>
        <div className="p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black bg-light-blue-2 dark:bg-dark-blue">
          <p className="text-md lg:text-left text-navy dark:text-light-blue">
            A web application that visualizes supply chain data for the
            Orthotics & Prosthetics (O&P) sector, primarily in Sierra Leone.
            Donors leverage the app to track and manage inventory of prosthetics
            supplies distributed to ensure that Sierra Leone healthcare clinics'
            needs are met. Conducted under the{" "}
            <a href="https://www.media.mit.edu/projects/sierra-leone-prosthetics-orthotics/overview/" className="underline underline-offset-4 text-brighter-coral dark:text-coral">
              Media Lab
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap justify-start space-x-2 text-sm font-semibold text-navy dark:text-light-blue">
          <span className="pr-3 py-1">Python</span>
          <span className="px-3 py-1">Dash</span>
          <span className="px-3 py-1">Plotly</span>
          <span className="pl-3 py-1">Node.js</span>
        </div>
        <div className="flex space-x-5 text-xl justify-start mt-4 text-navy dark:text-light-blue">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-brighter-coral dark:hover:text-coral"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://liveprojectlink.com"
            target="_blank"
            className="hover:text-brighter-coral dark:hover:text-coral"
          >
            <FaExternalLinkAlt />
          </a> */}
        </div>
      </div>
      <img
        src={AtlasImage}
        alt="Chat View"
        className="rounded-xl z-0 lg:ml-auto w-full"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default AtlasUROP;
