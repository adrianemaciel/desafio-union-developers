const PilarCard = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          {
            title: "Ativa",
            text: "Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado.",
          },
          {
            title: "Andragogia",
            text: "É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem.",
          },
          {
            title: "Ágil",
            text: "A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora contínua entre os membros, os processos e a qualidade geral do trabalho.",
          },
        ].map((pilar, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-full justify-center"
          >
            <div className="w-full max-w-md h-30 bg-gradient-to-r from-gradient-from to-gradient-to p-6 rounded-t-xl shadow-lg flex items-center justify-center">
              <h3 className="text-3xl md:text-2xl font-bold text-secondary text-center">
                {pilar.title}
              </h3>
            </div>

            <div
              className="bg-primary p-6 w-full max-w-md flex-1 rounded-b-xl shadow-lg"
              style={{
                background:
                  "linear-gradient(225deg, rgba(0, 72, 254, 0.1) 0%, rgba(133, 29, 134, 0.1) 100%)",
              }}
            >
              <div className="h-full overflow-y-auto flex items-center justify-center">
                <p className="text-secondary text-base md:text-lg leading-relaxed text-center">
                  {pilar.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PilarCard;
