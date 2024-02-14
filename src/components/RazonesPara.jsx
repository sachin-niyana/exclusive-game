import Image from "next/image";
import React from "react";
import { razonesCard } from "./common/Helper";

const razonesPara = () => {
  return (
    <div className="bg-Rich-Black relative mt-[-2px]">
      <div className=" absolute bg-green-shadow w-[184px] h-[184px] rounded-full blur-[108px] top-[10%] z-10 left-[-3%] pointer-events-none"></div>
      <div className=" absolute bg-green-shadow w-[184px] h-[184px] rounded-full blur-[108px] bottom-[10%] right-[-10%] pointer-events-none"></div>
      <Image
        className="absolute w-full top-0"
        src="/assets/webp/trangle.webp"
        alt="trangle"
        width={1440}
        height={237}
      />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-80 md:pt-56 pt-36 lg:pb-0 pb-10">
        <div className="flex justify-center items-center flex-wrap lg:py-20  ">
          <div className="md:w-6/12 w-full md:pe-5 md:mt-0 mt-12">
            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                className="relative z-10 md:max-w-[558px] sm:max-w-[430px] w-full max-w-[330px]"
                src="/assets/webp/win.webp"
                alt="win"
                width={558}
                height={439}
              />
            </div>
          </div>
          <div className="md:w-6/12 w-full md:ps-5 md:pt-0 pt-10">
            <div className="flex justify-center">
              <div className="m-0">
                <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start">
                  Más razones para elegirnos
                </h2>
                <div
                  className="flex flex-col"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  {razonesCard.map((value, index) => (
                    <div
                      key={index}
                      className="bg-black-Green transition-all ease-in-out duration-1000 hover:shadow-[0px_0px_10px_2px_Green] md:max-w-[375px] w-full max-w-[420px] border border-Green rounded-2xl py-6 mt-6 flex justify-center"
                    >
                      <div className="flex gap-9">
                        <Image
                          src={value.image}
                          alt="paginas"
                          width={68}
                          height={68}
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-2md font-normal font-Anton">
                            {value.title}
                          </p>
                          <p className="text-white sm:text-sm text-xsm font-medium font-Inter">
                            {value.discription}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default razonesPara;
