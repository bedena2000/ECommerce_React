import React from "react";

// Images
import JblImage from "@/assets/img/jbl_image.png";
import SaleTimer from "@/components/shared/SaleTimer";
import Button from "@/components/shared/Button";
import { Link } from "react-router";

export default function AdvertisingSecondSection() {
  return (
    <div className="mt-[140px]">
      <div className="customContainer  bg-black">
        <div className="flex-col flex lg:flex-row items-center p-[37px] gap-[27px]">
          <div>
            <p className="text-[#00FF66] text-xs lg:text-base font-medium">Categories</p>
            <p className=" text-2xl lg:text-5xl text-white font-medium mt-8 ">
              Enhance Your Music Experience
            </p>
            <div className="mt-[32px] text-white">
              <SaleTimer days={5} hours={23} minutes={59} seconds={35} />
            </div>
            <Link to="/products">
              <Button
                title="Buy Now"
                classNames="text-white bg-[#00FF66] px-[48px] py-[16px] rounded-[2px] mt-[56px]"
              />
            </Link>
          </div>
          <div className="relative inline-block lg:mt-0 mt-10">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-lg animate-pulse"></div>
            <img src={JblImage} alt="JblImage" className="relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
