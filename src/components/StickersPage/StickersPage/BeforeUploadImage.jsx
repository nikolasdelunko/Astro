import React, { useRef } from "react";
import UploadIco from "../../Theme/icons/Upload";
import useResize from "../../../utils/customHooks/use-resize";
import useUpload from "../../../utils/customHooks/use-upload";

export default function UploadImage() {
  const filePiker = useRef(null);
  const {
    handleUpload,
    dropHandler,
    dragLeaveHandler,
    dragStartHandler,
    drag,
  } = useUpload();
  const mob = useResize();

  const handleChange = (e) => {
    handleUpload(e.target.files);
  };

  const handleSelect = () => {
    filePiker.current.click();
  };

  return (
    <div className="h-[1024px] w-[100%] bg-uploadImage max-[420px]:bg-none">
      <div className="flex flex-col justify-center items-center pt-[50px]">
        <div className="flex pb-[27px]">
          <h1 className="font-textBtn text-[#000000] text-[24px] font-bold max-[420px]:text-[14px] max-[420px]:max-w-[268px] max-[420px]:text-center">
            Upload Image to Create Stunning Sticker
          </h1>
        </div>
        <div className="bg-[#F7E5CE] ">
          <div
            className="my-[32px] mx-[32px] max-[420px]:mx-0 max-[420px]:my-0 bg-white border-2 border-dashed border-amber-300 shadow-md rounded-lg w-[838px] h-[438px] max-[420px]:max-w-[311px] max-[420px]:max-h-[189px] flex items-center justify-center"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => dropHandler(e)}
          >
            <div className="flex flex-col items-center justify-center">
              <input
                ref={filePiker}
                type="file"
                multiple
                name="photos"
                className="overflow-hidden w-0 h-0 opacity-0"
                onChange={handleChange}
                accept="image/*, .png, .jpg, .gif, .web,"
              />
              {mob ? (
                <h2 className="font-textBtn text-[14px] font-bold text-center text-[#767676]">
                  Upload Image
                </h2>
              ) : (
                <button
                  className="btn flex items-center justify-center  py-[14px] px-[16px] "
                  onClick={handleSelect}
                >
                  <UploadIco />
                  Upload Image
                </button>
              )}
              {drag ? (
                <div>
                  <h1 className="font-textBtn text-[14px] font-bold text-center text-[#767676]">
                    release the button to download
                  </h1>
                  <p className="font-textBtn text-[14px] text-center text-[#767676]">
                    jpg/png/jpeg. Max Size 5MB or 5000*500
                  </p>
                </div>
              ) : (
                <div>
                  {!mob && (
                    <h1 className="font-textBtn text-[14px] font-bold text-center text-[#767676]">
                      or Drop an Image
                    </h1>
                  )}
                  <p className="font-textBtn text-[14px] text-center text-[#767676] max-[420px]:text-[12px]">
                    jpg/png/jpeg. Max Size 5MB or 5000*500
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {mob && (
          <div className="pt-[37px]">
            <button
              className="btn flex items-center justify-center  py-[14px] px-[16px] "
              onClick={handleSelect}
            >
              <UploadIco />
              Upload Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
