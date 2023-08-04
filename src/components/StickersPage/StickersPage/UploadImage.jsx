import React, { useEffect } from "react";
import { link } from "../../../utils/Api/url";
import Regenerate from "../../Theme/icons/Regenerate";
import UploadImageArrowRight from "../../Theme/icons/UploadImageArrowRight";
import UploadImageArrowLeft from "../../Theme/icons/UploadImageArrowLeft";
import InfoUploadImage from "../../Theme/icons/InfoUploadImage";
import useUpload from "../../../utils/customHooks/use-upload";
import { useDispatch, useSelector } from "react-redux";
// import { setModalSticker } from "../../store/helpers/helpersSlice";
import { DeletePhoto } from "../../../utils/Api/stickerApi";

export default function UploadedImage({ photo }) {
  const page = "1/1";
  // const listPhoto = useSelector((state) => state.stickers.listPhoto);
  // const pay = useSelector((state) => state.stickers.pay);
	const listPhoto = []
	const pay = false
  // const dispatch = useDispatch();
	//! dispatch

  const {
    dropHandler,
    dragLeaveHandler,
    dragStartHandler,
    drag,
    listStickers,
    uploadImage,
  } = useUpload();

  useEffect(() => {
    const handleBeforeUnload = async (e) => {
      if (pay) {
        await DeletePhoto(listPhoto.thumbnail[0]);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="h-[1024px] w-[100%]  max-[420px]:bg-none">
      <div className="flex flex-col justify-center items-center pt-[50px]">
        <div className="flex pb-[27px]">
          <h1 className="font-textBtn text-[#000000] text-[24px] font-bold max-[420px]:text-[14px] max-[420px]:max-w-[268px] max-[420px]:text-center">
            Upload Image to Create Stunning Sticker
          </h1>
        </div>
        <div
          className="bg-[#F7E5CE] "
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => dropHandler(e)}
        >
          <div className="my-[32px] mx-[32px] max-[420px]:mx-0 max-[420px]:my-0 bg-white border-2 border-dashed border-amber-300 shadow-md rounded-lg w-[838px] h-[438px] max-[420px]:max-w-[311px] max-[420px]:max-h-[189px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={`${link}${photo}`}
                  alt="Uploaded Image"
                  className="w-[235px] h-[329px] rounded-[8px]"
                />
              </div>
              {drag && (
                <div>
                  <h1 className="font-textBtn text-[14px] font-bold text-center text-[#767676]">
                    release the button to download
                  </h1>
                  <p className="font-textBtn text-[14px] text-center text-[#767676]">
                    jpg/png/jpeg. Max Size 5MB or 5000*500
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[10%] pt-[62px]">
        <div className="flex items-center relative">
          <p className="text-[#433E3E] text-[18px] font-textSec pr-[35px]">
            15 Stickers for you
          </p>
          <div className="flex items-center">
            <button className="btn px-[16px] py-[14px] mr-[7px]">
              Download All
            </button>
            <button
              className="btn-second px-[16px] py-[12px] text-[16px] text-[#EBB268] border-[1px] font-textBtn"
              onClick={() => uploadImage()}
            >
              <Regenerate />
              Regenerate All
            </button>
          </div>
          <div className="flex items-center absolute right-[1%] top-[100%]">
            <div className="pt-[5px]">
              <InfoUploadImage />
            </div>
            <p className="text-[#A4A4A4] text-[12px] font-textBtn pt-[7px]">
              Regenerated up to
              <span className="text-[#433E3E] px-[3px]">3</span>
              times
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[19px]">
          <div className="cursor-pointer">
            <UploadImageArrowLeft />
          </div>
          <span>{page}</span>
          <div className="cursor-pointer">
            <UploadImageArrowRight />
          </div>
        </div>
      </div>
      <div className="pt-[62px] flex flex-wrap px-[10%] gap-[32px]">
        {listStickers?.map((stickers) => (
          <div className="flex flex-col items-center">
            <img
              src={stickers}
              alt="stickersImage"
              className="w-[220px] h-[220px]"
            />
            <button
              className="btn px-[16px] py-[10px] mt-[34px] text-[14px]"
              onClick={() => {
                // dispatch(setModalSticker(true));
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
