"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Arrow } from "./common/Icon";

const Nuestra = () => {
  return (
    <div className=" bg-Rich-Black mt-[-2px] relative " id="hogar">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[284px] h-[284px] rounded-full blur-[158px] top-[15%] z-10 left-[-5%] pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[284px] h-[284px] rounded-full blur-[158px] bottom-[0%] z-10 right-0 pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[184px] h-[184px] rounded-full blur-[108px] top-[35%] left-[45%] z-10 pointer-events-none"></div>
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
            <div
              className="flex justify-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                src="/assets/webp/poker.webp"
                alt="poker"
                width={338}
                height={336}
                className="md:max-w-[538px] sm:max-w-[430px] w-full max-w-[330px] md:mb-[60px] mb-10"
              />
            </div>
            <div className="flex md:justify-start justify-center">
              <div
                className=" flex-col flex items-start"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <p className="font-Anton text-white lg:text-2lg md:text-lg sm:text-2md text-md text-center font-normal">
                  Nuestra Visión
                </p>
                <p className="text-white opacity-70 font-Inter font-medium sm:text-sm text-xsm max-w-[445px] pt-4 mb-6">
                  Nuestra visión es ser líderes indiscutibles en la industria de
                  los juegos de azar y llevar nuestra pasión por el
                  entretenimiento más allá de las fronteras. Imagina un mundo
                  donde la emoción y la diversión no tengan límites, y ese es el
                  mundo que queremos crear contigo.
                </p>
                <Link
                  href="/"
                  className=" font-Inter font-bold sm:text-sm text-xsm text-Pastel-Green flex items-center group"
                >
                  Aprende más
                  <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                    <Arrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 w-full flex md:flex-col flex-col-reverse md:ps-8">
            <div
              className="flex md:justify-start justify-center"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className=" flex-col flex items-start">
                <p className="font-Anton text-white lg:text-2lg md:text-lg sm:text-2md text-md text-center font-normal">
                  Nuestra Misión
                </p>
                <p className="text-white opacity-70 font-Inter font-medium sm:text-sm text-xsm max-w-[445px] pt-4 mb-6">
                  Nuestra misión es simple pero poderosa: proporcionarte la más
                  amplia gama de soluciones de entretenimiento de alta calidad y
                  rentabilidad. Estamos comprometidos a elevar tus expectativas
                  y brindarte experiencias inigualables.
                </p>
                <Link
                  href="/"
                  className=" font-Inter font-bold sm:text-sm text-xsm text-Pastel-Green flex items-center group"
                >
                  Aprende más
                  <span className=" ms-2 group-hover:ms-4 transition-all ease-in-out duration-150">
                    <Arrow />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="flex justify-center"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                src="/assets/webp/aviator.webp"
                alt="aviator"
                width={538}
                height={536}
                className="md:max-w-[538px] sm:max-w-[430px] w-full max-w-[330px]  md:mb-0 mb-10 mt-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuestra;
