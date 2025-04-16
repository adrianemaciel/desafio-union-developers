const About = () => {
  return (
    <section className="max-w-[1920px] mx-auto md:px-10 lg:px-30 xl:px-40 relative z-10 xs:text-center md:text-left lg:text-left text-center">
      <div className="relative p-1 rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to">
        <div className="p-6 rounded-2xl bg-background">
          <div className="absolute -top-6 left-20 bg-background px-4 rounded-md">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Quem somos?
            </h2>
          </div>

          <div className="px-10 py-6 flex-1 flex-col gap-2">
            <p className="text-secondary sm:text-xl md:text-2xl lg:text-2xl tracking-wider">
              O Union é uma oportunidade única para desenvolvedores juniores,
              nossa missão é proporcionar a você um ambiente prático e imersivo,
              semelhante ao que você encontrará no mercado. Aqui, você vai
              vivenciar como é o dia a dia de um desenvolvedor de software,
              trabalhando lado a lado com líderes experientes e outros
              talentosos desenvolvedores que estão no mesmo caminho que você.
            </p>
            <p className="text-secondary sm:text-xl md:text-2xl lg:text-2xl mt-6 tracking-wider">
              No Union, você não apenas ganhará experiência, mas também estará
              pronto para enfrentar as demandas do mercado de tecnologia. Nossa
              abordagem holística enfatiza não apenas o conhecimento técnico,
              mas também habilidades interpessoais e práticas ágeis.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1 h-20 bg-gradient-to-b from-gradient-to to-transparent m-auto"></div>
    </section>
  );
};

export default About;
