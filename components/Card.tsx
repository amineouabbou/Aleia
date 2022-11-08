import Image from "next/image";
import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { likePost, Property } from "../redux/slices/propertiesSlice";
import Button from "./html/Button";

export interface Props {
  data: Property;
}

const Card: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const handleLike = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    id: any
  ) => {
    e.preventDefault();
    dispatch(likePost(id));
  };

  const generateSize = () => {
    if (data.style === "one") {
      return "md:h-[293px]";
    } else if (data.style === "two") {
      return "md:h-[345px]";
    } else if (data.style === "three") {
      return "md:h-[378px]";
    } else if (data.style === "four") {
      return "md:h-[260px]";
    } else {
      return "";
    }
  };

  return (
    <div className="Card relative md:grayscale hover:grayscale-0 transition-all duration-500">
      <div className={`img-wrap relative h-[200px] ${generateSize()}`}>
        <div className="bg-gradient-to-b from-[#0A0A0A]/0 to-[#0A0A0A]/40 absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto w-full h-full z-10"></div>
        <Image src={data.photoUrl} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="like absolute top-[9px] right-[9px] z-20">
        {data.liked && (
          <div className="absolute w-full top-0 -left-[25px] bottom-0 my-auto text-center xs:text-[12px] font-bold text-white">
            1
          </div>
        )}
        <a
          className="hover:opacity-60"
          href="#"
          onClick={(e) => handleLike(e, data.id)}
        >
          <img
            className="w-[17px] h-[15px] md:w-[26px] md:h-[24px] hover:scale-105 transition-all duration-300"
            src="/icons/heart.png"
            width={26}
            height={24}
            alt=""
          />
        </a>
      </div>
      <div className="flex w-full md:absolute bottom-0 leading-[33px] py-[5px] md:py-[10px] px-[10px] md:px-[25px] md:text-white z-20">
        <div className="font-bold text-[14px] md:text-[18px] lg:text-[22px]">
          {data.price}
        </div>
        <div className="ml-auto font-medium text-[12px] md:text-[16px] lg:text-[20px]">
          {data.adress}
        </div>
      </div>
      <div className="md:hidden flex justify-center">
        <a
          className="h-[31px] inline-block bg-[#0A0A0A] text-[12px] font-semibold text-center leading-[30px] text-[#F7F7F7] px-[10px]"
          href="#"
        >
          View Details +
        </a>
      </div>
    </div>
  );
};

export default Card;
