"use client";
import React, { useState } from "react";
import { accordian } from "./Helper";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Close, Open } from "./Icon";

function ToggleButton({ isOpen, onClick }) {
  return (
    <button className="text-white focus:outline-none" onClick={onClick}>
      {isOpen ? <Close /> : <Open />}
    </button>
  );
}

const MyAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(-1);

  const toggleAccordion = (index) => {
    setIsAccordionOpen(isAccordionOpen === index ? -1 : index);
  };

  return (
    <div className="bg-Rich-Black  relative" id="ofertas">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[284px] h-[284px] rounded-full blur-[158px] top-[5%] left-[-5%] z-10 pointer-events-none"></div>
      <div className="container max-w-[1152px] mx-auto px-3 lg:pt-36 md:pt-28 sm:pt-20 pt-12">
        <h2 className="text-white lg:text-2lg md:text-lg sm:text-2md text-md font-normal font-Anton text-center">
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="max-w-[970px] mx-auto">
          {accordian.map((value, index) => (
            <Accordion
              key={index}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex flex-col justify-between border-[0.5px] border-light-gray hover:shadow-grayShadow duration-300 rounded-md px-5 bg-black-Green overflow-hidden ease-out transition-all md:mt-10 mt-5 relative"
              open={isAccordionOpen === index}
              icon={
                <ToggleButton
                  isOpen={isAccordionOpen === index}
                  onClick={() => toggleAccordion(index)}
                />
              }
            >
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                className="py-4"
              >
                <h2 className="text-start text-white flex pe-3 font-Anton font-normal leading-[140%] md:leading-[150%] sm:text-sm text-xsm mb-0">
                  {value.tittle}
                </h2>
              </AccordionHeader>
              <AccordionBody className="pb-4">
                <p className="font-Inter font-medium md:sm:text-sm text-xsm max-w-[740px] text-white opacity-70 leading-[150%]">
                  {value.discription}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAccordion;
