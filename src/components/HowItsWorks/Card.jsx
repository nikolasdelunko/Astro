import React, { useState } from "react";

export default function Card({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer flex flex-col min-[1390px]:w-[535px] max-[420px]:w-[100%] rounded-[16px] max-[420px]:rounded-[0px] border-[0px] border-[#2D061B] bg-regular px-[24px] py-[35px] max-[420px]:mx-[0px] mx-[24px] my-[20px] "
      onClick={() => {
        setOpen(!open);
      }}
    >
      <h2 className="text-main-color text-[36px] max-[420px]:text-[24px] max-[420px]:mr-[60px] font-second max-[420px]:font-mainText">
        {name}
      </h2>
      {open && (
        <p className="text-[#F2ECEC] text-[16px] max-[420px]:text-[12px] font-main">
          {text}
        </p>
      )}
    </div>
  );
}
