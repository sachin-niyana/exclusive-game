"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Eligieron from "@/components/Eligieron";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Luxury from "@/components/Luxury";
import Nuestra from "@/components/Nuestra";
import Ofertas from "@/components/Ofertas";
import Plataforma from "@/components/Plataforma";
import Platinum from "@/components/Platinum";
import PorQue from "@/components/PorQue";
import Potenciando from "@/components/Potenciando";
import RazonesPara from "@/components/RazonesPara";
import Slots from "@/components/Slots";
import MyAccordion from "@/components/common/MyAccordion";
import BackToTop from "@/components/common/BackToTop";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    }); // Initialize AOS
  }, []);
  return (
    <div className="overflow-x-hidden !scroll-smooth">
      <BackToTop />
      <Header />
      <Nuestra />
      <Slots />
      <Potenciando />
      <PorQue />
      <RazonesPara />
      <Ofertas />
      <Luxury />
      <Platinum />
      <Eligieron />
      <MyAccordion />
      <Plataforma />
      <Footer />
    </div>
  );
}
