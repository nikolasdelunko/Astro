import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setOpenCard } from "../../../store/helpers/helpersSlice";

export default function ({ step, value }) {
  const [open, setOpen] = useState(false);

  // const dispatch = useDispatch();

  const openCurentCard = () => {
    setOpen(true);
    // dispatch(setOpenCard(step));
  };

  const closeCurrentCard = () => {
    setOpen(false);
    // dispatch(setOpenCard(null));
  };
  if (open) {
    return (
      <div
        className="w-[304px] h-[240px] rounded-[8px] border-[1px] border-[#EBB268] flex"
        onClick={closeCurrentCard}
      >
        <div className="bg-[#F0CD9F] border-r-[2px] border-r-[#EBB268] flex flex-col w-[100px] rounded-l-[8px] max-[420px]:rounded-[8px] max-[420px]:w-[80px]">
          <div className="px-[38px] py-[16px] flex items-center justify-center border-b-[2px] border-b-[#EBB268]">
            <p className="text-[24] text-second text-[#2D061B]">{step}</p>
          </div>
          <div className="mx-[38px] h-[100%] flex items-center justify-center">
            <p
              className="text-[20] text-second text-[#2D061B]"
              style={{ transform: "rotateZ(270deg)" }}
            >
              Step
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[#FFFFFF] text-[16px] text-textSec px-[16px]">
            {value}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-[304px] h-[240px] rounded-[8px] border-[1px] border-[#EBB268] flex"
        onClick={openCurentCard}
      >
        <div className="bg-[#F0CD9F] border-r-[2px] border-r-[#EBB268] flex flex-col w-[100px] rounded-l-[8px] max-[420px]:rounded-[8px] max-[420px]:w-[80px]">
          <div className="px-[38px] py-[16px] flex items-center justify-center border-b-[2px] border-b-[#EBB268]">
            <p className="text-[24] text-second text-[#2D061B]">{step}</p>
          </div>
          <div className="mx-[38px] h-[100%] flex items-center justify-center">
            <p
              className="text-[20] text-second text-[#2D061B]"
              style={{ transform: "rotateZ(270deg)" }}
            >
              Step
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-[420px]:hidden">
          <p className="text-[#FFFFFF] text-[16px] text-textSec px-[16px]">
            {value}
          </p>
        </div>
      </div>
    );
  }
}
