import { useState, useEffect, useRef } from "react";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
  image: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    new Array(4).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const allProjects: ProjectItem[] = [
    // {
    //   title: "Orbit",
    //   description:
    //     "A full-stack web platform that brings all your work tools into one place and automates workflows with AI agents.",
    //   tech: ["React.js", "Tailwind.css", "Fetch AI"],
    //   year: "2025",
    //   link: "https://orbit.ai",
    //   image: "/projects/orbit.png",
    // },
    {
      title: "MapIT",
      description:
        "A full-stack web app that helps MIT students navigate campus and find event locations.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      year: "2025",
      link: "https://mitmapit.org",
      image: "/projects/mapit.png",
    },
    {
      title: "MIT Clubs",
      description:
        "A full-stack web app that helps MIT students discover clubs and track recruitment deadlines.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      year: "2025",
      link: "https://mitclubs.com/",
      image: "/projects/mitclubs.jpg",
    },
    {
      title: "Y&Z Ventures",
      description:
        "Landing page for Y&Z Ventures, a Los Angeles-based fund that invests on behalf of professionals and private foundations.",
      tech: ["React.js", "Tailwind.css"],
      year: "2024",
      link: "https://www.yzventures.vc/",
      image: "/projects/yz-ventures.png",
    },
    {
      title: "Folio",
      description:
        "A full-stack iOS app that uses AI to help high school students build their portfolio for college applications.",
      tech: ["Swift", "Express.js", "Node.js", "Firebase"],
      year: "2023",
      link: "https://www.youtube.com/watch?v=nptzYukaxPo",
      image: "/projects/folio.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            allProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, (index + 1) * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[64rem] flex flex-col mx-auto">
        <div className="mb-8 md:mb-24 text-center md:text-right">
          <div className="pointer-events-none flex flex-col items-center lg:items-end">
            <h1 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              PROJECTS
            </h1>
            <h1 className="text-5xl lg:text-6xl font-normal text-text-dark tracking-wide whitespace-nowrap">
              PROJECTS
            </h1>
            <h1 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              PROJECTS
            </h1>
          </div>
        </div>

        <div
          ref={projectsRef}
          className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/50 cursor-pointer shadow-lg hover:shadow-xl"
              style={{
                opacity: visibleProjects[index] ? 1 : 0,
                animation: visibleProjects[index]
                  ? "slideUp 0.2s ease-out forwards"
                  : "none",
              }}
              onMouseEnter={(e) => {
                setHoveredProject(index);
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-sm text-gray-500">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl text-text-dark mb-4 tracking-wide">
                {project.title}
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-inter text-text-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
        {hoveredProject !== null && (
          <div
            className="fixed z-50 pointer-events-none transition-opacity duration-200 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg p-3 shadow-lg">
              <img
                src={allProjects[hoveredProject].image}
                alt={allProjects[hoveredProject].title}
                className="w-60 h-36 object-cover rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
