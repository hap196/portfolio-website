import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaSpotify, FaGoodreads } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex items-center space-x-6 mt-8">
      <a
        href="mailto:hpan27@mit.edu"
        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="w-5 h-5" />
      </a>

      <a
        href="https://linkedin.com/in/haileypan"
        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>

      <a
        href="https://github.com/hap196"
        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-5 h-5" />
      </a>

      <a
        href="https://open.spotify.com/user/hailey.pan"
        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify className="w-5 h-5" />
      </a>

      <a
        href="https://www.goodreads.com/user/show/146216783-hailey"
        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoodreads className="w-5 h-5" />
      </a>
    </div>
  );
}
