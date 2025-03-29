"use client";

import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

const Header = () => {
  return (
    <header className="max-w-[1920px] mx-auto fixed top-0 left-0 w-full z-50 bg-primary sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-40">
      <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Union Developers Logo"
            width={300}
            height={60}
            className="w-auto h-10 md:h-8 lg:h-8 px-4"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-6 text-secondary text-lg font-bold">
          <nav className="flex items-center gap-6">
            <Link
              href="#sobre"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Sobre
            </Link>
            <Link
              href="#pilares"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Pilares
            </Link>
            <Link
              href="#beneficios"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Benefícios
            </Link>
            <Link
              href="#etapas"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Etapas
            </Link>
            <Link
              href="#depoimentos"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Depoimentos
            </Link>
            <Link
              href="#duvidas"
              className="hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
            >
              Dúvidas
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center ml-8">
          <Link
            href="#inscricao"
            className="flex items-center justify-center bg-gradient-to-r to-gradient-to from-gradient-from text-white text-xl font-bold rounded-md transition-transform hover:scale-105 px-8 py-3 whitespace-nowrap"
          >
            Junte-se a nós
          </Link>
        </div>

        <div className="lg:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
