import Image from "next/image";
import React, { useEffect } from "react";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { MENU } from "../data/menu";
import Togglemenu from "./Togglemenu";

const Header = () => {
  /* About us */
  const opened = useSelector((state: RootState) => state.menu.opened);

  useEffect(() => {
    if (opened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [opened]);

  return (
    <header className="py-[20px] md:py-[50px]">
      <div className="container mx-auto md:flex items-end">
        <div className="left-part flex md:mr-[59px] items-center">
          <div className="logo-box w-[77px] h-[20px] md:w-[121px]  md:h-[33px] relative">
            <Image layout="fill" src="/logo.svg" alt="ALEIA" />
          </div>
          <Togglemenu />
        </div>

        <div
          className={`flex flex-col md:flex-row items-end grow xs:bg-white xs:fixed xs:w-full xs:top-[72px] xs:bottom-0 xs:my-auto xs:z-50 xs:right-0 xs:h-[calc(100%_-_72px)] xs:p-[20px] transition-all duration-500 ${
            opened ? "xs:-left-0" : "xs:-left-[100%]"
          }`}
        >
          <nav className="md:text-[18px] lg:text-[20px] xs:w-full">
            <ul className="md:flex items-center gap-x-[40px]">
              {MENU.map((item, index) => (
                <li key={index} className="xs:my-[20px]">
                  <a
                    className={`xs:text-[28px] font-openSans xs:leading-[38px] ${
                      item.isActive
                        ? "xs:font-bold xs:underline"
                        : " xs:font-semibold"
                    }`}
                    href="#"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lang-box md:ml-auto xs:mt-auto xs:w-full">
            <ul className="flex items-center text-[20px]">
              <li>
                <span className=" font-bold">En</span>
              </li>
              <li className="font mx-[3px]">|</li>
              <li>
                <a className="font-semibold" href="#">
                  Fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
