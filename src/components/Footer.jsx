import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./common/Helper";
import { Facebook, Instagram, Linkedin } from "./common/Icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black relative overflow-hidden">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[120px] h-[120px] rounded-full blur-[70px] top-[35%] right-[-3%] pointer-events-none"></div>
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[184px] h-[184px] rounded-full blur-[108px] bottom-[-3%] left-[-3%] pointer-events-none"></div>
      <div className="container max-w-[1152px] mx-auto px-3 md:pt-16 sm:pt-10 pt-7 pb-10">
        <div className="flex flex-wrap">
          <div className="lg:w-4/12 w-full">
            <Image
              src="/assets/webp/logo.webp"
              width={210}
              height={43}
              className=" w-full mb-4 max-w-[210px]"
              alt="logo"
            />
            <p className=" text-white max-w-[370px] font-Inter font-medium pe-3 sm:text-sm text-xsm mb-6 opacity-70">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            <div className="flex gap-3 items-center">
              <Link
                target="_blank"
                aria-label={<Instagram />}
                href="https://www.instagram.com/"
              >
                <Instagram />
              </Link>
              <Link
                target="_blank"
                aria-label={<Facebook />}
                href="https://www.facebook.com/"
              >
                <Facebook />
              </Link>
              <Link
                target="_blank"
                aria-label={<Linkedin />}
                href="https://in.linkedin.com/"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="lg:w-8/12 w-full flex flex-wrap xl:mt-0 mt-5">
            {footerLinks.map((value, index) => {
              return (
                <ul
                  key={index}
                  className="md:w-4/12 ps-0 min-[500px]:w-6/12 flex flex-col w-full items-start gap-2 xl:ps-10 md:mb-0 mb-5"
                >
                  <li className=" font-inter font-bold sm:text-sm text-xsm text-white mb-2">
                    {value.tittle}
                  </li>
                  {value.link.map((subValue, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <Link
                          href={subValue.path}
                          className="flex items-center gap-2 opacity-70 text-white font-medium sm:text-sm text-xsm hover:opacity-100 duration-100 ease-in-out transition-all"
                        >
                          {subValue.icon} {subValue.content}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center py-5 border-t-[1px] border-[#191919] text-center gap-2 opacity-70 text-white font-medium sm:text-sm text-xsm hover:opacity-100 duration-100 ease-in-out transition-all px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
    </div>
  );
};
export default Footer;
