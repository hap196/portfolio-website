import Footer from "../components/Footer";

export default function Writing() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-40 md:pt-28 flex flex-col">
      <div className="max-w-3xl px-10 container mx-auto px-8 py-12 flex-grow">
        <h1 className="text-4xl font-light text-[var(--color-text-primary)] font-serif mb-12 text-center md:text-left">
          Writing
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] font-serif">
          coming soon...
        </p>
      </div>
      <Footer />
    </main>
  );
}
