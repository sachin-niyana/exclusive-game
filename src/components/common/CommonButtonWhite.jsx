"use client";
import React from "react";
import { ButtonBorderWhite } from "./Icon";

const CommonButtnWhite = (props) => {
  const { content } = props;
  return (
    <div className=" relative group">
      <button
        className={`font-Inter font-bold sm:text-sm text-xsm bg-transparent text-white border-white border  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] whitespace-nowrap group-hover:bottom-0 group-hover:opacity-0 group-hover:start-0 duration-300 transition-all ease-in-out">
        <ButtonBorderWhite />
      </span>
    </div>
  );
};

export default CommonButtnWhite;
