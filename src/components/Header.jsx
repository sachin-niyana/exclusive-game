"use client";
import React from "react";
import CommonButtonOne from "./common/CommonButtonOne";

const Header = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="bg-cover bg-[url('/assets/webp/hero-bg.webp')] min-h-screen items-center flex-col flex justify-center">
        <div className="container max-w-[1152px] mx-auto px-3 flex-grow-[1] flex items-center justify-center">
          <div className=" flex flex-col items-center">
            <p className=" block font-Anton font-normal text-white lg:text-xxl md:text-xl sm:text-2lg text-lg">
              <span className=" block font-Anton font-normal text-white lg:text-xxl md:text-xl sm:text-2lg text-lg">
                Exclusive Games.
              </span>{" "}
              Pasión por ganar
            </p>
            <p className="mt-4 font-inter sm:text-base sm:text-sm text-xsm font-medium text-center text-white opacity-75 max-w-[730px] md:mb-10 mb-6">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de multiplataformas para juegos de azar. A
              lo largo de nuestra vida consumimos todo tipo de juegos hasta que
              un día decidimos crear los propios.
            </p>
            <CommonButtonOne content="Empezar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
