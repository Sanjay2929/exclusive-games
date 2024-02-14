import Image from "next/image";
import React from "react";

const Jackpot = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pt-[180px] pt-24 flex lg:justify-between justify-center lg:flex-nowrap flex-wrap items-center lg:pb-[150px] pb-24">
        <Image
          data-aos="fade-right"
          className="xl:w-1/2 lg:w-[43%] md:w-3/4 w-full max-w-[531px] lg:max-w-[570px] lg:pe-3"
          width={558}
          height={439}
          src="/assets/jackpot/jackpot.webp"
          alt="jackpot"
        />
        <div
          className="max-w-[543px] lg:ml-5 pt-5 lg:pt-0"
          data-aos="fade-left"
        >
          <h2 className="font-anton font-normal lg:text-5xl sm:text-4xl text-[32px] text-white pb-4 lg:text-start text-center">
            Potenciando sus elecciones
          </h2>
          <h3 className="text-white pb-6 font-medium sm:text-base text-sm lg:text-start text-center opacity-80">
            Con Exclusive Game lo mejor está de tu lado.
          </h3>
          <ul className="pb-6 ps-6 jackpot_list lg:text-start text-center max-w-[420px] lg:max-w-[500px] mx-auto lg:ms-0">
            <li className="text-white pb-3 font-medium sm:text-base text-sm  opacity-80">
              Tecnología HTML5
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm  opacity-80">
              Versión PC y móvil
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm  opacity-80">
              Control de RTP (controlás qué porcentaje pagar)
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm  opacity-80">
              Bonos editables, happy hours, Jackpots, códigos promocionales.
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm  opacity-80">
              Aplicación para android y windows de regalo.
            </li>
          </ul>
          <p className="text-white font-medium sm:text-base text-sm  opacity-80">
            Te reintegramos todo lo invertido en fichas en la moneda que elijas.
          </p>
        </div>
      </div>
      <div className="top-0 left-0 -translate-x-2/3 -translate-y-2/3 green_shodow"></div>
    </div>
  );
};

export default Jackpot;
