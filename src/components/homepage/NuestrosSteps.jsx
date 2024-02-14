import Image from "next/image";
import React from "react";

const NuestrosSteps = () => {
  return (
    <div className="relative z-10">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pt-[120px] pt-20 lg:pb-20 pb-12">
        <h2 className="font-anton font-normal lg:text-5xl text-[36px] text-darkBlack text-center pb-[60px]">
          Nuestros Atributos de Marca
        </h2>
        <div className="flex md:justify-between justify-center items-start flex-wrap md:gap-0 gap-10 relative">
          <div
            className="flex justify-center items-center flex-col lg:max-w-[260px] max-w-[220px] md:w-1/3 sm:w-1/2 "
            data-aos="fade-up"
          >
            <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-extraLightGreen">
              <Image
                width={48}
                height={48}
                src="/assets/nuestros-steps/inteligencia.svg"
                alt="Inteligencia"
              />
            </div>
            <h3 className="font-anton font-normal text-xl text-darkBlack text-center pt-4">
              Inteligencia
            </h3>
            <p className="text-center pt-2.5 font-medium text-sm lg:text-base opacity-80 text-darkBlack">
              Comprendemos a la perfección los gustos de las personas y el mundo
              del gaming.
            </p>
          </div>
          <Image
            className="absolute top-0 left-1/4 xl:-translate-x-1/4 lg:-translate-x-[10%] xl:w-[273px] lg:w-[200px] w-[130px] md:block hidden "
            width={273}
            height={42}
            src="/assets/nuestros-steps/arrow-upward-curve.svg"
            alt="Inteligencia"
          />
          <Image
            className="absolute top-5 right-1/4 xl:translate-x-1/4 lg:translate-x-[20%] translate-y-full xl:w-[273px] lg:w-[200px] w-[130px] md:block hidden"
            width={273}
            height={42}
            src="/assets/nuestros-steps/arrow-downward-curve.svg"
            alt="Inteligencia"
          />
          <div
            className="flex justify-center items-center flex-col lg:max-w-[260px] max-w-[220px] md:w-1/3 sm:w-1/2"
            data-aos="fade-up"
          >
            <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-extraLightGreen">
              <Image
                width={48}
                height={48}
                src="/assets/nuestros-steps/proactividad.svg"
                alt="Inteligencia"
              />
            </div>
            <h3 className="font-anton font-normal text-xl text-darkBlack text-center pt-4">
              Proactividad
            </h3>
            <p className="text-center pt-2.5 font-medium text-sm lg:text-base opacity-80 text-darkBlack">
              Somos creadores de cambios que exploran nuevas formas de
              entretenimiento.
            </p>
          </div>
          <div
            className="flex justify-center items-center flex-col lg:max-w-[260px] max-w-[220px] md:w-1/3 w-full"
            data-aos="fade-up"
          >
            <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-extraLightGreen">
              <Image
                width={48}
                height={48}
                src="/assets/nuestros-steps/inteligencia.svg"
                alt="Inteligencia"
              />
            </div>
            <h3 className="font-anton font-normal text-xl text-darkBlack text-center pt-4">
              Innovación
            </h3>
            <p className="text-center pt-2.5 font-medium text-sm lg:text-base opacity-80 text-darkBlack">
              Pensamos fuera de la caja para estar siempre un paso adelante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosSteps;
