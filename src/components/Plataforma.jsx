import React from "react";
import CommonButtnGreen from "./common/CommonButtonGreen";

const Plataforma = () => {
  return (
    <div className="bg-Rich-Black mt-[-2px]">
      <div className="container max-w-[1152px] mx-auto px-3 lg:py-36 md:py-28 sm:py-20 py-12">
        <div className="flex justify-center">
          <div className="max-w-[1043px] px-3 w-full min-h-[341px] flex flex-col justify-center items-center border border-light-gray hover:shadow-grayShadow transition-all ease-in-out duration-1000 rounded-2xl bg-cover bg-plataforma-bg">
            <h2 className="text-white md:text-2md text-md font-normal font-Anton text-center max-w-[595px]">
              Lanza tu propia plataforma en sólo 2 semanas
            </h2>
            <div className="mt-10">
              <CommonButtnGreen content="Leer más" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plataforma;
