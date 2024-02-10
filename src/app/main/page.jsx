import Header from "@/components/Header";
import Nuestra from "@/components/Nuestra";
import PorQue from "@/components/PorQue";
import Potenciando from "@/components/Potenciando";
import Slots from "@/components/Slots";
import Navbar from "@/components/common/Navbar";
import RazonesPara from "@/components/RazonesPara";
import React from "react";
import Ofertas from "@/components/Ofertas";
import Luxury from "@/components/Luxury";
import Platinum from "@/components/Platinum";
import Eligieron from "@/components/Eligieron";

const page = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default page;
