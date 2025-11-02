import Link from "next/link";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-28 flex flex-col">
      <div className="max-w-3xl container mx-auto px-8 py-12 flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] font-serif mb-4">
          404
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-serif mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-serif underline decoration-dashed underline-offset-4 transition-colors"
        >
          Go back home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
