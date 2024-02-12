import React from "react";
import CommonButtonOne from "./common/CommonButtonOne";

const Plataforma = () => {
  return (
    <div className="bg-Rich-Black">
      <div className="container max-w-[1152px] mx-auto px-3 lg:py-36 md:py-28 sm:py-20 py-12">
        <div className="flex justify-center">
          <div className="max-w-[1043px] px-3 w-full min-h-[341px] flex flex-col justify-center items-center border border-light-gray hover:shadow-[0px_0px_10px_2px_gray] duration-300 rounded-2xl bg-cover bg-[url('/assets/webp/platatorma-bg.webp')]">
            <h2 className="text-white md:text-2md text-md font-normal font-Anton text-center max-w-[595px]">
              Lanza tu propia plataforma en sólo 2 semanas
            </h2>
            <div className="mt-10">
              <CommonButtonOne content="Leer más" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plataforma;
