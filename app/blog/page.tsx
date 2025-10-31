import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { getAllPosts } from "./lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Random thoughts and reflections.",
  keywords: ["Hailey Pan", "Hailey Pan MIT", "Hailey Pan blog"],
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 flex flex-col">
      <div className="max-w-3xl container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] font-serif mb-12 text-center md:text-left">
          Blog
        </h1>

        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))
          ) : (
            <p className="text-lg text-[var(--color-text-primary)] font-serif">
              coming soon...
            </p>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
