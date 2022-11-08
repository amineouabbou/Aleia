import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../redux/slices/menuSlice";
import { RootState } from "../redux/store";

const Togglemenu = () => {
  const dispatch = useDispatch();
  const opened = useSelector((state: RootState) => state.menu.opened);

  const handleMenu = () => {
    dispatch(toggleOpen());
    console.log("clicked");
  };

  return (
    <div
      onClick={handleMenu}
      className="flex flex-col items-end w-[20px] ml-auto md:hidden"
    >
      <div
        className={`h-[1px] transition-all duration-500 bg-black origin-top-right  ${
          opened ? "-rotate-45 w-[20px]" : "w-[16px]"
        }`}
      ></div>
      <div
        className={`h-[1px]  bg-black w-[20px] transition-all duration-500 my-[5px] ${
          opened ? "w-0" : ""
        }`}
      ></div>
      <div
        className={`h-[1px] transition-all duration-500 bg-black origin-top-right  ${
          opened ? "rotate-45 w-[20px]" : "w-[8px]"
        }`}
      ></div>
    </div>
  );
};

export default Togglemenu;
