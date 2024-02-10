import Image from "next/image";
import React from "react";
import { silver } from "./common/Helper";
import CommonButtonTwo from "./common/CommonButtonTwo";

const Ofertas = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="container max-w-[1152px] mx-auto px-3 pb-2">
        <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center">
          Nuestras ofertas
        </h2>
        <p className="text-white text-sm font-Inter font-medium text-center pb-1 mt-4">
          Te ofrecemos las mejores experiencias de juegos para tus clientes.
        </p>
        <div className="bg-black-Green border hover:shadow-[0px_0px_10px_2px_gray] duration-300 border-light-gray rounded-2xl mt-14 p-7">
          <div className="flex justify-center items-center flex-wrap">
            <div className="md:w-7/12 ">
              <Image
                src="/assets/png/navegar.png"
                alt="jackpot"
                width={558}
                height={439}
              />
            </div>
            <div className="md:w-5/12 md:ps-5 md:pt-0 pt-10">
              <h3 className="text-white md:text-2md text-md font-normal font-Anton text-start mt-8">
                Silver
              </h3>
              <p className="text-gray text-sm font-Inter font-medium mt-4 mb-3">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start">
                $5000
              </h2>
              {silver.map((value, index) => (
                <div
                  key={index}
                  className="flex justify-start gap-2 items-start mt-3"
                >
                  <Image src={value.image} alt="seen" width={24} height={24} />
                  <p className="text-gray text-sm font-Inter font-medium max-w-[380px]">
                    {value.title}
                  </p>
                </div>
              ))}
              <div className="mt-10">
                <CommonButtonTwo content="Comprar ahora" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
