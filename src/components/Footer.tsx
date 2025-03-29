import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121119]">
      <div className="max-w-[1920px] max-auto p-10 px-4 flex items-center justify-around gap-8">
        <div>
          <div>
            <Image
              src="/logo.png"
              alt="Union Developers Logo"
              width={260}
              height={37}
            />
          </div>

          <div className="max-w-sm text-2xl mt-2">
            <p className=" text-secondary">
              O Union proporciona experiência para desenvolvedores juniores,
              transformando-os em profissionais preparados para o mercado.
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-20 text-lg">
          <div>
            <h2 className="text-secondary font-bold text-2xl">Saiba mais</h2>
            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:bg-gradient-to-r hover:from-gradient-from hover:to-gradient-to hover:bg-clip-text hover:text-transparent transition-all duration-100"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-gradient-to-r hover:from-gradient-from hover:to-gradient-to hover:bg-clip-text hover:text-transparent transition-all duration-100"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-secondary font-bold text-2xl">Dúvidas</h2>
            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:bg-gradient-to-r hover:from-gradient-from hover:to-gradient-to hover:bg-clip-text hover:text-transparent transition-all duration-100"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-gradient-to-r hover:from-gradient-from hover:to-gradient-to hover:bg-clip-text hover:text-transparent transition-all duration-100"
                >
                  Como funciona
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Link
            href="#"
            className="flex flex-col items-center hover:text-purple-400"
          >
            <Image
              src="/assets/icons/email.svg"
              alt="Email"
              width={24}
              height={24}
              className="group-hover:opacity-50 group-hover:grayscale transition-all duration-300"
            />
            <span className="mt-1 text-lg">Email</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center hover:text-purple-400"
          >
            <Image
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <span className="mt-1 text-lg">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center hover:text-purple-400"
          >
            <Image
              src="/assets/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            <span className="mt-1 text-lg">GitHub</span>
          </Link>
        </div>
      </div>

      <div className="text-center text-lg bg-background p-2">
        <p>© Union Developers - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
