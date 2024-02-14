"use client";
import CasinoNight from "@/components/homepage/CasinoNight";
import EllosEligieron from "@/components/homepage/EllosEligieron";
import Faq from "@/components/homepage/Faq";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Jackpot from "@/components/homepage/Jackpot";
import JuegosEnVivo from "@/components/homepage/JuegosEnVivo";
import LanzaLeerMas from "@/components/homepage/LanzaLeerMas";
import LanzaTuPropia from "@/components/homepage/LanzaTuPropia";
import Luxury from "@/components/homepage/Luxury";
import MasRazones from "@/components/homepage/MasRazones";
import NuestraMision from "@/components/homepage/NuestraMision";
import NuestrasOfertas from "@/components/homepage/NuestrasOfertas";
import NuestrosSteps from "@/components/homepage/NuestrosSteps";
import Platinum from "@/components/homepage/Platinum";
import Slots from "@/components/homepage/Slots";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="bg-darkBlack overflow-x-hidden">
      <Header />
      <Hero />
      <NuestraMision />
      <div className="relative z-10">
        <NuestrosSteps />
        <Slots />
        <div className="absolute top-0 left-0 w-full h-full screw_bg bg-white z-0"></div>
      </div>
      <div className="bg-jackpot-table bg-cover bg-center">
        <Jackpot />
        <LanzaTuPropia />
        <JuegosEnVivo />
      </div>
      <CasinoNight />
      <MasRazones />
      <NuestrasOfertas />
      <Luxury />
      <Platinum />
      <EllosEligieron />
      <Faq />
      <LanzaLeerMas />
      <Footer />
    </div>
  );
}
