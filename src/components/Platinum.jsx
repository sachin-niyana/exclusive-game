import Image from "next/image";
import React from "react";
import CommonButtonTwo from "./common/CommonButtonTwo";

const Platinum = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="container max-w-[1152px] mx-auto px-3 pt-14 pb-2">
        <div className="bg-black-Green border hover:shadow-[0px_0px_10px_2px_gray] duration-300 flex flex-col justify-center border-light-gray rounded-2xl px-10 py-20">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center flex-wrap">
            <div className="md:w-5/12 md:ps-5 md:pt-0 pt-10">
              <h3 className="text-white md:text-2md text-md font-normal font-Anton text-start mt-8">
                Platinum
              </h3>
              <p className="text-gray text-sm font-Inter font-medium max-w-[364px] mt-4 mb-3">
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-start mt-8">
                Consultar precio
              </h2>
              <div className="flex justify-start gap-2 items-start mt-4">
                <Image
                  src="/assets/png/seen.png"
                  alt="seen"
                  width={24}
                  height={24}
                />
                <p className="text-gray text-sm font-Inter font-medium max-w-[380px]">
                  Personalizable
                </p>
              </div>
              <div className="mt-10">
                <CommonButtonTwo content="Comprar ahora" />
              </div>
            </div>
            <div className="md:w-7/12 ">
              <Image
                src="/assets/png/win-2.png"
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
