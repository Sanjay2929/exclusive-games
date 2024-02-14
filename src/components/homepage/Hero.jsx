import React from "react";
import CommonButton from "../common/CommonButton";

const Hero = () => {
  return (
    <div className="bg-hero-console bg-cover bg-bottom">
      <div className="min-h-screen px-3 xl:px-0 container flex justify-center items-center flex-col mx-auto py-28">
        <h1 className="font-normal font-anton !leading-[120%] uppercase text-5xl sm:text-6xl lg:text-[72px] text-white max-w-[505px] text-center">
          Exclusive Games.
          <span className="min-[375px]:block"> Pasión por ganar</span>
        </h1>
        <p className="font-medium sm:text-base text-sm text-white max-w-[727px] text-center opacity-80 pt-4 pb-10">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        <CommonButton
          title="Empezar"
          style="!text-darkBlack !bg-greenLinearGradient !border-none after:!bg-[url('/assets/common/button-green-haft-border.svg')]"
        />
      </div>
    </div>
  );
};

export default Hero;
