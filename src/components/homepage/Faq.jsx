"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "../common/Icons";
import { FaqList } from "../common/Helper";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? -1 : value);

  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] mx-auto px-3 pb-12">
        <h2 className="font-anton font-normal lg:text-5xl text-4xl text-white text-center leading-[120%] lg:pb-[60px] pb-8">
          Preguntas más frecuentes
        </h2>
        <div className="max-w-[970px] mx-auto">
          {FaqList.map((value, index) => {
            return (
              <Accordion
                data-aos="fade-left"
                data-aos-delay={value.delay}
                key={index}
                className="border-[.5px] border-white border-opacity-50 sm:px-5 px-3 py-4 rounded-md sm:mb-8 mb-4"
                open={open === index}
              >
                <div
                  onClick={() => handleOpen(index)}
                  className="flex justify-between group cursor-pointer gap-3"
                >
                  <AccordionHeader className="text-white border-none py-0 font-anton lg:text-xl text-base sm:text-lg text-start font-normal hover:text-white">
                    {value.title}
                  </AccordionHeader>
                  {open === index ? <MinusIcon /> : <PlusIcon />}
                </div>
                <AccordionBody className="pb-0 pt-2 font-inter">
                  <p className="text-white font-normal sm:text-base text-sm opacity-80 lg:pe-24 !font-inter">
                    {value.discription}
                  </p>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
      <div className="top-0 left-0 -translate-x-2/3 -translate-y-1/3 green_shodow lg:!w-[394px] lg:!h-[394px]"></div>
    </div>
  );
};

export default Faq;
