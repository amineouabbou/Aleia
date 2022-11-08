import Image from "next/image";
import React from "react";

export interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex">
      <a
        className=" text-[14px] md:text-[20px] lg:text-[22px] flex  items-center justify-center font-poppins font-semibold h-[40px] md:h-[58px] lg:h-[66px] px-[10px]  border-[1.5px] border-[#0A0A0A] hover:bg-black hover:text-white group"
        href="#"
      >
        <span>{title}</span>
        <span className="ml-[10px] group-hover:invert transition-all duration-200">
          <Image
            className="md:w-[52px]"
            src="/icons/arrow.svg"
            width="31"
            height="2"
            alt=""
          />
        </span>
      </a>
    </div>
  );
};

export default Button;
