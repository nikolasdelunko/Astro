import React, { useState } from "react";
import MinusIco from "../Theme/icons/Minus";
import PlusIco from "../Theme/icons/PlusIco";

export default function Window({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex max-w-[643px] rounded-[20px]  bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] relative">
      <div className="flex flex-col mr-[100px]">
        <h2 className="font-mainText text-[20px] text-main-color">{name}</h2>
        {open && (
          <p className="font-textSec text-[18px] max-w-[380px] text-white">
            {text}
          </p>
        )}
      </div>
      <div
        className="cursor-pointer  absolute right-[34px]"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <MinusIco /> : <PlusIco />}
      </div>
    </div>
  );
}
