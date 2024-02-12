import React from "react";
import { nuestrosCard, slots } from "./common/Helper";
import Image from "next/image";
import CommonButtonTwo from "./common/CommonButtonTwo";
import CommonButtonOne from "./common/CommonButtonOne";
const Slots = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container max-w-[1152px] mx-auto px-3">
          <div className="mt-4 relative">
            <Image
              className="absolute top-[40%] lg:w-[250px] lg:left-[20%] left-[23%] md:block hidden"
              width={150}
              height={50}
              src="/assets/webp/rounded-arrow-1.webp"
              alt="rounded-arrow"
            />
            <Image
              className="absolute top-[50%] lg:w-[250px] lg:right-[20%] right-[23%] md:block hidden"
              width={150}
              height={50}
              src="/assets/webp/rounded-arrow-2.webp"
              alt="rounded-arrow"
            />
            <h2 className="font-Anton lg:text-2lg md:text-lg sm:text-2md text-md text-center font-normal">
              Nuestros Atributos de Marca
            </h2>
            <div className="flex items-start flex-wrap md:justify-between justify-center pt-1">
              {nuestrosCard.map((value, index) => (
                <div
                  key={index}
                  className="max-w-[265px] lg:mt-14 md:mt-10 mt-6 md:w-4/12 sm:w-6/12 p-3"
                >
                  <div className="flex justify-center">
                    <Image
                      width={100}
                      height={100}
                      src={value.image}
                      alt="intligencia"
                    />
                  </div>
                  <p className="text-Rich-Black font-Anton font-normal text-xmd text-center mt-4">
                    {value.title}
                  </p>
                  <p className="text-dark-gray font-medium font-Inter sm:text-sm text-xsm text-center mt-4">
                    {value.discription}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="font-Anton lg:text-2lg md:text-lg sm:text-2md text-md text-center font-normal lg:mt-36 md:mt-24 mt-16 pt-1">
            Slots{" "}
          </h2>
          <div className="flex justify-center mt-4">
            <p className=" font-Inter font-medium sm:text-sm text-xsm text-Rich-Black text-center max-w-[900px]">
              En Exclusive Games, ofrecemos una selección de más de 600 juegos
              de los principales desarrolladores, como Aristocrat, Amatic, EGT,
              Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
              trabaja incansablemente para innovar y ampliar nuestra oferta de
              experiencias, garantizando la máxima seguridad con operaciones
              protegidas por cifrado SSL de 256 bits.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-14 pt-1">
            {slots.map((value, index) => (
              <div
                key={index}
                className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="bg-black rounded-lg opacity-0 hover:opacity-60 duration-300 w-full flex justify-center items-center absolute h-full">
                    <CommonButtonTwo content="Jugar" />
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
          <div className="flex justify-center mt-10 mb-5">
            <CommonButtonOne content="Mostrar más" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slots;
