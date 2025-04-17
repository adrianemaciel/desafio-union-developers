import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="lg:hidden md:flex">
      <button
        className=" text-secondary text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary shadow-md">
          <div className="flex flex-col items-start px-10 space-y-6 py-6 text-xl text-secondary font-bold ">
            <Link href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="#pilares" onClick={() => setMenuOpen(false)}>
              Pilares
            </Link>
            <Link href="#beneficios" onClick={() => setMenuOpen(false)}>
              Benefícios
            </Link>
            <Link href="#etapas" onClick={() => setMenuOpen(false)}>
              Etapas
            </Link>
            <Link href="#depoimentos" onClick={() => setMenuOpen(false)}>
              Depoimentos
            </Link>
            <Link href="#duvidas" onClick={() => setMenuOpen(false)}>
              Dúvidas
            </Link>
            <Link
              href="#inscricao"
              className="w-44 h-14 flex items-center justify-center text-xl rounded-md ease-in-out bg-gradient-to-r from-gradient-from to-gradient-to"
              onClick={() => setMenuOpen(false)}
            >
              <button>
                <span className="text-secondary font-bold tracking-wider">
                  Junte-se a nós
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
