import Socials from "./components/Socials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 flex flex-col">
      <div className="max-w-3xl px-10 container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-4xl font-light text-[var(--color-text-primary)] font-serif"></h1>
        <p className="text-lg text-[var(--color-text-secondary)] font-serif">
          Hi! I'm an undergraduate computer science student at MIT. I'm excited
          about building and shipping software that solves real problems people
          face. At the same time, I greatly enjoy{" "}
          <a
            href="https://www.mitappdev.com/"
            className="text-[var(--color-text-primary)] underline decoration-dashed underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            building communities
          </a>{" "}
          and creating spaces where people can connect and collaborate
          meaningfully.
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] font-serif mt-8">
          Previously, I worked on AI agents at Apple and frontend infrastructure
          at TikTok. Beyond software engineering, I'm interested in the
          applications of AI and explored this through computational biology
          research at the{" "}
          <a
            href="https://www.deboramarkslab.com/"
            className="text-[var(--color-text-primary)] underline decoration-dashed underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marks Lab
          </a>
          .
        </p>
        <p className="text-lg text-[var(--color-text-secondary)] font-serif mt-8">
          In my free time, I enjoy reading, writing, and taking photos on my
          camera. I also love hackathons (both competing and{" "}
          <a
            href="https://hackmit.org/"
            className="text-[var(--color-text-primary)] underline decoration-dashed underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            organizing
          </a>
          )!
        </p>
        <Socials />
      </div>
      <Footer />
    </main>
  );
}
