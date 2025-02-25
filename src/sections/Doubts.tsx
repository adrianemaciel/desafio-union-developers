"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { doubts } from "../data/doubts";

const Doubts = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="max-w-[1920px] mx-auto lg:px-40 py-10">
      <div className="relative flex items-center justify-center">
        <div className="w-1/3 h-[4px] bg-gradient-to-r from-gradient-from to-gradient-to rounded-sm absolute left-0"></div>
        <div className="absolute -top-8">
          <h2 className=" text-5xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent px-5">
            Dúvidas
          </h2>
        </div>
        <div className="w-1/3 h-[4px] bg-[#0048fe] rounded-sm absolute right-0"></div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {doubts.map((item, index) => (
          <div
            key={index}
            className=" bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl"
          >
            <button
              className="w-full flex justify-between items-center px-7 py-8 text-secondary text-start font-bold text-3xl"
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
            </button>

            {openIndexes.includes(index) && (
              <div className="px-7 py-8 text-2xl text-[#282828] rounded-b-xl bg-[#fbfbfb] space-y-2">
                <p>{item.answer}</p>
                <p>{item.introduction}</p>
                <p>{item.details}</p>
                <p>{item.conclusion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doubts;
