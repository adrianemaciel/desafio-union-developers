import PilarCard from "@/components/PilarCard";

const Pilares = () => {
  return (
    <section className="max-w-[1920px] mx-auto lg:px-40 text-center relative">
      <div className="relative mt-10 rounded-t-2xl bg-gradient-to-r from-gradient-from to-gradient-to p-1 ">
        <div>
          <div className="p-6 rounded-t-2xl transform translate-x-0 translate-y-1 bg-background">
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-background px-4 rounded-md">
              <h2 className="text-5xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                Pilares
              </h2>
            </div>
            <div className="p-6">
              <p className="text-secondary text-2xl leading-9">
                Os pilares que sustentam o formato inovador de aprendizado do
                Union é a junção de incríveis metodologias!
              </p>
            </div>
          </div>
        </div>
      </div>

      <PilarCard />
    </section>
  );
};

export default Pilares;
