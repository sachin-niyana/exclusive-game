import Image from "next/image";
import React from "react";
import CommonButtnWhite from "./common/CommonButtonWhite";

const Platinum = () => {
  return (
    <div className="bg-Rich-Black mt-[-2px] relative">
      <div className=" absolute bg-green-shadow w-[184px] h-[184px] rounded-full blur-[158px] bottom-[-20%] right-[-5%] pointer-events-none"></div>
      <div className=" absolute bg-green-shadow w-[200px] h-[200px] rounded-full blur-[138px] top-[0%] left-[-5%] pointer-events-none"></div>
      <div className="container max-w-[1152px] mx-auto px-3 pt-14 pb-2">
        <div className="bg-black-Green border hover:shadow-grayShadow duration-300 flex flex-col justify-center border-light-gray rounded-2xl px-10 py-20">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center flex-wrap">
            <div
              className="md:w-5/12 md:ps-5 md:pt-0 pt-10"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h3 className="text-white md:text-2md text-md font-normal font-Anton text-start mt-8">
                Platinum
              </h3>
              <p className="text-gray sm:text-sm text-xsm font-Inter font-medium max-w-[364px] mt-4 mb-3">
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start mt-8">
                Consultar precio
              </h2>
              <div className="flex justify-start gap-2 items-start mt-4">
                <Image
                  src="/assets/webp/seen.webp"
                  alt="seen"
                  width={24}
                  height={24}
                />
                <p className="text-gray sm:text-sm text-xsm font-Inter font-medium max-w-[380px]">
                  Personalizable
                </p>
              </div>
              <div className="mt-10 inline-block">
                <CommonButtnWhite content="Comprar ahora" />
              </div>
            </div>
            <div
              className="md:w-7/12 relative"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className=" absolute bg-green-shadow w-[184px] h-[184px] rounded-full blur-[70px] top-[3%] z-[0] right-[15%] pointer-events-none"></div>
              <Image
                className="z-10 relative"
                src="/assets/webp/win-2.webp"
                alt="win-2"
                width={558}
                height={439}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
