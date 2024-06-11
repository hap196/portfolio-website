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
      title: "Flood Vulnerability Prediction",
      description:
        "An ML model to identify regions highly vulnerable to flooding based on geographic features.",
      techStack: ["Scikit-learn", "Tensorflow", "ArcGIS"],
      githubLink: "https://github.com/hap196/flood-prediction",
      liveLink: "https://ieeexplore.ieee.org/abstract/document/10534980",
    },
    {
      title: "Antibody Structure Prediction",
      description: (
        <>
          An analysis of antibody-antigen interactions to identify common motifs to train an ML model. Conducted under the{" "}
          <a
            href="https://www.deboramarkslab.com/"
            className="underline underline-offset-4 text-brighter-coral text-coral"
          >
            Marks Lab
          </a>
          .
        </>
      ),
      techStack: ["Python", "Jupyter", "Matplotlib", "Numpy", "Pandas"],
      githubLink: "https://github.com/hap196/antibody-motif-ml",
      liveLink: "",
    },
    {
      title: "Personal Website",
      description: "ME!",
      techStack: ["React", "Tailwind", "HTML"],
      githubLink: "https://github.com/hap196/personal-website",
      liveLink: "https://hpan.dev",
    },
    {
      title: "Folio Full-Stack Website (Coming Soon!)",
      description: "Desktop version for the complementary Folio app.",
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
    <div className="px-10 max-w-5xl mx-auto">
      <h2 className="text-white dark:text-off-white text-center text-3xl font-bold mb-12">
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
