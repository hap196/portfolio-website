import Footer from "../components/Footer";
import experiencesData from "./experiences.json";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 md:pt-28 flex flex-col">
      <div className="max-w-3xl px-10 container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] font-serif mb-12 text-center md:text-left">
          Experience
        </h1>

        <div>
          {experiencesData.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium text-[var(--color-text-primary)] font-serif">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-[var(--color-text-secondary)] font-serif">
                    {exp.timeline}
                  </span>
                </div>

                <h4 className="text-lg text-[var(--color-text-secondary)] font-serif mb-3">
                  {exp.role}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-[var(--color-border)] text-[var(--color-text-primary)] rounded-full font-serif"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
