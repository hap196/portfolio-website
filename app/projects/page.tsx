import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "./projects.json";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 flex flex-col">
      <div className="max-w-3xl px-10 container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-4xl font-light text-[var(--color-text-primary)] font-serif mb-12">
          Projects
        </h1>

        <h2 className="text-2xl font-light text-[var(--color-text-primary)] font-serif mb-8">
          Ongoing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectsData.ongoing.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>

        <h2 className="text-2xl font-light text-[var(--color-text-primary)] font-serif mb-8">
          Previous
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.previous.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
