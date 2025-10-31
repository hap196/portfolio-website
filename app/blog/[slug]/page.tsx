import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import { getPostBySlug, getAllPosts } from "../lib/posts";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 flex flex-col">
      <div className="max-w-3xl container mx-auto px-8 py-12 flex-grow">
        <Link
          href="/blog"
          className="inline-block mb-8 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors font-serif"
        >
          ← Back to blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] font-serif mb-4">
              {post.title}
            </h1>
            <time className="text-sm text-[var(--color-text-secondary)] font-serif">
              {formattedDate}
            </time>
          </header>

          <div
            className="prose max-w-none prose-headings:font-serif prose-headings:font-light prose-p:font-serif prose-li:font-serif"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </div>
      <Footer />
    </main>
  );
}
