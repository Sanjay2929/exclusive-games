import React from "react";
import CommonButton from "../common/CommonButton";
import Image from "next/image";

const Luxury = () => {
  return (
    <div className="container relative z-10 xl:max-w-[1140px] mx-auto px-3 xl:px-0 py-16">
      <div className="border-[.5px] border-white border-opacity-50 flex justify-center py-[46px] bg-luxury-gaming-console bg-cover bg-no-repeat rounded-2xl px-3">
        <div className="w-[419px] relative" data-aos="fade-up">
          <h2 className="font-anton font-normal md:text-[32px] text-2xl text-white pb-4 text-center">
            Luxury
          </h2>
          <p className="opacity-80 text-sm sm:text-base text-white font-medium pb-8 text-center">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          <h3 className="font-anton font-normal lg:text-5xl text-4xl text-white text-center">
            $9000
          </h3>
          <ul className="jackpot_list ps-6 pt-4 pb-10">
            <li className="text-white font-inter pb-3 font-medium text-sm sm:text-base opacity-80 text-center">
              Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
              manuales
            </li>
            <li className="text-white pb-3 font-medium text-sm sm:text-base opacity-80 text-center">
              Control de RTP (controlás qué porcentaje pagar)
            </li>
            <li className="text-white pb-3 font-medium text-sm sm:text-base opacity-80 text-center">
              Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales
              Regalo
            </li>
            <li className="text-white pb-3 font-medium text-sm sm:text-base opacity-80 text-center">
              Aplicación para Android y Windows de regalo.
            </li>
            <li className="text-white pb-3 font-medium text-sm sm:text-base opacity-80 text-center">
              Tiempo de creación 2 a 3 semanas
            </li>
          </ul>
          <div className="flex justify-center">
            <CommonButton
              title="Comprar ahora"
              style="!text-darkBlack !bg-greenLinearGradient !border-none after:!bg-[url('/assets/common/button-green-haft-border.svg')]"
            />
          </div>
          <Image
            className="absolute -left-[30px] bottom-[40px] max-w-[176px] -translate-x-full lg:block hidden"
            width={176}
            height={186}
            src="/assets/luxury/diamond-A-card.webp"
            alt="diamond card"
          />
          <Image
            className="absolute -left-[60px] top-[60px] max-w-[78px] -translate-x-full lg:block hidden"
            width={78}
            height={79}
            src="/assets/luxury/green-token.webp"
            alt="token"
          />
          <Image
            className="absolute -right-[88px] top-[55px] max-w-[149px] translate-x-full lg:block hidden"
            width={149}
            height={150}
            src="/assets/luxury/heart-A-card.webp"
            alt="card"
          />
          <Image
            className="absolute -right-[88px] bottom-[65px] max-w-[80px] translate-x-full h-auto lg:block hidden"
            width={80}
            height={84}
            src="/assets/luxury/ludo.webp"
            alt="card"
          />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
