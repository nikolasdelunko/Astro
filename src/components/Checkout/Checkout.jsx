import React, { useEffect } from "react";
import LeftSide from "./LeftSide";
import { useDispatch, useSelector } from "react-redux";
import RightSide from "./RightSide";
import { setPage } from "../../store/helpers/helpersSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);

  useEffect(() => {
    dispatch(setPage("checkout"));
  }, []);

  return (
    <div className="flex flex-col pb-[239px] max-[420px]:h-[2800px]">
      <div className="flex py-[32px]">
        <ul className="flex cursor-pointer">
          <li className="ml-[5px]">Storybook /</li>
          <li className="ml-[5px]">Customize Book /</li>
          <li className="ml-[5px]">Checkout /</li>
        </ul>
      </div>
      <h1 className="text-regular text-[48px] text-mainText font-normal pb-[48px]">
        Checkout
      </h1>
      <div className="flex justify-between relative max-[420px]:flex-col">
        <div className=" w-[100%] max-[420px]:px-[10%]">
          <p className="text-mainText text-[#C5C3C3] text-[20px] font-normal">
            Personal Details
          </p>
          <LeftSide />
        </div>
        <div className="h-[100%] w-[2px] bg-[#ECECEC] absolute left-[50%] max-[420px]:invisible"></div>
        <div className="text-left w-[100%] ml-[64px] max-[420px]:mx-[10%] ">
          <p className="text-mainText text-[#C5C3C3] text-[20px] font-normal">
            Order Summary
          </p>
          <div>
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
}
