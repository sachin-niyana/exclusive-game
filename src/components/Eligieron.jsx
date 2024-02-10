import React from "react";
import { juegos } from "./common/Helper";
import CommonButtonTwo from "./common/CommonButtonTwo";
import Image from "next/image";

const Eligieron = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="container max-w-[1152px] mx-auto px-3 pt-36">
        <p className="text-white lg:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center">
          Ellos eligieron apostar con nosotros
        </p>

        <div className="flex flex-wrap justify-center mt-14 pt-1 lg:pb-80 md:pb-56 pb-36">
          {juegos.map((value, index) => (
            <div
              key={index}
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

export default Eligieron;
