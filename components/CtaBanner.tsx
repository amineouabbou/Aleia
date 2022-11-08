import React from "react";
import Button from "./html/Button";

const CtaBanner = () => {
  return (
    <div className="container mx-auto mt-[20px] md:mt-[50px] mb-[50px] lg:mb-[100px]">
      <div className="md:flex items-center">
        <h2 className="font-bold font-poppins text-[26px] md:text-[30px] lg:text-[40px] leading-[39px] md:leading-[45px] lg:leading-[60px] text-[#0A0A0A] mb-[35px] md:mb-0">
          We are an award winning <br className="hidden md:block lg:hidden" />{" "}
          interior <br className="hidden lg:block" />
          design Agency
        </h2>
        <div className="ml-auto">
          <Button title="View all properties" />
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
