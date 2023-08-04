import React from "react";
import { NavLink } from "react-router-dom";

export default function StickerStyle() {
  return (
    <div className="pb-[131px]">
      <div className=" flex flex-col justify-center items-center pb-[55px]">
        <div className="flex flex-row justify-center items-start px-[16px]  py-[4px] bg-orange-300 bg-opacity-40 rounded-full">
          <p className="font-poppins font-medium text-base leading-6 text-orange-300">
            Sticker Style
          </p>
        </div>
        <h1 className="text-textBtn font-[500] text-center text-[#2D061B] w-[600px] pt-[21px] text-[32px]">
          Design Your Own Sticker With a &nbsp;
          <span className="text-[#EBB268]">Stunning</span> and &nbsp;
          <span className="text-[#EBB268]">Trendy Style</span>
        </h1>
        <p className="pt-[16px] w-[517px] font-textBtn font-medium text-base leading-6 text-center text-[#767676]">
          Powered by AI, you can make stickers in various styles which make your
          stickers cooler and more unique. Each style is available for
          <span className="text-[#EBB268]">$4.99</span>
          unlocking endless possibilities for self-expression
        </p>
      </div>
      <div className="flex gap-[32px] items-center justify-center">
        <div className="box-border w-[419px]  bg-gray-200 rounded-lg">
          <div className="bg-gradient-to-b from-[rgba(0, 0, 0, 0.42)] via-transparent to-transparent rounded-tl-8 rounded-tr-8 h-[371px] w-[100%] relative">
            <img
              className="rounded-tl-[8px] rounded-tr-[8px]"
              src={require("../Theme/Img/after1.png")}
              alt="DownloadImage"
            />
            <img
              className="absolute bottom-[16px] left-[16px]"
              src={require("../Theme/Img/before1.png")}
              alt="DownloadImage"
            />
          </div>
          <div className="px-[5%] pt-[32px]">
            <h2 className="text-textBtn text-[16px] text-[#2D061B] font-bold">
              Chibi Style
            </h2>
            <p className="font-textBtn text-[16px] text-[#767676]">
              Convert your photo to cartoon style sticker
            </p>
            <NavLink to={"/stickers-page-upload"}>
              <button className="btn flex items-center justify-center w-[100%] mt-[24px] mb-[16px]">
                Create Sticker
              </button>
            </NavLink>
          </div>
        </div>
        <div className="box-border w-[419px]  bg-gray-200 rounded-lg">
          <div className="bg-gradient-to-b from-[rgba(0, 0, 0, 0.42)] via-transparent to-transparent rounded-tl-8 rounded-tr-8 h-[371px] w-[100%] relative">
            <img
              className="rounded-tl-[8px] rounded-tr-[8px]"
              src={require("../Theme/Img/download1.png")}
              alt="DownloadImage"
            />
            <img
              className="absolute bottom-[16px] left-[16px]"
              src={require("../Theme/Img/before12.png")}
              alt="DownloadImage"
            />
          </div>
          <div className="px-[5%] pt-[32px]">
            <h2 className="text-textBtn text-[16px] text-[#2D061B] font-bold">
              Chibi Style
            </h2>
            <p className="font-textBtn text-[16px] text-[#767676]">
              Convert your photo to cartoon style sticker
            </p>
            <NavLink to={"/stickers-page-upload"}>
              <button className="btn flex items-center justify-center w-[100%] mt-[24px] mb-[16px]">
                Create Sticker
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
