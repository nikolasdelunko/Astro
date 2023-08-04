import React, { useEffect } from "react";
import RightSide from "./RightSide";
import { setPage } from "../../store/helpers/helpersSlice";
import { useDispatch } from "react-redux";
import Payment from "./Stripe/index";

export default function PayCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("payCard"));
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
      <h1 className="text-regular text-[48px] text-mainText font-normal pb-[48px]">
        Payment
      </h1>
      <div className="flex justify-between relative max-[420px]:h-[800px]">
        <div className=" w-[100%] max-[420px]:mx-[10%]">
          <Payment />
        </div>
        <div className="h-[100%] w-[2px] bg-[#ECECEC] absolute left-[50%] max-[420px]:invisible"></div>
        <div className="text-left w-[100%] ml-[64px] max-[420px]:absolute max-[420px]:invisible">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
