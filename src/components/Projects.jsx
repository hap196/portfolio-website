import React from "react";
import Folio from "./FolioApp";
import AtlasUROP from "./AtlasUROP";
import AntibodyUROP from "./AntibodyUROP";
import ProjectGallery from "./ProjectGallery";

const Projects = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-300 flex flex-col items-center justify-center bg-lighter-blue dark:bg-navy py-20 lg:py-32" id="projects">
      <div className="text-center w-full">
        <h2 className="text-white text-3xl font-bold mb-12 text-navy dark:text-off-white">Projects</h2>
        <div className="mb-36 px-4">
          <Folio />
        </div>
        <div className="mb-36 px-4">
          <AtlasUROP />
        </div>
        <div className="mb-36 px-4">
          <AntibodyUROP />
        </div>
        <div className="px-10 flex justify-center">
          <ProjectGallery />
        </div>
      </div>
    </div>
  );
};

export default Projects;
