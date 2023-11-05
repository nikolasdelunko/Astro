import React, { useEffect } from "react";
import RightSide from "./RightSide";
import { setPage } from "../../store/helpersStore";
import Payment from "./Stripe/index";

export default function PayCard() {
  useEffect(() => {
    setPage("payCard");
  }, []);

  return (
    <div className="flex flex-col pb-[239px]">
      <div className="flex py-[32px]">
        <ul className="flex cursor-pointer">
          <li className="ml-[5px]">Storybook /</li>
          <li className="ml-[5px]">Customize Book /</li>
          <li className="ml-[5px]">Checkout /</li>
        </ul>
      </div>
      <h1 className="text-mainText pb-[48px] text-[48px] font-normal text-regular">
        Payment
      </h1>
      <div className="relative flex justify-between max-[420px]:h-[800px]">
        <div className=" w-[100%] max-[420px]:mx-[10%]">
          <Payment />
        </div>
        <div className="absolute left-[50%] h-[100%] w-[2px] bg-[#ECECEC] max-[420px]:invisible"></div>
        <div className="ml-[64px] w-[100%] text-left max-[420px]:invisible max-[420px]:absolute">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
