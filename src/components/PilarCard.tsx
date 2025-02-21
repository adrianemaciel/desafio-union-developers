const PilarCard = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            text: "A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho.",
          },
        ].map((pilar, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-96 justify-center"
          >
            <div className="w-[380px] h-[128px] bg-gradient-to-r from-gradient-from to-gradient-to p-6  rounded-t-xl shadow-lg">
              <h3 className="text-4xl font-bold text-secondary">
                {pilar.title}
              </h3>
            </div>

            <div className="bg-primary p-6 min-h-[320px] flex items-center justify-center rounded-xl">
              <p className="text-secondary text-lg leading-7">{pilar.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PilarCard;
