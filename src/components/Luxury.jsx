import Image from "next/image";
import CommonButtonOne from "./common/CommonButtonOne";
import { luxury } from "./common/Helper";

const Luxury = () => {
  return (
    <div className="bg-Rich-Black">
      <div
        className="container max-w-[1152px] mx-auto px-3 pt-14 pb-2"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="bg-black-Green border hover:shadow-[0px_0px_10px_2px_gray] duration-300 flex flex-col justify-center border-light-gray rounded-2xl p-11 bg-cover bg-[url('/assets/webp/luxury-bg.webp')] relative">
          <Image
            className="absolute md:block hidden bottom-[20%] lg:right-[20%] right-[10%]"
            width={66}
            height={69}
            src="/assets/webp/roll.webp"
            alt="roll"
          />
          <Image
            className="absolute md:block hidden top-[20%] lg:left-[20%] left-[10%]"
            width={78}
            height={79}
            src="/assets/webp/spin.webp"
            alt="spin"
          />
          <Image
            className="absolute md:block hidden bottom-[10%] lg:left-[13%] left-[0%]"
            width={176}
            height={186}
            src="/assets/webp/card-1.webp"
            alt="card-1"
          />
          <Image
            className="absolute md:block hidden top-[20%] lg:right-[13%] right-[2%]"
            width={149}
            height={150}
            src="/assets/webp/card-2.webp"
            alt="card-2"
          />
          <h3 className="text-white md:text-2md text-md font-normal font-Anton text-center mt-6">
            Luxury
          </h3>
          <p className="text-gray sm:text-sm text-xsm font-Inter font-medium mt-4 mb-3 max-w-[390px] mx-auto text-center">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          <h2 className="text-white xl:text-2lg md:text-lg sm:text-2md mt-5 text-md font-normal font-Anton text-center">
            $9000
          </h2>
          <div className="mx-auto">
            {luxury.map((value, index) => (
              <div key={index}>
                <div className="flex gap-2 items-start mt-3 pt-2">
                  <Image src={value.image} alt="seen" width={24} height={24} />
                  <p className="text-gray sm:text-sm text-xsm font-Inter text-center font-medium max-w-[380px]">
                    {value.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CommonButtonOne content="Comprar ahora" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
