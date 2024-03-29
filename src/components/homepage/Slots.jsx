import Image from "next/image";
import React from "react";
import { SlotsGames } from "../common/Helper";
import CustomButton from "../common/CustomButton";

const Slots = () => {
  return (
    <div id="hogar" className="relative z-10">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pt-[70px] pt-12 lg:pb-[150px] pb-24">
        <h2 className="font-anton font-normal lg:text-5xl sm:text-4xl text-[32px] text-darkBlack text-center pb-4">
          Slots
        </h2>
        <p className="max-w-[904px] mx-auto text-center font-medium text-sm lg:text-base opacity-80 text-darkBlack pb-[60px]">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
        <div className="flex justify-between flex-wrap gap-y-6 pb-10">
          {SlotsGames.map((value, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={value.delay}
                key={index}
                className="md:w-[calc(33.3%_-_16px)] w-[calc(50%_-_12px)] max-[480px]:w-full relative rounded-lg overflow-hidden group border-transparent border hover:border-lightGreen"
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
        <div className="flex justify-center">
          <CustomButton
            title="Empezar"
            style="!text-darkBlack !bg-greenLinearGradient !border-none after:!bg-green-button-line"
          />
        </div>
      </div>
    </div>
  );
};

export default Slots;
