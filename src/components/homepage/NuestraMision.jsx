import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RightDirectionArrow } from "../common/Icons";

const NuestraMision = () => {
  return (
    <div id="mision" className="relative">
      <div className="container relative z-10 xl:max-w-[1140px] px-3 xl:px-0 mx-auto flex pt-[74px] lg:pb-[170px] pb-24 h-full sm:flex-row flex-col items-center md:gap-10 sm:gap-0 gap-10">
        <div className="flex flex-col sm:w-1/2 max-w-[500px] sm:max-w-[600px] lg:pe-5 sm:pe-4 h-full justify-between">
          <Image
            data-aos="fade-right"
            className="w-full"
            width={538}
            height={536}
            src="/assets/games/poker.webp"
            alt="poker-game"
          />
          <div className="sm:pt-[60px] py-8" data-aos="fade-right">
            <h2 className="text-white font-anton lg:text-5xl sm:text-4xl text-[32px] font-normal leading-tight pb-4">
              Nuestra Visión
            </h2>
            <p className="text-white font-medium sm:text-base text-sm max-w-[444px] pb-6 opacity-80">
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <Link
              href="/"
              className="text-lightGreen font-bold sm:text-base text-sm flex items-center gap-1.5 group"
            >
              Aprende más{" "}
              <span className="group-hover:translate-x-2 duration-300">
                <RightDirectionArrow />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-col-reverse flex-col sm:w-1/2 max-w-[500px] sm:max-w-[600px] lg:ps-5 sm:ps-4 h-full justify-between">
          <Image
            data-aos="fade-left"
            className="w-full"
            width={538}
            height={536}
            src="/assets/games/aviator.webp"
            alt="poker-game"
          />
          <div className="sm:pb-[60px] sm:pt-0 pt-8" data-aos="fade-left">
            <h2 className="text-white font-anton lg:text-5xl sm:text-4xl text-[32px] font-normal leading-tight pb-4">
              Nuestra Misión
            </h2>
            <p className="text-white font-medium sm:text-base text-sm max-w-[444px] pb-6 opacity-80">
              Nuestra misión es simple pero poderosa: proporcionarte la más
              amplia gama de soluciones de entretenimiento de alta calidad y
              rentabilidad. Estamos comprometidos a elevar tus expectativas y
              brindarte experiencias inigualables.
            </p>
            <Link
              href="/"
              className="text-lightGreen font-bold sm:text-base text-sm flex items-center gap-1.5 group"
            >
              Aprende más{" "}
              <span className="group-hover:translate-x-2 duration-300">
                <RightDirectionArrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="top-[125px] left-0 -translate-x-2/3 green_shodow"></div>
      <div className="bottom-0 right-0 green_shodow translate-x-2/3 translate-y-[80%]"></div>
    </div>
  );
};

export default NuestraMision;
