import React, { useRef } from "react";
import DropDownUploadImg from "../../Theme/Icons/DropDownUploadImg";
import { link } from "../../../utils/Api/url";
import Regenerate from "../../Theme/Icons/Regenerate";
import UploadImageArrowRight from "../../Theme/Icons/UploadImageArrowRight";
import UploadImageArrowLeft from "../../Theme/Icons/UploadImageArrowLeft";
import InfoUploadImage from "../../Theme/Icons/InfoUploadImage";
import useUpload from "../../../utils/customHooks/use-upload";
import { useDispatch } from "react-redux";
import { setModalSticker } from "../../../store/helpers/helpersSlice";
import DownloadIco from "../../Theme/Icons/DownloadIco";

export default function UploadImageMob({ photo }) {
  const filePiker = useRef(null);
  const { handleUpload, listStickers, uploadImage } = useUpload();
  const dispatch = useDispatch();

  const page = "1/1";

  const handleChange = (e) => {
    handleUpload(e.target.files);
  };
  const handleSelect = () => {
    filePiker.current.click();
  };

  return (
    <div className="bg-[#EEECEA]">
      <div className="flex justify-between px-[5%] pt-[26px]">
        <div>
          <div className="border rounded-lg border-gray-300 bg-white flex w-120 p-2 items-center gap-4">
            <select className="flex-grow outline-none appearance-none bg-transparent text-[12px] font-textSec">
              <option value="option1" className="text-[12px] font-textSec">
                1st Picture
              </option>
              <option value="option2" className="text-[12px] font-textSec">
                2 Picture
              </option>
              <option value="option3" className="text-[12px] font-textSec">
                3 Picture
              </option>
            </select>
            <DropDownUploadImg />
          </div>
        </div>
        <div>
          <input
            ref={filePiker}
            type="file"
            multiple
            name="photos"
            className="overflow-hidden w-0 h-0 opacity-0 absolute"
            onChange={handleChange}
            accept="image/*, .png, .jpg, .gif, .web,"
          />
          <button
            className="btn-second px-[16px] py-[7px] text-[12px] text-[#EBB268] border-[1px] font-textBtn"
            onClick={handleSelect}
          >
            Upload New Image
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-[31px]">
        <div>
          <img
            src={`${link}${photo}`}
            alt="Uploaded Image"
            className="w-[235px] h-[329px] rounded-[8px] shadow-md"
          />
        </div>
      </div>
      <div className="flex justify-center gap-[12px] pt-[30px]">
        <button className="btn px-[16px] py-[8px] text-[12px]  font-textBtn">
          Download All
        </button>
        <button
          className="btn-second px-[16px] py-[7px] text-[12px] text-[#EBB268] border-[1px] font-textBtn"
          onClick={() => uploadImage()}
        >
          <Regenerate />
          Regenerate All
        </button>
      </div>
      <div className="flex items-center absolute right-[20%]">
        <div className="pt-[5px]">
          <InfoUploadImage />
        </div>
        <p className="text-[#A4A4A4] text-[8px] font-textBtn pt-[7px]">
          Regenerated up to<span className="text-[#433E3E] px-[3px]">3</span>
          times
        </p>
      </div>
      <div className="flex justify-between px-[10%] pt-[47px] pb-[18px]">
        <div className="flex items-center">
          <p className="text-[#433E3E] text-[12px] font-textSec pr-[35px]">
            15 Stickers for you
          </p>
        </div>
        <div className="flex items-center gap-[19px]">
          <div className="cursor-pointer">
            <UploadImageArrowLeft />
          </div>
          <span className="text-[#433E3E] text-[12px]">{page}</span>
          <div className="cursor-pointer">
            <UploadImageArrowRight />
          </div>
        </div>
      </div>
      <div className="pt-[62px] flex flex-wrap px-[5%] gap-[15px] pb-[361px]">
        {listStickers?.map((stickers) => (
          <div className="flex flex-col items-center">
            <img
              src={stickers}
              alt="stickersImage"
              className="w-[108px] h-[108px]"
            />
            <button
              className="btn px-[16px] py-[10px] mt-[34px] text-[14px]"
              onClick={() => {
                dispatch(setModalSticker(true));
              }}
            >
              <DownloadIco />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
