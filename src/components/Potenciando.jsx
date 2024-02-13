import React from "react";
import { juegos, potenciando } from "./common/Helper";
import Image from "next/image";
import CommonButtonTwo from "./common/CommonButtonTwo";

const Potenciando = () => {
  return (
    <div
      className="bg-cover bg-Rich-Black relative bg-[url('/assets/webp/jackpot-bg.webp')]"
      id="mision"
    >
      <Image
        className="absolute w-full top-0"
        src="/assets/webp/trangle.webp"
        alt="trangle"
        width={1440}
        height={237}
      />
      <Image
        className="absolute w-full bottom-0"
        src="/assets/webp/trangle-2.webp"
        alt="trangle"
        width={1440}
        height={237}
      />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-80 md:pt-56 pt-36">
        <div className="flex justify-center items-center flex-wrap">
          <div
            className="md:w-6/12 md:pe-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Image
              className="md:max-w-[558px] sm:max-w-[430px] w-full max-w-[330px]"
              src="/assets/webp/jackpot.webp"
              alt="jackpot"
              width={558}
              height={439}
            />
          </div>
          <div
            className="md:w-6/12 md:ps-5 md:pt-0 pt-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start">
              Potenciando sus elecciones
            </h2>
            <p className="text-gray sm:text-sm text-xsm font-Inter font-medium mt-4 mb-3">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
            {potenciando.map((value, index) => (
              <div
                key={index}
                className="flex justify-start gap-2 items-start mt-3"
              >
                <Image src={value.image} alt="seen" width={24} height={24} />
                <p className="text-gray sm:text-sm text-xsm font-Inter font-medium max-w-[380px]">
                  {value.title}
                </p>
              </div>
            ))}
            <p className="text-gray sm:text-sm text-xsm font-Inter font-medium mt-6">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
          </div>
        </div>
        <div
          className="flex justify-center lg:py-36 md:py-28 sm:py-20 py-12"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="max-w-[1043px] px-3 w-full hover:shadow-[0px_0px_5px_4px_gray] min-h-[308px] flex justify-center items-center border border-white rounded-2xl bg-[url('/assets/webp/lanza-bg.webp')] bg-cover">
            <p className="text-white lg:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center max-w-[520px]">
              lanza tu propia plataforma en sólo 2 semanas
            </p>
          </div>
        </div>
        <p
          className="text-white lg:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center mt-1.5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Juegos en vivo
        </p>

        <div className="flex flex-wrap justify-center lg:mt-14 md:mt-12 mt-8 pt-1 lg:pb-80 md:pb-56 pb-36">
          {juegos.map((value, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="bg-black rounded-lg opacity-0 hover:opacity-60 duration-300 w-full flex justify-center items-center absolute h-full">
                  <CommonButtonTwo content="Reproducir ahora" />
                </div>
                <Image
                  width={364}
                  height={265}
                  src={value.image}
                  alt="game-card"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Potenciando;
