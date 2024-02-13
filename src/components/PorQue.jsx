import React from "react";
import CommonButtonOne from "./common/CommonButtonOne";
import Image from "next/image";

const PorQue = () => {
  return (
    <div className="bg-white" id="pro-que">
      <div className="container max-w-[1152px] mx-auto px-3 lg:py-20 md:py-16 py-12 ">
        <div className="flex justify-center items-center flex-wrap">
          <div
            className="md:w-6/12 md:pe-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-Rich-Black xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start">
              Por qué elegirnos
            </h2>
            <p className="text-Rich-Black sm:text-sm text-xsm font-Inter max-w-[525px] font-medium mt-4 mb-6">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <CommonButtonOne content="Aprende más" />
          </div>
          <div
            className="md:w-6/12 md:ps-5 md:mt-0 mt-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Image
              src="/assets/webp/casion.webp"
              alt="jackpot"
              width={558}
              height={439}
              className="md:max-w-[558px] sm:max-w-[430px] max-w-[330px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorQue;
