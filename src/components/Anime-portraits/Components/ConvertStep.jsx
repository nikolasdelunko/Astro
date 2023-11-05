import React, { useState } from "react";
import { setOpenCard } from "../../../store/helpersStore";

export default function ({ step, value }) {
  const [open, setOpen] = useState(false);

  const openCurentCard = () => {
    setOpen(true);
    setOpenCard(step);
  };

  const closeCurrentCard = () => {
    setOpen(false);
    setOpenCard(false);
  };
  if (open) {
    return (
      <div
        className="flex h-[240px] w-[304px] rounded-[8px] border-[1px] border-[#EBB268]"
        onClick={closeCurrentCard}
      >
        <div className="flex w-[100px] flex-col rounded-l-[8px] border-r-[2px] border-r-[#EBB268] bg-[#F0CD9F] max-[420px]:w-[80px] max-[420px]:rounded-[8px]">
          <div className="flex items-center justify-center border-b-[2px] border-b-[#EBB268] px-[38px] py-[16px]">
            <p className="text-second text-[#2D061B] text-[24]">{step}</p>
          </div>
          <div className="mx-[38px] flex h-[100%] items-center justify-center">
            <p
              className="text-second text-[#2D061B] text-[20]"
              style={{ transform: "rotateZ(270deg)" }}
            >
              Step
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-textSec px-[16px] text-[16px] text-[#FFFFFF]">
            {value}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex h-[240px] w-[304px] rounded-[8px] border-[1px] border-[#EBB268]"
        onClick={openCurentCard}
      >
        <div className="flex w-[100px] flex-col rounded-l-[8px] border-r-[2px] border-r-[#EBB268] bg-[#F0CD9F] max-[420px]:w-[80px] max-[420px]:rounded-[8px]">
          <div className="flex items-center justify-center border-b-[2px] border-b-[#EBB268] px-[38px] py-[16px]">
            <p className="text-second text-[#2D061B] text-[24]">{step}</p>
          </div>
          <div className="mx-[38px] flex h-[100%] items-center justify-center">
            <p
              className="text-second text-[#2D061B] text-[20]"
              style={{ transform: "rotateZ(270deg)" }}
            >
              Step
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-[420px]:hidden">
          <p className="text-textSec px-[16px] text-[16px] text-[#FFFFFF]">
            {value}
          </p>
        </div>
      </div>
    );
  }
}
