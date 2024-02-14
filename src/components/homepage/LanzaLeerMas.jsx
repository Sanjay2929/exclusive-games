import React from "react";
import CommonButton from "../common/CommonButton";

const LanzaLeerMas = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pb-[150px] pb-24 lg:pt-[80px] pt-8">
      <div
        className="border-[.5px] border-white border-opacity-50 rounded-2xl relative bg-lanza-leer-mas bg-cover overflow-hidden"
        data-aos="fade-up"
      >
        <div className="lg:py-[104px] md:py-[80px] py-[50px] bg-greenTransparentGradient flex justify-center items-center flex-col px-3">
          <h2 className=" font-anton font-normal md:text-[32px] text-2xl text-white text-center leading-[120%] md:pb-10 pb-6">
            Lanza tu propia plataforma en sólo 2 semanas
          </h2>
          <CommonButton
            title="Leer más"
            style="!text-darkBlack !bg-greenLinearGradient !border-none after:!bg-[url('/assets/common/button-green-haft-border.svg')]"
          />
        </div>
      </div>
    </div>
  );
};

export default LanzaLeerMas;
