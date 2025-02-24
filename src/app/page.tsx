import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Pilares from "@/sections/Pilares";
import Benefits from "@/sections/Benefits";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1920px] mx-auto">
        <Hero />
        <About />
        <Pilares />
        <Benefits />
      </main>
    </>
  );
}

