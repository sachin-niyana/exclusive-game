"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nuestra = () => {
  return (
    <div className=" bg-Rich-Black overflow-hidden relative">
      <Image
        src="/assets/webp/trangle-2.webp"
        alt="trangle-2"
        width={1440}
        height={240}
        className="w-full absolute bottom-0"
      />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pb-[343px] md:pb-64 pb-48 pt-20 relative">
        <div className="flex flex-wrap relative z-10 md:flex-row flex-col">
          <div className="md:w-6/12 w-full flex flex-col md:pe-8">
            <Image
              src="/assets/webp/poker.webp"
              alt="poker"
              width={538}
              height={536}
              className="w-full max-w-[538px] md:mb-[60px] mb-10"
            />
            <div className=" flex-col flex items-start">
              <p className=" font-anton font-normal sm:text-5xl text-3xl text-white mb-4 leading-[96%]">
                Nuestra Visión
              </p>
              <p className="text-white opacity-70 font-inter font-medium sm:text-base sm:text-sm text-xsm max-w-[445px] mb-6">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <Link
                href="/"
                className=" font-inter font-bold text-base text-Pastel-Green flex items-center group"
              >
                Aprende más
                <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  --
                </span>
              </Link>
            </div>
          </div>
          <div className="md:w-6/12 w-full flex md:flex-col flex-col-reverse md:ps-8">
            <div className=" flex-col flex items-start">
              <p className=" font-anton font-normal sm:text-5xl text-3xl text-white mb-4 leading-[96%]">
                Nuestra Visión
              </p>
              <p className="text-white opacity-70 font-inter font-medium sm:text-base sm:text-sm text-xsm max-w-[445px] mb-6">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <Link
                href="/"
                className=" font-inter font-bold text-base text-Pastel-Green flex items-center group"
              >
                Aprende más
                <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                  --
                </span>
              </Link>
            </div>
            <Image
              src="/assets/webp/aviator.webp"
              alt="aviator"
              width={538}
              height={536}
              className="w-full md:mb-0 mb-10 mt-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuestra;
