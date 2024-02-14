import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";

const CasinoNight = () => {
  return (
    <div id="elegirnos" className="relative z-10">
      <div className="absolute top-0 left-0 w-full h-full screw_bg bg-white z-0"></div>
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pt-[220px] pt-24 flex lg:justify-between justify-center lg:flex-nowrap flex-wrap-reverse items-center lg:pb-[150px] pb-24 relative z-10">
        <div
          className="max-w-[543px] lg:mr-5 pt-5 lg:pt-0"
          data-aos="fade-right"
        >
          <h2 className="font-anton font-normal lg:text-5xl sm:text-4xl text-3xl text-darkBlack pb-4">
            Por qué elegirnos
          </h2>

          <p className="text-darkBlack font-medium sm:text-base text-sm opacity-80 pb-6">
            Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
            todo lo invertido en fichas en la moneda que elijas. En Exclusive
            Games siempre sumamos nuevos juegos. Juegos crash, los juegos
            interactivos que más pide la gente. Con Exclusive Games empezás a
            ganar ya! Creamos tu plataforma en solo 2 semanas.
          </p>
          <CustomButton
            title="Aprende más"
            style="!text-darkBlack !bg-greenLinearGradient !border-none after:!bg-[url('/assets/common/button-green-haft-border.svg')]"
          />
        </div>
        <Image
          data-aos="fade-left"
          className="xl:w-1/2 lg:w-[43%] md:w-3/4 w-full max-w-[531px] lg:max-w-[570px] lg:ps-3"
          width={558}
          height={439}
          src="/assets/casino-night/casino-night.webp"
          alt="casino-night"
        />
      </div>
    </div>
  );
};

export default CasinoNight;
