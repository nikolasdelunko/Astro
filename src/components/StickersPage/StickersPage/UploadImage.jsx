import React, { useEffect } from "react";
import { link } from "../../../utils/Api/url";
import Regenerate from "../../Theme/icons/Regenerate";
import UploadImageArrowRight from "../../Theme/icons/UploadImageArrowRight";
import UploadImageArrowLeft from "../../Theme/icons/UploadImageArrowLeft";
import InfoUploadImage from "../../Theme/icons/InfoUploadImage";
import useUpload from "../../../utils/customHooks/use-upload";
import { setModalSticker } from "../../../store/helpersStore";
import { stickersStore } from "../../../store/stickers";
import { DeletePhoto } from "../../../utils/Api/stickerApi";

export default function UploadedImage({ photo }) {
  const page = "1/1";
  const listPhoto = stickersStore.listPhoto
  const pay = stickersStore.pay


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
      <div className="flex flex-col items-center justify-center pt-[50px]">
        <div className="flex pb-[27px]">
          <h1 className="font-textBtn text-[24px] font-bold text-[#000000] max-[420px]:max-w-[268px] max-[420px]:text-center max-[420px]:text-[14px]">
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
          <div className="mx-[32px] my-[32px] flex h-[438px] w-[838px] items-center justify-center rounded-lg border-2 border-dashed border-amber-300 bg-white shadow-md max-[420px]:mx-0 max-[420px]:my-0 max-[420px]:max-h-[189px] max-[420px]:max-w-[311px]">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={`${link}${photo}`}
                  alt="Uploaded Image"
                  className="h-[329px] w-[235px] rounded-[8px]"
                />
              </div>
              {drag && (
                <div>
                  <h1 className="text-center font-textBtn text-[14px] font-bold text-[#767676]">
                    release the button to download
                  </h1>
                  <p className="text-center font-textBtn text-[14px] text-[#767676]">
                    jpg/png/jpeg. Max Size 5MB or 5000*500
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[10%] pt-[62px]">
        <div className="relative flex items-center">
          <p className="pr-[35px] font-textSec text-[18px] text-[#433E3E]">
            15 Stickers for you
          </p>
          <div className="flex items-center">
            <button className="btn mr-[7px] px-[16px] py-[14px]">
              Download All
            </button>
            <button
              className="btn-second border-[1px] px-[16px] py-[12px] font-textBtn text-[16px] text-[#EBB268]"
              onClick={() => uploadImage()}
            >
              <Regenerate />
              Regenerate All
            </button>
          </div>
          <div className="absolute right-[1%] top-[100%] flex items-center">
            <div className="pt-[5px]">
              <InfoUploadImage />
            </div>
            <p className="pt-[7px] font-textBtn text-[12px] text-[#A4A4A4]">
              Regenerated up to
              <span className="px-[3px] text-[#433E3E]">3</span>
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
      <div className="flex flex-wrap gap-[32px] px-[10%] pt-[62px]">
        {listStickers?.map((stickers) => (
          <div className="flex flex-col items-center">
            <img
              src={stickers}
              alt="stickersImage"
              className="h-[220px] w-[220px]"
            />
            <button
              className="btn mt-[34px] px-[16px] py-[10px] text-[14px]"
              onClick={() => {
                setModalSticker(true)
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
