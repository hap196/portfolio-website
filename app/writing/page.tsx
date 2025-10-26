import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Hailey Pan, including random thoughts and reflections.",
  keywords: ["Hailey Pan", "Hailey Pan MIT", "Hailey Pan writing"],
};

export default function Writing() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 md:pt-28 flex flex-col">
      <div className="max-w-3xl px-10 container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] font-serif mb-12 text-center md:text-left">
          Writing
        </h1>

        <p className="text-lg text-[var(--color-text-primary)] font-serif">
          coming soon...
        </p>
      </div>
      <Footer />
    </main>
  );
}
