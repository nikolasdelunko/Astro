import React from "react";
import { setModalStickerMobile } from "../../../../store/helpersStore";

export default function CaricatureStyle() {
  return (
    <div className="w-[100%]">
      <div>
        <img
          src={require("../../Theme/Img/mobile/Frame6Mob.png")}
          alt="CaricatureImgHead"
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="flex flex-col pb-[54px] pt-[34px]">
        <div className="flex flex-col items-center justify-center pb-[24px]">
          <h1 className="text-textBtn mb-[4px] text-[32px] font-[600] text-[#2D061B]">
            $4,99
          </h1>
          <p className="text-textBtn  text-[12px] font-medium leading-6 text-[#767676]">
            Create your own sticker with a Caricature Style
          </p>
        </div>
        <div className="flex flex-col items-start justify-start px-[16px] pb-[54px]">
          <p className="text-textBtn  text-[12px] font-medium leading-6 text-[#767676]">
            What you will get:
          </p>
          <ul className="ml-[18px] list-disc">
            <li className="text-textBtn  text-[14px] font-[400] leading-6 text-[#212121]">
              You will be able to upload images up to 3 times
            </li>
            <li className="text-textBtn  text-[14px] font-[400] leading-6 text-[#212121]">
              You will get 3 times the regeneration response for each uploaded
              image.
            </li>
            <li className="text-textBtn  text-[14px] font-[400] leading-6 text-[#212121]">
              Total you will get 30 stickers with 10 each in 1 generate process.
            </li>
            <li className="text-textBtn  text-[14px] font-[400] leading-6 text-[#212121]">
              You can download all the stickers.
            </li>
          </ul>
          <p className="text-textBtn pt-[16px]  text-[12px] font-medium leading-6 text-[#767676]">
            Discover the joy of self-expression with MyStickerPal, a
            one-of-a-kind sticker generator app crafted to bring your favorite
            moments and expressions to life in the most personal way.
          </p>
        </div>
        <div
          className="px-[5%] pb-[45px]"
          onClick={() => {
            setModalStickerMobile(false);
          }}
        >
          <a href="/stickers-page-upload">
            <button className="btn w-[100%] items-center justify-center">
              Purchase Style
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
