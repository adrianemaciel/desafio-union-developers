import Header from "@/components/Header";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-background text-primary">
        <h1 className="bg-gradient-to-l from-gradient-from to-gradient-to text-3xl">Desafio Union Developers!</h1>
      </main>
    </>
  );
}
