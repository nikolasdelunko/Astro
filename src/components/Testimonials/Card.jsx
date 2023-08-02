import React from "react";

export default function Card({ text, author, leadingP = false }) {
  if (leadingP) {
    return (
      <div className="flex flex-col justify-center items-center mt-[64px] max-[420px]:mt-[32px] pb-[100px] cursor-pointer">
        <div className="flex-col items-start w-[416px] max-[420px]:h-[160px] max-[420px]:mx-[25px]  max-[420px]:w-[326px] h-[221px] bg-regular shadow-card-shadow backdrop-blur-[30px] rounded-[20px] flex  justify-center px-[84px] max-[420px]:px-[42px]">
          <p className="text-text-color text-[16px] max-[420px]:text-[12px] font-textSec">
            {text}
          </p>
          <p className="text-[#2D061B] text-[18px] max-[420px]:text-[12px] font-textSec">
            {author}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center mt-[64px] max-[420px]:mt-[32px] pb-[100px] cursor-pointer">
        <div className="w-[612px] max-[420px]:h-[160px]   max-[420px]:w-[90%] h-[383px] bg-regular shadow-card-shadow backdrop-blur-[30px] rounded-[20px] flex  justify-center items-center px-[84px] max-[420px]:px-[42px]">
          <p className="text-text-color text-[20px] max-[420px]:text-[12px] font-textSec">
            {text}
          </p>
        </div>
      </div>
    );
  }
}
