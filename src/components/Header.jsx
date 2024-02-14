"use client";
import CommonButtnGreen from "./common/CommonButtonGreen";
import Navbar from "./common/Navbar";

const Header = () => {
  return (
    <div className="bg-cover bg-Rich-Black relative bg-[url('/assets/webp/hero-bg.webp')] min-h-screen">
      <Navbar />
      <div className="bg-bottom items-center flex-col flex justify-center min-h-[85vh]">
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
              Pasión Por Ganar
            </p>
            <p
              className="mt-4 font-Inter sm:text-sm text-xsm font-medium text-center text-gray max-w-[730px] md:mb-10 mb-6"
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
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <CommonButtnGreen content="Empezar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
