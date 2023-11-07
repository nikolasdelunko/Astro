import React from "react";
import { page } from "../../store/helpersStore";

export default function Footer({ page }) {
  if (page === "UploadImage") return null;
  else {
    return (
      <div className="absolute bottom-0 flex w-[100%] items-center  justify-between bg-main-color px-[60px] py-[35px] max-[420px]:flex-col max-[420px]:justify-center max-[420px]:pb-[235px] max-[420px]:text-center  max-[420px]:shadow-2xl max-[420px]:shadow-[#EBB268]">
        <div className="flex items-center">
          {page !== "StickerPal" ? (
            <img src={"/Img/logo.png"} alt="Logo" />
          ) : (
            <h1 className="font-textBtn text-[18px] text-[#FFFFFF]">
              MyStickerPal
            </h1>
          )}
        </div>
        <div>
          <p className="font-main text-[16px] text-[#FFFFFF] max-[420px]:py-[32px]">
            © 2023 Grazy Prints. All rights reserved
          </p>
        </div>
      </div>
    );
  }
}
