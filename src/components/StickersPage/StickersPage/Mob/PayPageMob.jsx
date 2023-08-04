import React from "react";
import Payment from "../../../Checkout/Stripe/index";
import NavUploadImgMob from "../../../Header/navBars/NavUploadImgMob";

export default function PayPageMob() {
  const data = { total: 49 };

  return (
    <div className="bg-modal top-0 left-0 w-[100%] h-[100%] block fixed z-50 overflow-y-auto overflow-x-hidden">
      <div
        className="bg-[#FFFFFF] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <NavUploadImgMob nameHead={"Purchase Style"} />
        <div className="flex flex-col items-center justify-center px-[5%]">
          <div className="w-[100%]">
            <div className="mt-[32px] max-w-[408px] pr-[32px]">
              <h1 className="font-textBtn text-[24px] text-[#2D061B] text-left pb-[37px]">
                Purchase your style, unlock your &nbsp;
                <span className="text-[#EBB268]">stunning stickers</span>
              </h1>
              <div className="pb-[32px]">
                <Payment data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
