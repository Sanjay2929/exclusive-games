import Image from "next/image";
import React from "react";
import { MasRazonesCards } from "../common/Helper";

const MasRazones = () => {
  return (
    <div className="relative">
      <div className="container relative z-10 xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pt-[200px] pt-24 flex xl:justify-between justify-center xl:flex-nowrap flex-wrap items-center lg:pb-[150px] pb-24">
        <Image
          data-aos="fade-right"
          className="xl:w-1/2 md:w-3/4 w-full max-w-[531px] lg:max-w-[570px] lg:pe-3"
          width={558}
          height={439}
          src="/assets/mas-razones/lucky-draw.webp"
          alt="jackpot"
        />
        <div className="xl:max-w-[543px] w-full lg:ml-5 pt-8 xl:pt-0">
          <h2 className="font-anton font-normal lg:text-5xl sm:text-4xl text-[32px] text-center xl:text-start text-white xl:pb-[60px] pb-8">
            Más razones para elegirnos
          </h2>
          <div className="xl:max-w-[375px] flex xl:flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center  gap-6 w-full">
            {MasRazonesCards.map((value, index) => {
              return (
                <div
                  data-aos="fade-left"
                  data-aos-delay={value.delay}
                  key={index}
                  className="py-6 lg:px-14 px-8 border border-borderGreen rounded-2xl flex xl:flex-row flex-col xl:gap-[37px] gap-5 md:w-full min-w-[290px] max-w-[500px] md:min-w-9  items-center bg-greenTransparentGradient"
                >
                  <div className="w-[68px] h-[68px] rounded-full bg-lightGreen bg-opacity-[8%] flex justify-center items-center">
                    <Image
                      width={37}
                      height={37}
                      src={value.image}
                      alt="paginas"
                    />
                  </div>
                  <div>
                    <h3 className="font-anton font-normal text-[32px] text-white text-center xl:text-start leading-tight">
                      {value.heading}
                    </h3>
                    <h4 className="text-base font-medium text-white leading-normal text-center xl:text-start">
                      {value.paragraph}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="top-0 left-0 -translate-x-2/3 -translate-y-2/3 green_shodow"></div>
      <div className="bottom-0 right-0 translate-x-3/4 translate-y-1/3 green_shodow"></div>
    </div>
  );
};

export default MasRazones;
