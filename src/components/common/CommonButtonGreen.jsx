import React from "react";
import { ButtonBorderGreen } from "./Icon";

const CommonButtnGreen = (props) => {
  const { content } = props;
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold sm:text-sm text-xsm bg-green-shadow text-black  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:bottom-0 group-hover:opacity-0 group-hover:start-0 transition-all ease-in-out duration-300 ">
        <ButtonBorderGreen />
      </span>
    </div>
  );
};

export default CommonButtnGreen;
