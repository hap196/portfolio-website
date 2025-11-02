import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({
  title,
  date,
  excerpt,
  slug,
}: BlogCardProps) {
  const [year, month, day] = date.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  const formattedDate = localDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="border border-[var(--color-border)] rounded-lg px-6 py-5 transition-all hover:border-[var(--color-accent)] hover:shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h2 className="text-xl font-light text-[var(--color-text-primary)] font-serif group-hover:text-[var(--color-accent)] transition-colors">
            {title}
          </h2>
          <time className="text-sm text-[var(--color-text-secondary)] font-serif whitespace-nowrap">
            {formattedDate}
          </time>
        </div>
        <p className="text-[var(--color-text-secondary)] font-serif leading-relaxed">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
