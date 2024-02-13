import Image from "next/image";
import CommonButtonTwo from "./common/CommonButtonTwo";
import { eligieron } from "./common/Helper";

const Eligieron = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-36 md:pt-28 sm:pt-20 pt-12">
        <h2 className="text-white lg:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center">
          Ellos eligieron apostar con nosotros
        </h2>

        <div className="flex flex-wrap justify-center lg:mt-14 md:mt-12 mt-8 pt-1 ">
          {eligieron.map((value, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="bg-black rounded-lg opacity-0 hover:opacity-60 duration-300 w-full flex justify-center items-center absolute h-full">
                  <CommonButtonTwo content="Rcasinovip" />
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
        <p className="text-center text-white font-semibold font-Inter mt-8 sm:text-sm text-xsm">
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.
        </p>
        <p className="text-center text-white font-semibold font-Inter sm:text-sm text-xsm">
          Ahora, la próxima apuesta está en tus manos.
        </p>
        <p className="text-center text-white font-semibold font-Inter sm:text-sm text-xsm">
          Elige ganar. Elige exclusive game.
        </p>
      </div>
    </div>
  );
};

export default Eligieron;
