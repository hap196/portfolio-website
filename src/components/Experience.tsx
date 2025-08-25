import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

interface ExperienceItem {
  company: string;
  role: string;
  logoPath: string;
  timeline: string;
  location: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    0
  );
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(
    null
  );

  const allExperiences: ExperienceItem[] = [
    {
      company: "Apple",
      role: "Software Engineer Intern",
      logoPath: "/experience/apple-logo.svg",
      timeline: "May 2025",
      location: "Austin, TX",
      description: [
        "Deployed an end-to-end solution for automating business intelligence for 10+ teams, already in active use",
      ],
      skills: ["Python", "LangChain", "AWS", "Snowflake", "FastAPI"],
    },
    {
      company: "MITRE",
      role: "Software Engineer Intern",
      logoPath: "/experience/mitre-logo.png",
      timeline: "May 2024",
      location: "Mclean, VA",
      description: [
        "Shipped features for a full-stack MERN web app serving 10k+ Air Force personnel",
      ],
      skills: [
        "JavaScript",
        "React.js",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    {
      company: "MIT Media Lab",
      role: "Software Developer Intern",
      logoPath: "/experience/media-lab-logo.png",
      timeline: "Feb 2024",
      location: "Cambridge, MA",
      description: [
        "Worked on a Python platform for supply chain management, helping save over $10k annually in procurement costs",
      ],
      skills: ["Python", "Dash", "Firebase"],
    },
    {
      company: "AppDev @ MIT",
      role: "Founder and Co-President",
      logoPath: "/experience/appdev-logo.svg",
      timeline: "June 2024",
      location: "Cambridge, MA",
      description: [
        "Founded MIT's mobile and web development club with 50+ members",
      ],
      skills: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "AWS",
      ],
    },
    {
      company: "AI @ MIT",
      role: "Co-President of Labs",
      logoPath: "/experience/aim-logo.svg",
      timeline: "May 2024",
      location: "Cambridge, MA",
      description: [
        "Co-led project accelerator for MIT's largest undergraduate AI club",
      ],
      skills: ["Python", "PyTorch", "TensorFlow"],
    },
    {
      company: "Harvard Medical School",
      role: "Undergraduate Researcher",
      logoPath: "/experience/harvard-medical-school-logo.png",
      timeline: "Aug 2023",
      location: "Boston, MA",
      description: [
        "Conducted research under Professor Debora Marks, developing machine learning models and algorithms to predict antibody-antigen interactions",
      ],
      skills: ["Python", "BioPython", "PyTorch", "PyMOL"],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-16">
      <div className="w-full max-w-[74rem] flex flex-col">
        <div className="mb-16 text-left">
          <div className="pointer-events-none flex flex-col items-start">
            <h1 className="font-playfair text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              EXPERIENCE
            </h1>
            <h1 className="font-playfair text-5xl lg:text-6xl text-text-dark whitespace-nowrap">
              EXPERIENCE
            </h1>
            <h1 className="font-playfair text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              EXPERIENCE
            </h1>
          </div>
        </div>

        <div className="flex items-start gap-42 z-10">
          <div className="w-128 flex items-center justify-center min-h-[600px]">
            {selectedExperience !== null && (
              <div className="w-full">
                <h4 className="font-playfair text-3xl text-text-dark mb-6">
                  {allExperiences[selectedExperience].company}
                </h4>
                <div className="font-inter text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                  {allExperiences[selectedExperience].description.map(
                    (desc, index) => (
                      <p key={index}>{desc}</p>
                    )
                  )}
                </div>
                <div className="font-inter text-lg text-gray-700 leading-relaxed">
                  <h5 className="font-playfair text-xl text-text-dark mb-4">
                    Skills
                  </h5>
                  <ul className="space-y-2">
                    {allExperiences[selectedExperience].skills.map(
                      (skill, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-text-dark mt-1">◆</span>
                          <span>{skill}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="w-160">
            <Timeline
              position="right"
              sx={{
                padding: 0,
                [`& .MuiTimelineItem-root::before`]: {
                  content: "none",
                },
                [`& .MuiTimelineOppositeContent-root`]: {
                  flex: 0.2,
                },
              }}
            >
              {allExperiences.map((exp, index) => {
                const isSelected = selectedExperience === index;
                const isHovered = hoveredExperience === index;
                const shouldGlow = isSelected || isHovered;

                return (
                  <TimelineItem
                    key={index}
                    sx={{ minHeight: "90px", cursor: "pointer" }}
                    onMouseEnter={() => setHoveredExperience(index)}
                    onMouseLeave={() => setHoveredExperience(null)}
                    onClick={() => setSelectedExperience(index)}
                  >
                    <TimelineOppositeContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        fontFamily: "Playfair Display",
                        fontSize: "1.125rem",
                        color: "#1a1a1a",
                        paddingRight: "2rem",
                        minWidth: "120px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.timeline}
                    </TimelineOppositeContent>
                    <TimelineSeparator
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TimelineConnector
                        sx={{ backgroundColor: "#9ca3af", flex: "1 1 auto" }}
                      />
                      <TimelineDot
                        sx={{
                          backgroundColor: "transparent",
                          border: shouldGlow
                            ? "2px solid rgb(254, 240, 138)"
                            : "none",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 0,
                          boxShadow: shouldGlow
                            ? "0 0 20px rgba(254, 240, 138, 1), 0 0 40px rgba(254, 240, 138, 0.7)"
                            : "none",
                          fontSize: "1.5rem",
                          color: shouldGlow ? "rgb(254, 240, 138)" : "#1a1a1a",
                          margin: 0,
                          flex: "0 0 auto",
                          transition: "all 0.3s ease",
                        }}
                      >
                        ✦
                      </TimelineDot>
                      <TimelineConnector
                        sx={{ backgroundColor: "#9ca3af", flex: "1 1 auto" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        py: "12px",
                        paddingLeft: "2rem",
                        paddingRight: 0,
                      }}
                    >
                      <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-1 shadow-2xl border border-gray-800">
                          <div className="bg-yellow-50 p-2 border border-gray-700 flex items-center justify-center">
                            <img
                              src={exp.logoPath}
                              alt={exp.company}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                        </div>
                        <div className="text-left">
                          <h3 className="font-playfair text-2xl text-text-dark tracking-wide">
                            {exp.company}
                          </h3>
                          <p className="font-inter text-lg text-gray-600 mt-1">
                            {exp.role}
                          </p>
                          <p className="font-inter text-sm text-gray-500 mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
