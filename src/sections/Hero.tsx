import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1920px] mx-auto h-screen flex items-center justify-center bg-background bg-[url('/hero-desktop.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="lg:flex flex-1 lg:flex-row items-center justify-center w-full max-w-6xl lg:gap-8">
        <div className="flex-1 max-w-xl text-left px-6 lg:px-0">
          <h1 className="text-primary text-4xl sm:text-5xl font-bold leading-tight">
            Ganhe{" "}
            <span className="bg-gradient-to-r to-gradient-to from-gradient-from bg-clip-text text-transparent">
              experiência
            </span>{" "}
            como desenvolvedor júnior
          </h1>
          <p className="text-secondary text-lg sm:text-2xl mt-6 leading-relaxed">
            Descubra como o Union oferece um ambiente prático e imersivo para
            desenvolvedores juniores ganharem experiência de mercado, mesmo sem
            estar em uma empresa. Participe dessa experiência única e impulsione
            sua carreira como desenvolvedor!
          </p>
          <div className="flex justify-start">
            <Link
              href="#inscricao"
              className="w-full sm:w-[372px] h-14 mt-8 flex items-center justify-center bg-gradient-to-r to-gradient-to from-gradient-from text-white text-lg sm:text-xl font-bold rounded-md transition-transform hover:scale-105"
            >
              Quero participar
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center">
          <Image
            src="/banner.png"
            alt="Union Developers Logo"
            width={500}
            height={529}
            className="object-cover animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
