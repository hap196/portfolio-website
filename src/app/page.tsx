import MeshGradientBackground from "@/components/MeshGradientBackground";
import Hero from "@/components/Hero";
import Roles from "@/components/Roles";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <MeshGradientBackground />

      <div className="absolute inset-0 z-5 glassmorphism"></div>

      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <Hero />
        <Roles />
      </main>
    </div>
  );
}
