import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[1920px] mx-auto lg:h-screen md:py-8 flex justify-center bg-background bg-[url('/hero-desktop.jpg')] bg-cover bg-center bg-no-repeat mb-10">
      <div className="flex-1 lg:flex lg:flex-row items-center max-w-7xl md:p-4 lg:gap-8 lg:p-4">
        <div className="flex-1 text-left max-w-2xl px-4 mt-40">
          <h1 className="text-primary text-3xl sm:text-5xl font-bold tracking-wider">
            Ganhe{" "}
            <span className="bg-gradient-to-r to-gradient-to from-gradient-from bg-clip-text text-transparent">
              experiência
            </span>{" "}
            como desenvolvedor júnior
          </h1>
          <p className="text-secondary text-lg sm:text-2xl mt-6 tracking-wider">
            Descubra como o Union oferece um ambiente prático e imersivo para
            desenvolvedores juniores ganharem experiência de mercado, mesmo sem
            estar em uma empresa. Participe dessa experiência única e impulsione
            sua carreira como desenvolvedor!
          </p>
          <div className="flex justify-start">
            <Link
              href="#inscricao"
              className="w-full sm:w-[372px] h-14 mt-8 flex items-center justify-center bg-gradient-to-r to-gradient-to from-gradient-from text-white text-lg sm:text-2xl font-bold rounded-md transition-transform hover:scale-105 tracking-wider"
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
