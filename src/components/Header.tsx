"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full">
      <div className="max-w-[1920px] mx-auto h-28 px-40 flex justify-between items-center bg-primary ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Union Developers Logo"
            width={263}
            height={37}
          />
        </Link>

        <nav className="flex gap-6 text-secondary text-xl font-bold ">
          <Link
            href="#sobre"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Sobre
          </Link>
          <Link
            href="#pilares"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Pilares
          </Link>
          <Link
            href="#beneficios"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Benefícios
          </Link>
          <Link
            href="#etapas"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Etapas
          </Link>
          <Link
            href="#depoimentos"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Depoimentos
          </Link>
          <Link
            href="#duvidas"
            className=" hover:bg-gradient-to-r  to-gradient-to from-gradient-from hover:bg-clip-text hover:text-transparent ease-in-out "
          >
            Dúvidas
          </Link>
        </nav>

        <Link
          href="#inscricao"
          className=" inline-flex items-center justify-center w-72 h-14 text-white text-lg font-semibold rounded-md  ease-in-out bg-gradient-to-r from-gradient-from to-gradient-to shover:border-2"
        >
          <span className="relative z-10">Junte-se a nós</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
