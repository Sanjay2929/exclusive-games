import Image from "next/image";
import React from "react";
import CommonButton from "../common/CommonButton";

const NuestrasOfertas = () => {
  return (
    <div
      id="ofertas"
      className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0"
    >
      <h2 className="font-anton font-normal lg:text-5xl text-4xl text-center text-white pb-4">
        Nuestras ofertas
      </h2>
      <p className="text-center font-medium sm:text-base text-sm text-white lg:pb-[60px] pb-8">
        Te ofrecemos las mejores experiencias de juegos para tus clientes.
      </p>
      <div className="border-[.5px] border-white border-opacity-50 flex lg:flex-row flex-col items-center pt-[57px] pb-8 sm:pe-10 sm:ps-10 px-3 bg-greenTransparentGradient rounded-2xl">
        <div
          className="relative lg:w-[55%] sm:w-[80%] w-full"
          data-aos="fade-right"
        >
          <Image
            className="w-full object-contain relative z-10"
            width={574}
            height={471}
            src="/assets/nuestras-ofertas/casino-table-cards.webp"
            alt="casino-table"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[33px] bg-blackShadow bg-blend-multiply blur-sm"></div>
          <div className="top-10 left-0 green_shodow translate-x-1/2  !w-[162px] !h-[162px] !blur-[45px] !opacity-80"></div>
        </div>
        <div
          className="lg:w-[45%] xl:ps-14 lg:ps-6 flex flex-col justify-center items-center lg:items-start lg:pt-0 pt-6"
          data-aos="fade-left"
        >
          <h2 className="font-anton font-normal md:text-[32px] text-2xl text-white pb-4 lg:text-start text-center">
            Silver
          </h2>
          <p className="opacity-80 sm:text-base text-sm text-white font-medium pb-8 lg:text-start text-center max-w-[420px] lg:max-w-[500px]">
            Diseño predeterminado, atractivo y fácil de navegar, tecnología
            HTLM5.
          </p>
          <h3 className="font-anton font-normal lg:text-5xl text-4xl text-white lg:text-start text-center">
            $5000
          </h3>
          <ul className="jackpot_list ps-6 pt-4 pb-10 lg:text-start text-center max-w-[420px] lg:max-w-[500px]">
            <li className="text-white pb-3 font-medium sm:text-base text-sm opacity-80">
              Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
              manuales
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm opacity-80">
              Control de RTP (controlás qué porcentaje pagar)
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm opacity-80">
              Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales
              Regalo
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm opacity-80">
              Aplicación para Android y Windows de regalo.
            </li>
            <li className="text-white pb-3 font-medium sm:text-base text-sm opacity-80">
              Tiempo de creación 2 a 3 semanas
            </li>
          </ul>
          <CommonButton title="Comprar ahora" />
        </div>
      </div>
    </div>
  );
};

export default NuestrasOfertas;
