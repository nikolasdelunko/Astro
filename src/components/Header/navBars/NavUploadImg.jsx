import React from "react";
import StickerPal from "../../Theme/icons/StickerPalLogo";
import Logo from "../../Theme/icons/Logo";
import { stickersStore } from "../../../store/stickers";

//! dispatch

export default function NavUploadImg() {
  const uploaded = stickersStore.listPhoto ? listPhoto.length : 0;

  console.log("NavUploadImage", stickersStore.listPhoto);

  return (
    <div className="flex w-[100%] items-center justify-between bg-main-color px-[64px] pb-[33px] pt-[27px] max-[420px]:px-[5%]">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <a href="/stickers-page" className="flex items-center gap-[8px]">
            <Logo />
            <StickerPal />
          </a>
        </div>
      </div>
      <div className="cursor-pointer items-center">
        <h1 className="font-textBtn text-[24px] text-[#ECECEC]">
          Caricature Style
        </h1>
      </div>
      <div className="cursor-pointer">
        <h2 className="font-textBtn text-[14px] text-[#ECECEC]">
          Upload times: {uploaded}
        </h2>
      </div>
    </div>
  );
}
