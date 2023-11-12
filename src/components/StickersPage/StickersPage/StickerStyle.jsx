import React from "react";

export default function StickerStyle() {
  return (
    <div className="pb-[131px]">
      <div className=" flex flex-col items-center justify-center pb-[55px]">
        <div className="flex flex-row items-start justify-center rounded-full  bg-orange-300 bg-opacity-40 px-[16px] py-[4px]">
          <p className="font-poppins text-base font-medium leading-6 text-orange-300">
            Sticker Style
          </p>
        </div>
        <h1 className="text-textBtn w-[600px] pt-[21px] text-center text-[32px] font-[500] text-[#2D061B]">
          Design Your Own Sticker With a &nbsp;
          <span className="text-[#EBB268]">Stunning</span> and &nbsp;
          <span className="text-[#EBB268]">Trendy Style</span>
        </h1>
        <p className="w-[517px] pt-[16px] text-center font-textBtn text-base font-medium leading-6 text-[#767676]">
          Powered by AI, you can make stickers in various styles which make your
          stickers cooler and more unique. Each style is available for
          <span className="text-[#EBB268]">$4.99</span>
          unlocking endless possibilities for self-expression
        </p>
      </div>
      <div className="flex items-center justify-center gap-[32px]">
        <div className="box-border w-[419px]  rounded-lg bg-gray-200">
          <div className="from-[rgba(0, 0, 0, 0.42)] rounded-tl-8 rounded-tr-8 relative h-[371px] w-[100%] bg-gradient-to-b via-transparent to-transparent">
            <img
              className="rounded-tl-[8px] rounded-tr-[8px]"
              src={"/Img/after1.png"}
              alt="DownloadImage"
            />
            <img
              className="absolute bottom-[16px] left-[16px]"
              src={"/Img/before1.png"}
              alt="DownloadImage"
            />
          </div>
          <div className="px-[5%] pt-[32px]">
            <h2 className="text-textBtn text-[16px] font-bold text-[#2D061B]">
              Chibi Style
            </h2>
            <p className="font-textBtn text-[16px] text-[#767676]">
              Convert your photo to cartoon style sticker
            </p>
            <a href="/stickers-page-upload">
              <button className="btn mb-[16px] mt-[24px] flex w-[100%] items-center justify-center">
                Create Sticker
              </button>
            </a>
          </div>
        </div>
        <div className="box-border w-[419px]  rounded-lg bg-gray-200">
          <div className="from-[rgba(0, 0, 0, 0.42)] rounded-tl-8 rounded-tr-8 relative h-[371px] w-[100%] bg-gradient-to-b via-transparent to-transparent">
            <img
              className="rounded-tl-[8px] rounded-tr-[8px]"
              src={"/Img/download1.png"}
              alt="DownloadImage"
            />
            <img
              className="absolute bottom-[16px] left-[16px]"
              src={"/Img/before12.png"}
              alt="DownloadImage"
            />
          </div>
          <div className="px-[5%] pt-[32px]">
            <h2 className="text-textBtn text-[16px] font-bold text-[#2D061B]">
              Chibi Style
            </h2>
            <p className="font-textBtn text-[16px] text-[#767676]">
              Convert your photo to cartoon style sticker
            </p>
            <a href="/stickers-page-upload">
              <button className="btn mb-[16px] mt-[24px] flex w-[100%] items-center justify-center">
                Create Sticker
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
