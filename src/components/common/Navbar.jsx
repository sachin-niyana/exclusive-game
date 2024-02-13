"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "./Helper";
import CommonButtonTwo from "./CommonButtonTwo";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars4 } from "react-icons/hi2";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="bg-Rich-Black bg-opacity-60 p-4 flex-grow-0">
      <div className="flex items-center justify-between container max-w-[1152px] mx-auto px-3">
        <Image
          src="/assets/webp/logo.webp"
          width={150}
          height={43}
          alt="Logo"
          className="h-8 sm:w-[210px] sm:h-[43px]"
        />
        <ul className="hidden lg:flex gap-7 ">
          {navLink.map((value, index) => {
            return (
              <li key={index}>
                <Link
                  className="text-white font-inter font-medium sm:text-sm text-xsm opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                  key={index}
                  href={value.path}
                >
                  {value.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
          <CommonButtonTwo
            content="Acceso"
            borderColor="border-white"
            textColor="text-white"
            bgColor="bg-transparent"
          />
        </div>
        <button
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <HiOutlineBars4 />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-white text-sm absolute top-6 right-5"
            onClick={sidebarHandler}
          >
            <RxCross1 />
          </button>
          <ul className="flex flex-col items-center space-y-4 my-5">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-white font-inter font-medium sm:text-sm text-xsm opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                    key={index}
                    href={value.path}
                    onClick={sidebarHandler}
                  >
                    {value.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <CommonButtonTwo content="Acceso" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
