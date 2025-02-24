import Image from "next/image";

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const BenefitCard = ({ iconSrc, title, text, reverse }: BenefitCardProps) => {
  return (
    <div
      className={`flex justify-start gap-10 w-full ${
        reverse ? "flex-row-reverse text-right" : "flex-row text-left"
      }`}
    >
      <div className="flex-shrink-0">
        <Image src={iconSrc} alt={title} width={160} height={160} />
      </div>

      <div className="flex flex-col gap-2 max-w-xl ">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-secondary text-2xl leading-7 mt-4 max-w-xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
