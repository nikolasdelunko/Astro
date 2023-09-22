import React from "react";
// import { useDispatch } from "react-redux";
// import { setModalStickerMobile } from "../../store/helpers/helpersSlice";
import Cross from "../Theme/icons/Cross";
import {setModalStickerMobile} from "../../store/helpersStore"

export default function ModalMobSticker({ content }) {
  // const dispatch = useDispatch();
	//! dispatch

  return (
    <div
      className="bg-modal top-0 left-0 w-[100%] h-[80%] block fixed z-50 overflow-y-auto"
      onClick={(e) => {
        // dispatch(setModalStickerMobile(false));
				setModalStickerMobile(false)
      }}
    >
      <div
        className="bg-[#FFFFFF] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className="absolute w-[24px] h-[24px] bg-[#F9E3C6] rounded-[50%] left-[1em] top-[1.5em] cursor-pointer"
            onClick={() => {
              // dispatch(setModalStickerMobile(false));
							setModalStickerMobile(false)
            }}
          >
            <Cross />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
