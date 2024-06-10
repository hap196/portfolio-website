import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGallery = () => {
  const projects = [
    {
      title: "Folio Landing Page",
      description: "Simple website to introduce my startup.",
      techStack: ["React", "Tailwind", "HTML"],
      githubLink: "https://github.com/hap196/folio-landing-page",
      liveLink: "https://folio-ai-website.vercel.app/",
    },
    {
      title: "SneakIn",
      description:
        "AI model to predict StockX product prices using time series analysis and clustering algorithms.",
      techStack: ["Python", "React", "HTML", "CSS", "Scikit-learn", "Tensorflow"],
      githubLink: "https://github.com/hap196/aim-labs-2024",
      liveLink: "",
    },
    {
      title: "Flood Vulnerability Prediction",
      description:
        "An ML model to identify regions highly vulnerable to flooding based on geographic features.",
      techStack: ["Scikit-learn", "Tensorflow", "ArcGIS"],
      githubLink: "https://github.com/flood-prediction",
      liveLink: "../../public/flood-prediction.pdf",
    },
    {
      title: "Personal Website",
      description:
        "All about me!",
      techStack: ["React", "Tailwind", "HTML"],
      githubLink: "https://github.com/hap196/personal-website",
      liveLink: "https://hpan.dev",
    },
    {
      title: "Folio Full-Stack Website (Coming Soon!)",
      description:
        "Desktop version for the complementary Folio app.",
      techStack: [
        "React",
        "Express.js",
        "MongoDB",
        "Node.js",
        "Firebase",
        "Tailwind",
      ],
      githubLink: "https://github.com/hap196/folio-website",
      liveLink: "",
    },
  ];

  return (
    <div className="px-10 max-w-7xl">
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
