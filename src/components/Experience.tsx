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
  description: string;
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
      description:
        "Deployed an end-to-end solution for automating business intelligence for 10+ teams, already in active use",
      skills: ["Python", "LangChain", "AWS", "Snowflake", "FastAPI"],
    },
    {
      company: "MITRE",
      role: "Software Engineer Intern",
      logoPath: "/experience/mitre-logo.png",
      timeline: "May 2024",
      location: "Mclean, VA",
      description:
        "Shipped features for a full-stack MERN web app serving 10k+ Air Force personnel",
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
      description:
        "Worked on a Python platform for supply chain management, helping save over $10k annually in procurement costs",
      skills: ["Python", "Dash", "Firebase"],
    },
    {
      company: "AppDev @ MIT",
      role: "Founder and Co-President",
      logoPath: "/experience/appdev-logo.svg",
      timeline: "June 2024",
      location: "Cambridge, MA",
      description:
        "Founded MIT's mobile and web development club with 50+ members",
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
      description:
        "Co-led project accelerator for MIT's largest undergraduate AI club",
      skills: ["Python", "PyTorch", "TensorFlow"],
    },
    {
      company: "Harvard Medical School",
      role: "Undergraduate Researcher",
      logoPath: "/experience/harvard-medical-school-logo.png",
      timeline: "Aug 2023",
      location: "Boston, MA",
      description:
        "Conducted research under Professor Debora Marks, developing machine learning models and algorithms to predict antibody-antigen interactions",
      skills: ["Python", "BioPython", "PyTorch", "PyMOL"],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-16">
      <div className="w-full max-w-[74rem] flex flex-col">
        <div className="mb-16 text-left">
          <div className="pointer-events-none flex flex-col items-start">
            <h1 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              EXPERIENCE
            </h1>
            <h1 className="text-5xl lg:text-6xl text-text-dark whitespace-nowrap">
              EXPERIENCE
            </h1>
            <h1 className="text-5xl lg:text-6xl font-normal text-white/20 tracking-wide whitespace-nowrap">
              EXPERIENCE
            </h1>
          </div>
        </div>

        <div className="flex items-start gap-42 z-10">
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
                const isPreviousToSelected =
                  selectedExperience !== null && index < selectedExperience;
                const shouldGlow = isSelected;
                const shouldBeYellow =
                  isSelected || isHovered || isPreviousToSelected;

                const isConnectedAbove =
                  selectedExperience !== null && index <= selectedExperience;
                const isConnectedBelow =
                  selectedExperience !== null && index < selectedExperience;

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
                        fontFamily:
                          "var(--font-poppins), system-ui, sans-serif",
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
                        sx={{
                          backgroundColor: isConnectedAbove
                            ? "rgb(254, 240, 138)"
                            : "#9ca3af",
                          flex: "1 1 auto",
                          transition: "all 0.4s ease",
                          boxShadow: isConnectedAbove
                            ? "0 0 8px rgba(254, 240, 138, 0.6)"
                            : "none",
                        }}
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
                          color: shouldBeYellow
                            ? "rgb(254, 240, 138)"
                            : "#1a1a1a",
                          margin: 0,
                          flex: "0 0 auto",
                          transition: "all 0.15s ease",
                        }}
                      >
                        ✦
                      </TimelineDot>
                      <TimelineConnector
                        sx={{
                          backgroundColor: isConnectedBelow
                            ? "rgb(254, 240, 138)"
                            : "#9ca3af",
                          flex: "1 1 auto",
                          transition: "all 0.4s ease",
                          boxShadow: isConnectedBelow
                            ? "0 0 8px rgba(254, 240, 138, 0.6)"
                            : "none",
                        }}
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
                        <div className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 shadow-lg flex items-center justify-center">
                          <img
                            src={exp.logoPath}
                            alt={exp.company}
                            className="w-12 h-12 object-contain rounded-xl"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="text-2xl text-text-dark tracking-wide">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-gray-600 mt-1">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
          <div className="w-128 flex items-start justify-center">
            <div
              className={`w-full h-[600px] backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-8 shadow-lg transition-all duration-[200ms] ease ${
                selectedExperience !== null ? "opacity-100" : "opacity-0"
              }`}
            >
              {selectedExperience !== null && (
                <div
                  key={selectedExperience}
                  className="opacity-0 animate-fade-in"
                                     style={{
                     animation: "fadeIn 200ms ease-in-out forwards",
                   }}
                >
                  <div className="mb-16">
                    <h4 className="text-4xl font-semibold text-text-dark mb-3 tracking-wide">
                      {allExperiences[selectedExperience].company}
                    </h4>
                    <h5 className="text-xl font-medium text-gray-600 mb-2">
                      {allExperiences[selectedExperience].role}
                    </h5>
                    <p className="text-lg text-gray-500 flex items-center gap-2">
                      {allExperiences[selectedExperience].location}
                    </p>
                  </div>

                  <div className="mb-16 flex-1">
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      <p className="text-base leading-relaxed">
                        {allExperiences[selectedExperience].description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h6 className="text-lg font-semibold text-text-dark mb-4 tracking-wide">
                      Technologies Used
                    </h6>
                    <div className="flex flex-wrap gap-3">
                      {allExperiences[selectedExperience].skills.map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-text-dark hover:bg-white/30 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
