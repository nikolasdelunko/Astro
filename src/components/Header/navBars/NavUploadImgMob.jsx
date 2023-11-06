import React from "react";
import ArrowBackMob from "../../Theme/icons/ArrowBackMobile";
import { useNavigate } from "react-router-dom";
import Cross from "../../Theme/icons/Cross";
import { setModalSticker } from "../../../store/helpersStore";

export default function NavUploadImg({ nameHead = "Caricature Style" }) {
  const navigate = useNavigate();
  const modalSticker = false;

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div className="flex w-[100%] items-center justify-center bg-main-color px-[64px] pb-[33px] pt-[27px] max-[420px]:px-[5%]">
      <div className="flex items-center">
        <div
          className="absolute left-[16px] cursor-pointer"
          onClick={handleGoBack}
        >
          <ArrowBackMob />
        </div>
        <div>
          <h1 className="font-mainText text-[18px] text-[#FFFFFF]">
            {nameHead}
          </h1>
        </div>
        {modalSticker && (
          <div
            className="absolute right-[20px] top-[28px] h-[24px] w-[24px] cursor-pointer rounded-[50%] bg-[#EBB268]"
            onClick={() => {
              setModalSticker(false);
            }}
          >
            <Cross />
          </div>
        )}
      </div>
    </div>
  );
}
