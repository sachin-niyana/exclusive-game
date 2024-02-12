import Image from "next/image";
import React from "react";
import { razonesCard } from "./common/Helper";

const razonesPara = () => {
  return (
    <div className="bg-Rich-Black relative">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[184px] h-[184px] rounded-full blur-[108px] top-[10%] z-10 left-[-3%] pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[184px] h-[184px] rounded-full blur-[108px] bottom-[10%] right-[-10%] pointer-events-none"></div>
      <Image
        className="absolute w-full top-0"
        src="/assets/webp/trangle.webp"
        alt="trangle"
        width={1440}
        height={237}
      />
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-80 md:pt-56 pt-36">
        <div className="flex justify-center items-center flex-wrap lg:py-20  ">
          <div className="md:w-6/12 md:pe-5 md:mt-0 mt-12">
            <Image
              className="relative z-10"
              src="/assets/webp/win.webp"
              alt="jackpot"
              width={558}
              height={439}
            />
          </div>
          <div className="md:w-6/12 md:ps-5 md:pt-0 pt-10">
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
            ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default razonesPara;
