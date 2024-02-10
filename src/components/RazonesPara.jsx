import Image from "next/image";
import React from "react";
import { razonesCard } from "./common/Helper";

const razonesPara = () => {
  return (
    <div className="bg-Rich-Black relative">
      <Image
        className="absolute w-full top-0"
        src="/assets/png/trangle.png"
        alt="trangle"
        width={1440}
        height={237}
      />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-80 md:pt-56 pt-36">
        <div className="flex justify-center items-center flex-wrap lg:py-20 md:py-16 py-12 ">
          <div className="md:w-6/12 md:pe-5 md:mt-0 mt-12">
            <Image
              src="/assets/png/win.png"
              alt="jackpot"
              width={558}
              height={439}
            />
          </div>
          <div className="md:w-6/12 md:ps-5">
            <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start">
              Más razones para elegirnos
            </h2>
            <div className="flex flex-col">
              {razonesCard.map((value, index) => (
                <div
                  key={index}
                  className="bg-black-Green cursor-pointer duration-300 hover:shadow-[0px_0px_10px_2px_Green] max-w-[375px] border border-Green rounded-2xl py-6 mt-6 flex justify-center"
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
                        {value.tittle}
                      </p>
                      <p className="text-white text-sm font-medium font-Inter">
                        {value.discription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default razonesPara;
