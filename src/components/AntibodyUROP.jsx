import React from "react";
import MotifImage from "../assets/antibodymotif.png";
import { FaGithub } from "react-icons/fa";

const AntibodyUROP = () => {
  return (
    <div
      className="flex flex-col lg:flex-row relative items-center mx-auto px-10"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-full lg:absolute right-10 mb-10 md:pl-0 lg:pl-72 z-10">
        <div className="flex justify-center lg:justify-end">
          <div className="text-center lg:text-right">
            <h3 className="font-semibold text-lg pb-2 text-brighter-coral dark:text-coral">
              Featured Project
            </h3>
            <h3 className="font-bold text-3xl pb-2 text-black dark:text-off-white">
              Antibody Prediction
            </h3>
            <div className="bg-blue-900 p-4 my-3 max-w-lg rounded-md shadow-lg shadow-black bg-light-blue-2 dark:bg-dark-blue">
              <p className="text-lg text-navy dark:text-light-blue">
                An analysis of antibody-antigen interactions to identify common
                motifs to train an ML model. Given an antigen, the model
                predicts the corresponding antibody, a tool that can be used to
                design effective vaccines early in a pandemic. Motifs include
                structural traits and sequence data. Conducted
                under the{" "}
                <a href="https://www.deboramarkslab.com/" className="underline underline-offset-4 text-brighter-coral text-coral">Marks Lab</a>.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end space-x-2 mt-4 text-md font-semibold text-navy dark:text-light-blue">
              <span className="px-3 py-1">Python</span>
              {/* <span className="px-3 py-1">Numpy</span>
              <span className="pl-3 py-1">Pandas</span> */}
              <span className="pl-3 py-1">MatplotLib</span>
              <span className="pl-3 py-1">Jupyter Notebook</span>
            </div>
            <div className="flex justify-center lg:justify-end space-x-5 text-xl mt-4 text-navy dark:text-light-blue">
              <a
                href="https://github.com/hap196/antibody-motif-ml"
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
        </div>
      </div>
      <img
        src={MotifImage}
        alt="Antibody Motif"
        className="rounded-xl z-0 lg:mr-auto w-full"
        style={{ maxWidth: "70%", maxHeight: "800px", height: "auto" }}
      />
    </div>
  );
};

export default AntibodyUROP;
