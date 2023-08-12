import React from "react";
// import { useSelector } from "react-redux";

export default function Footer({page}) {
  // const page = useSelector((state) => state.helpers.page);

  if (page === "UploadImage") return null;
  else {
    return (
      <div className="flex items-center justify-between px-[60px] py-[35px]  bg-main-color w-[100%] absolute bottom-0 max-[420px]:flex-col max-[420px]:justify-center max-[420px]:text-center max-[420px]:pb-[235px]  max-[420px]:shadow-2xl max-[420px]:shadow-[#EBB268]">
        <div className="flex items-center">
          {page !== "StickerPal" ? (
            <img src={"/Img/logo.png"} alt="Logo" />
          ) : (
            <h1 className="text-[#FFFFFF] text-[18px] font-textBtn">
              MyStickerPal
            </h1>
          )}
        </div>
        <div>
          <p className="text-[#FFFFFF] text-[16px] font-main max-[420px]:py-[32px]">
            © 2023 Grazy Prints. All rights reserved
          </p>
        </div>
      </div>
    );
  }
}
