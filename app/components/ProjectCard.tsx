import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  github,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-[var(--color-border)]/40 rounded-lg overflow-hidden max-w-md">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-[var(--color-border)]/60 flex items-center justify-center">
          <span className="text-sm text-[var(--color-text-secondary)] font-serif">
            coming soon...
          </span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-medium text-[var(--color-text-primary)] font-serif">
            {link ? (
              <a
                href={link}
                className="hover:underline decoration-dashed underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {github && (
            <a
              href={github}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-[var(--color-text-secondary)] font-serif leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
