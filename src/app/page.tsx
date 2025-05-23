import "@/styles/globals.css";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Pilares from "@/sections/Pilares";
import Benefits from "@/sections/Benefits";
import Doubts from "@/sections/Doubts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1920px] mx-auto">
        <Hero />
        <About />
        <Pilares />
        <Benefits />
        <Doubts />
        <Footer />
      </main>
    </>
  );
}
