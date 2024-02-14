import Image from "next/image";
import CustomButton from "../common/CustomButton";
import { Ellosligieron } from "../common/Helper";

const EllosEligieron = () => {
  return (
    <div
      id="tragamonedas"
      className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 lg:pb-[170px] pb-24 lg:pt-[150px] pt-24"
    >
      <h2 className="font-anton font-normal lg:text-5xl text-4xl text-white text-center leading-[120%] lg:pb-[60px] pb-8">
        Ellos eligieron apostar con nosotros
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {Ellosligieron.map((value, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={value.delay}
              key={index}
              className="md:w-[calc(33.3%_-_16px)] w-[calc(50%_-_12px)] max-[480px]:w-full relative rounded-lg overflow-hidden group hover:shadow-[7px_9px_15px_0px_#00000033]"
            >
              <Image
                className="w-full"
                width={364}
                height={265}
                src={value.image}
                alt="jet-X"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[72%] opacity-0 group-hover:opacity-100 duration-300">
                <CustomButton title={value.title} style="" />
              </div>
            </div>
          );
        })}
      </div>
      <p className="pt-[38px] text-white ff_inter font-semibold sm:text-base text-sm text-center">
        Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
        de emocionantes experiencias de juego.
        <span className=" block text-center">
          Ahora, la próxima apuesta está en tus manos.
        </span>
        <span className=" block text-center">
          Elige ganar. Elige exclusive game.
        </span>
      </p>
    </div>
  );
};

export default EllosEligieron;
