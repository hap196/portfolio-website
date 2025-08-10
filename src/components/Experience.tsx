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
}

const Experience = () => {
  const allExperiences: ExperienceItem[] = [
    {
      company: "Apple",
      role: "Software Engineer Intern",
      logoPath: "/experience/apple-logo.svg",
      timeline: "May 2025",
      location: "Austin, TX",
    },
    {
      company: "MITRE",
      role: "Software Engineer Intern",
      logoPath: "/experience/mitre-logo.png",
      timeline: "May 2024",
      location: "Mclean, VA",
    },
    {
      company: "MIT Media Lab",
      role: "Software Developer Intern",
      logoPath: "/experience/media-lab-logo.png",
      timeline: "Feb 2024",
      location: "Cambridge, MA",
    },
    {
      company: "AppDev @ MIT",
      role: "Founder and Co-President",
      logoPath: "/experience/appdev-logo.svg",
      timeline: "June 2024",
      location: "Cambridge, MA",
    },
    {
      company: "AI @ MIT Labs",
      role: "Co-President",
      logoPath: "/experience/aim-logo.svg",
      timeline: "May 2024",
      location: "Cambridge, MA",
    },
    {
      company: "Harvard Medical School",
      role: "Undergraduate Researcher",
      logoPath: "/experience/harvard-medical-school-logo.png",
      timeline: "Aug 2023",
      location: "Boston, MA",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-16">
      <div className="w-full max-w-[74rem] flex flex-col">
        <div className="relative mb-16 text-left">
          <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none">
            <h1 className="font-playfair text-5xl lg:text-6xl font-normal text-white/20 tracking-wide transform -translate-y-8">
              EXPERIENCE
            </h1>
            <h1 className="font-playfair text-5xl lg:text-6xl font-normal text-white/20 tracking-wide transform translate-y-8">
              EXPERIENCE
            </h1>
          </div>
          <h1 className="font-playfair text-5xl lg:text-6xl text-text-dark relative z-10">
            EXPERIENCE
          </h1>
        </div>

        <div className="flex items-start gap-24 z-10">
          <div className="w-112"></div>
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
              {allExperiences.map((exp, index) => (
                <TimelineItem key={index} sx={{ minHeight: "90px" }}>
                  <TimelineOppositeContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      fontFamily: "Playfair Display",
                      fontSize: "1.125rem",
                      color: "#1a1a1a",
                      paddingRight: "2rem",
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
                        border: "none",
                        padding: 0,
                        boxShadow: "none",
                        fontSize: "1.5rem",
                        color: "#1a1a1a",
                        margin: 0,
                        flex: "0 0 auto",
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
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
