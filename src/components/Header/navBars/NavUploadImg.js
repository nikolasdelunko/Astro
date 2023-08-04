import React from "react";
import StickerPal from "../../Theme/Icons/StickerPalLogo";
import Logo from "../../Theme/Icons/Logo";
import { useSelector } from "react-redux";

export default function NavUploadImg() {
  const listPhoto = useSelector((state) => state.stickers.client);
  const uploaded = listPhoto ? listPhoto.length : 0;
  return (
    <div className="flex items-center justify-between px-[64px] max-[420px]:px-[5%] pb-[33px] pt-[27px] w-[100%] bg-main-color">
      <div className="items-center flex">
        <div className="cursor-pointer">
          <a href="/stickers-page" className="flex items-center gap-[8px]">
            <Logo />
            <StickerPal />
          </a>
        </div>
      </div>
      <div className="items-center cursor-pointer">
        <h1 className="text-[#ECECEC] text-[24px] font-textBtn">
          Caricature Style
        </h1>
      </div>
      <div className="cursor-pointer">
        <h2 className="text-[#ECECEC] text-[14px] font-textBtn">
          Upload times: {uploaded}
        </h2>
      </div>
    </div>
  );
}
