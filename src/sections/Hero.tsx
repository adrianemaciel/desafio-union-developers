import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-24 min-h-[160vh] flex flex-col lg:flex-row items-center justify-center lg:justify-around bg-background bg-[url('/hero-desktop.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-xl text-left">
        <h1 className="text-primary text-5xl font-bold leading-tight">
          Ganhe{" "}
          <span className="bg-gradient-to-r to-gradient-to from-gradient-from bg-clip-text text-transparent">
            experiência
          </span>{" "}
          como desenvolvedor júnior
        </h1>
        <p className="text-secondary text-2xl mt-6 leading-relaxed">
          Descubra como o Union oferece um ambiente prático e imersivo para
          desenvolvedores juniores ganharem experiência de mercado, mesmo sem
          estar em uma empresa. Participe dessa experiência única e impulsione
          sua carreira como desenvolvedor!
        </p>
        <Link
          href="#inscricao"
          className="w-[372px] h-14 mt-8 flex items-center justify-center bg-gradient-to-r to-gradient-to from-gradient-from text-white text-xl font-bold rounded-md transition-transform hover:scale-105"
        >
          Quero participar
        </Link>
      </div>

      <div className="hidden lg:block">
        <Image
          src="/banner.png"
          alt="Union Developers Logo"
          width={500}
          height={529}
        />
      </div>
    </section>
  );
};

export default Hero;
