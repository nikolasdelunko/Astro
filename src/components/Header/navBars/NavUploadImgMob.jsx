import React from "react";
import ArrowBackMob from "../../Theme/icons/ArrowBackMobile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cross from "../../Theme/icons/Cross";
// import { setModalSticker } from "../../../store/helpers/helpersSlice";

export default function NavUploadImg({ nameHead = "Caricature Style" }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const modalSticker = useSelector((state) => state.helpers.modalSticker);
	const modalSticker = false

  const handleGoBack = () => {
    navigate(-1);
  };

	//! dispatch

  return (
    <div className="flex items-center justify-center px-[64px] max-[420px]:px-[5%] pb-[33px] pt-[27px] w-[100%] bg-main-color">
      <div className="items-center flex">
        <div
          className="absolute left-[16px] cursor-pointer"
          onClick={handleGoBack}
        >
          <ArrowBackMob />
        </div>
        <div>
          <h1 className="text-[#FFFFFF] text-[18px] font-mainText">
            {nameHead}
          </h1>
        </div>
        {modalSticker && (
          <div
            className="absolute w-[24px] h-[24px] bg-[#EBB268] rounded-[50%] right-[20px] top-[28px] cursor-pointer"
            onClick={() => {
              // dispatch(setModalSticker(false));
            }}
          >
            <Cross />
          </div>
        )}
      </div>
    </div>
  );
}
