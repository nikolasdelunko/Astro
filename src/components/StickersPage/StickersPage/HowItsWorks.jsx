import React from "react";

export default function HowItsWorks() {
  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center pb-[90px]">
        <div className="flex flex-row items-start justify-center rounded-full  bg-orange-300 bg-opacity-40 px-[16px] py-[4px]">
          <p className="font-poppins text-base font-medium leading-6 text-orange-300">
            How It Works
          </p>
        </div>
        <h1 className="text-textBtn w-[813px] pt-[21px] text-center text-[32px] font-[500] text-[#2D061B]">
          How to Make Sticker with&nbsp;
          <span className="text-[#EBB268]">MyStickerPal</span>
        </h1>
        <p className="w-[517px] pt-[16px] text-center font-textBtn text-base font-medium leading-6 text-[#767676]">
          Create stickers quickly and easily with just a few clicks. With AI's
          help, you can turn your image into the sticker you want in no time.
        </p>
      </div>
      <div className="flex justify-between px-[10%]">
        <div>
          <img src={"/Img/Step11.png"} alt="HowItsWork leftSide" />
        </div>
        <div className="flex w-[512px] flex-col justify-start  pb-[157px] text-right">
          <h1 className="text-textBtn pb-[24px] pt-[21px]  text-left text-[32px] font-[500] text-[#2D061B]">
            Step 1: Select and purchase your sticker style
          </h1>
          <p className="pb-[64px] text-left font-textBtn text-base font-medium leading-6 text-[#767676]">
            MyStickerPal provides various popular sticker styles to help you
            keep up with the trend. Just select one of the styles, then purchase
            <span className="text-[#EBB268]">$4.99</span> for each style you
            choose.
          </p>
          <a href="/stickers-page-upload">
            <button className="btn flex justify-start">Create Sticker</button>
          </a>
        </div>
      </div>
      <div className="flex justify-between px-[10%] pb-[119px]">
        <div className="flex w-[688px] flex-col justify-start text-right">
          <h1 className="text-textBtn pb-[24px] pt-[21px]  text-left text-[32px] font-[500] text-[#2D061B]">
            Step 2: Upload and Processing your image for sticker
          </h1>
          <p className="pb-[64px] text-left font-textBtn text-base font-medium leading-6 text-[#767676]">
            Have an idea of what kind of sticker you intend to create. Choose
            the picture that fits your idea from your local file or drag & drop
            into the surface.
          </p>
          <a href="/stickers-page-upload">
            <button className="btn flex items-center justify-center">
              Create Sticker
            </button>
          </a>
        </div>
        <div>
          <img src={"/Img/Step21.png"} alt="HowItsWork RightSide" />
        </div>
      </div>
      <div className="flex justify-between px-[10%] pb-[132px]">
        <div>
          <img src={"/Img/Step31.png"} alt="HowItsWork leftSide" />
        </div>
        <div className="flex w-[512px] flex-col justify-start  pb-[157px] text-right">
          <h1 className="text-textBtn pb-[24px] pt-[21px]  text-left text-[32px] font-[500] text-[#2D061B]">
            Step 3: Receive Sticker with Various Scenario
          </h1>
          <p className="pb-[64px] text-left font-textBtn text-base font-medium leading-6 text-[#767676]">
            After uploading the image, the system powered by AI will process
            your image with various scenarios of different facial expressions
            such as (laughing, crying, giving flower, blowing kisses, etc)
          </p>
          <a href="/stickers-page-upload">
            <button className="btn flex justify-start">Create Sticker</button>
          </a>
        </div>
      </div>
    </div>
  );
}
