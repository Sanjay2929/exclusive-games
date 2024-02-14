import React from "react";
import CustomButton from "../common/CustomButton";
import Image from "next/image";

const Platinum = () => {
  return (
    <div className="relative">
      <div className="container relative z-10 xl:max-w-[1140px] mx-auto px-3 xl:px-0">
        <div className="border-[.5px] border-white border-opacity-50 flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse md:py-[78px] py-10 lg:ps-[50px] sm:pe-10 sm:ps-10 px-6 bg-greenTransparentGradient rounded-2xl">
          <div
            className="w-full max-w-[364px] flex pt-5 lg:pt-0 justify-start flex-col items-center lg:items-start"
            data-aos="fade-right"
          >
            <h2 className="font-anton font-normal md:text-[32px] text-2xl text-white pb-4 ">
              Platinum
            </h2>
            <p className="opacity-80 sm:text-base text-sm text-white lg:text-start text-center font-medium pb-8 ">
              Diseño totalmente personalizado. Contáctanos para un presupuesto.
            </p>
            <h3 className="font-anton font-normal lg:text-5xl text-4xl text-white ">
              Consultar precio
            </h3>
            <ul className="jackpot_list ps-6 pt-4 pb-10">
              <li className="text-white font-inter font-medium sm:text-base text-sm opacity-80 ">
                Personalizable
              </li>
            </ul>
            <CustomButton title="Comprar ahora" style="" />
          </div>
          <div className="max-w-[602px] relative" data-aos="fade-left">
            <Image
              className="w-full relative z-10"
              width={602}
              height={419}
              src="/assets/platinum/all-games.webp"
              alt="games"
            />
            <div className="top-0 right-20 green_shodow  !w-[162px] !h-[162px] !blur-[45px] !opacity-80"></div>
          </div>
        </div>
      </div>
      <div className="top-0 left-0 -translate-x-2/3 -translate-y-1/3 green_shodow"></div>
    </div>
  );
};

export default Platinum;
