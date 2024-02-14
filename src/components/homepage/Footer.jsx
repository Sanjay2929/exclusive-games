import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterLinks } from "../common/Helper";
import { GmailIcon, TelephoneIcon } from "../common/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black lg:pt-16 pt-10 relative overflow-hidden">
      <div className="container xl:max-w-[1140px] mx-auto px-3 pb-10 flex justify-between flex-wrap lg:gap-0 gap-8">
        <div className="lg:w-auto w-full">
          <Link href="/">
            <Image
              width={210}
              height={43}
              src="/assets/header/exclusive-games-logo.png"
              alt="logo"
            />
          </Link>
          <p className="font-inter font-medium sm:text-base text-sm text-white opacity-80 max-w-[369px] pt-4 pb-6">
            En Exclusive Games somos un equipo apasionado de personas dedicadas
            al desarrollo de multiplataformas para juegos de azar
          </p>
        </div>
        {FooterLinks.map((value, index) => {
          return (
            <div key={index}>
              <h3 className="font-inter font-bold sm:text-base text-sm text-white pb-4">
                {value.heading}
              </h3>
              <ul className="flex flex-col sm:gap-[14px] gap-2">
                {value.links.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="font-inter font-medium sm:text-base text-sm text-white opacity-80 hover:text-lightGreen  duration-300 hover:opacity-100"
                        href={value.url}
                      >
                        {value.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div>
          <h3 className="font-inter font-bold sm:text-base text-sm text-white pb-4">
            Ponerse en contacto
          </h3>
          <ul className="flex flex-col sm:gap-[14px] gap-2">
            <li>
              <Link
                className="font-inter font-medium sm:text-base text-sm text-white opacity-80 flex items-center gap-2 group hover:text-lightGreen  duration-300 hover:opacity-100"
                href="mailto:juegosexclusivos@gmail.com"
              >
                <GmailIcon />
                juegosexclusivos@gmail.com
              </Link>
            </li>
            <li>
              <Link
                className="font-inter font-medium sm:text-base text-sm text-white opacity-80 flex items-center gap-2 group hover:text-lightGreen  duration-300 hover:opacity-100"
                href="tel:(101)342-7873"
              >
                <TelephoneIcon />
                (101)342-7873
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white border-opacity-10 py-5 font-inter font-medium sm:text-base text-sm text-white opacity-50 text-center px-3">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
      <div className="-bottom-10 left-0 green_shodow -translate-x-1/2 lg:!w-[180px] lg:!h-[180px] !w-[100px] !h-[100px] !opacity-75"></div>
      <div className="top-1/2 right-0 green_shodow translate-x-1/2 -translate-y-1/2 lg:!w-[180px] lg:!h-[180px] !w-[100px] !h-[100px] !opacity-75"></div>
    </div>
  );
};

export default Footer;
