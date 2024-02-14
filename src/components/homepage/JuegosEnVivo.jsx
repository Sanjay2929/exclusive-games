import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";
import { JuegosVivo } from "../common/Helper";

const JuegosEnVivo = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 xl:pb-[220px] lg:pb-[180px] pb-24">
        <h2 className="font-anton font-normal lg:text-5xl sm:text-4xl text-[32px] text-white text-center leading-[120%] lg:pb-[60px] pb-8">
          Juegos en vivo
        </h2>
        <div className="flex justify-center flex-wrap gap-6">
          {JuegosVivo.map((value, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={value.delay}
                key={index}
                className="md:w-[calc(33.3%_-_16px)] w-[calc(50%_-_12px)] max-[480px]:w-full relative rounded-lg overflow-hidden group hover:shadow-[7px_9px_15px_0px_#00000033]"
              >
                <Image
                  className="w-full"
                  width={364}
                  height={265}
                  src={value.image}
                  alt="jet-X"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[72%] opacity-0 group-hover:opacity-100 duration-300">
                  <CustomButton title={value.title} style="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="top-[50px] right-0 translate-x-2/3 green_shodow"></div>
    </div>
  );
};

export default JuegosEnVivo;
