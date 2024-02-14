"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";
import { CrossMenu, Menu } from "../common/Icons";
import { NavLinks } from "../common/Helper";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` fixed top-0 left-0 w-full z-50 ${
        scrollY > 100 ? "bg-darkBlack bg-opacity-80" : "bg-white bg-opacity-10"
      }`}
    >
      <div className="container xl:max-w-[1140px] mx-auto flex justify-between items-center py-[19px] px-3 xl:px-0">
        <Link
          className="relative z-[51]"
          href="/"
          onClick={() => {
            setIsNavShow(false);
          }}
        >
          <Image
            className="lg:w-[210px] w-[160px]"
            width={210}
            height={43}
            src="/assets/header/exclusive-games-logo.png"
            alt="logo"
          />
        </Link>
        <div
          className={`flex items-center justify-center gap-7 flex-col lg:static fixed top-0 lg:w-auto w-full lg:min-h-0 min-h-screen bg-black bg-opacity-70 backdrop-blur-2xl lg:backdrop-blur-0 lg:bg-transparent z-50 duration-300 ${
            isNavShow ? "left-0" : "-left-full"
          }`}
        >
          <ul className="flex items-center justify-center gap-7 flex-col lg:flex-row">
            {NavLinks.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => {
                      setIsNavShow(false);
                    }}
                    href={value.url}
                    className="font-medium text-base text-white text-center hover:text-lightGreen  duration-300"
                  >
                    {value.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            onClick={() => {
              setIsNavShow(false);
            }}
            className="lg:hidden block"
          >
            <CustomButton title="Acceso" style="" />
          </div>
        </div>
        <div className="hidden lg:block">
          <CustomButton title="Acceso" style="" />
        </div>
        <div
          className="cursor-pointer relative z-[51] lg:hidden"
          onClick={() => {
            setIsNavShow(!isNavShow);
          }}
        >
          {isNavShow ? <CrossMenu /> : <Menu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
