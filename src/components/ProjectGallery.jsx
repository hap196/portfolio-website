import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Folio Landing Page",
      description:
        "Building a custom multisite compatible WordPress plugin to build,global search with Algolia.",
      techStack: ["React", "Tailwind", "HTML"],
      githubLink: "https://github.com/hap196/folio-landing-page",
      liveLink: "https://folio-ai-website.vercel.app/",
    },
    {
      title: "Flood Vulnerability Prediction",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      techStack: ["Scikit-learn", "Tensorflow", "ArcGIS"],
      githubLink: "https://github.com/flood-prediction",
      liveLink: "",
    },
    {
      title: "Personal Website",
      description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      techStack: ["React", "Tailwind", "HTML"],
      githubLink: "https://github.com/hap196/personal-website",
      liveLink: "https://hpan.dev",
    },
    {
      title: "Folio Full-Stack Website (Coming Soon!)",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      techStack: ["React", "Express.js", "MongoDB", "Node.js", "Firebase", "Tailwind"],
      githubLink: "https://github.com/hap196/folio-website",
      liveLink: "",
    },
    {
      title: "StockX Price Predictor (Coming Soon!)",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      techStack: ["Python", "Scikit-learn", "Tensorflow"],
      githubLink: "https://github.com/hap196/aim-labs-2024",
      liveLink: "",
    },
  ];

  return (
    <div className="px-10 max-w-7xl mx-auto">
      <h2 className="text-white dark:text-off-white text-center text-4xl font-bold mb-12">
        Other Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
