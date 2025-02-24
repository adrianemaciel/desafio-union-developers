import BenefitCard from "../components/BenefitCard";
import { benefits } from "../data/benefits";

const Benefits = () => {
  return (
    <section className="max-w-[1920px] mx-auto lg:px-40 text-center py-20">
      <div className="relative flex items-center justify-center">
        <div className="w-1/3 h-[4px] bg-gradient-to-r from-gradient-from to-gradient-to rounded-sm absolute left-0"></div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent px-5">
          Benefícios
        </h2>
        <div className="w-1/3 h-[4px] bg-[#0048fe] rounded-sm absolute right-0"></div>
      </div>

      <p className="text-secondary text-2xl max-w-3xl mx-auto mt-10">
        Conheça os benefícios incríveis que o Union proporciona para seus
        membros!
      </p>

      <div className="mt-20 flex flex-col gap-20">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            iconSrc={benefit.iconSrc}
            title={benefit.title}
            text={benefit.text}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
