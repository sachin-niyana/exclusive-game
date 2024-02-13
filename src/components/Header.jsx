"use client";
import CommonButtonOne from "./common/CommonButtonOne";
import Navbar from "./common/Navbar";

const Header = () => {
  return (
    <div className="bg-Rich-Black relative">
      <Navbar />
      <div className="bg-cover bg-bottom bg-[url('/assets/webp/hero-bg.webp')] min-h-screen items-center flex-col flex justify-center">
        <div className="container max-w-[1152px] mx-auto px-3 flex-grow-[1] flex items-center justify-center">
          <div className=" flex flex-col items-center">
            <p
              className=" block font-Anton font-normal text-white lg:text-xxl md:text-xl sm:text-2lg text-lg"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <span className=" block font-Anton font-normal text-white lg:text-xxl md:text-xl sm:text-2lg text-lg">
                Exclusive Games.
              </span>{" "}
              Pasión por ganar
            </p>
            <p
              className="mt-4 font-Inter sm:text-sm text-xsm font-medium text-center text-white opacity-75 max-w-[730px] md:mb-10 mb-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de multiplataformas para juegos de azar. A
              lo largo de nuestra vida consumimos todo tipo de juegos hasta que
              un día decidimos crear los propios.
            </p>
            <div
              className="mb-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <CommonButtonOne content="Empezar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
