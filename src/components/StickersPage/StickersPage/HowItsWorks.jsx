import React from "react";
import { NavLink } from "react-router-dom";

export default function HowItsWorks() {
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center pb-[90px]">
        <div className="flex flex-row justify-center items-start px-[16px]  py-[4px] bg-orange-300 bg-opacity-40 rounded-full">
          <p className="font-poppins font-medium text-base leading-6 text-orange-300">
            How It Works
          </p>
        </div>
        <h1 className="text-textBtn font-[500] text-center text-[#2D061B] w-[813px] pt-[21px] text-[32px]">
          How to Make Sticker with&nbsp;
          <span className="text-[#EBB268]">MyStickerPal</span>
        </h1>
        <p className="pt-[16px] w-[517px] font-textBtn font-medium text-base leading-6 text-center text-[#767676]">
          Create stickers quickly and easily with just a few clicks. With AI's
          help, you can turn your image into the sticker you want in no time.
        </p>
      </div>
      <div className="flex justify-between px-[10%]">
        <div>
          <img
            src={require("../Theme/Img/Step11.png")}
            alt="HowItsWork leftSide"
          />
        </div>
        <div className="w-[512px] flex flex-col justify-start  text-right pb-[157px]">
          <h1 className="text-textBtn font-[500] text-left  text-[#2D061B] pt-[21px] pb-[24px] text-[32px]">
            Step 1: Select and purchase your sticker style
          </h1>
          <p className="font-textBtn font-medium text-base text-left pb-[64px] leading-6 text-[#767676]">
            MyStickerPal provides various popular sticker styles to help you
            keep up with the trend. Just select one of the styles, then purchase
            <span className="text-[#EBB268]">$4.99</span> for each style you
            choose.
          </p>
          <NavLink to={"/stickers-page-upload"}>
            <button className="btn flex justify-start">Create Sticker</button>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between px-[10%] pb-[119px]">
        <div className="w-[688px] flex flex-col justify-start text-right">
          <h1 className="text-textBtn font-[500] text-left  text-[#2D061B] pt-[21px] pb-[24px] text-[32px]">
            Step 2: Upload and Processing your image for sticker
          </h1>
          <p className="font-textBtn font-medium text-base text-left pb-[64px] leading-6 text-[#767676]">
            Have an idea of what kind of sticker you intend to create. Choose
            the picture that fits your idea from your local file or drag & drop
            into the surface.
          </p>
          <NavLink to={"/stickers-page-upload"}>
            <button className="btn flex items-center justify-center">
              Create Sticker
            </button>
          </NavLink>
        </div>
        <div>
          <img
            src={require("../Theme/Img/Step21.png")}
            alt="HowItsWork RightSide"
          />
        </div>
      </div>
      <div className="flex justify-between px-[10%] pb-[132px]">
        <div>
          <img
            src={require("../Theme/Img/Step31.png")}
            alt="HowItsWork leftSide"
          />
        </div>
        <div className="w-[512px] flex flex-col justify-start  text-right pb-[157px]">
          <h1 className="text-textBtn font-[500] text-left  text-[#2D061B] pt-[21px] pb-[24px] text-[32px]">
            Step 3: Receive Sticker with Various Scenario
          </h1>
          <p className="font-textBtn font-medium text-base text-left pb-[64px] leading-6 text-[#767676]">
            After uploading the image, the system powered by AI will process
            your image with various scenarios of different facial expressions
            such as (laughing, crying, giving flower, blowing kisses, etc)
          </p>
          <NavLink to={"/stickers-page-upload"}>
            <button className="btn flex justify-start">Create Sticker</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
