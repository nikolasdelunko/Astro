import React from "react";
import ConvertStep from "./Components/ConvertStep";
// import { useSelector } from "react-redux";
// import useResize from "../../utils/customHooks/use-resize";

const data = [
  { step: 1, value: "Upload a photo and pick a style for design" },
  { step: 2, value: "Our artis hand design your personalized portrait" },
  { step: 3, value: "We send the design for your approval before printing" },
  {
    step: 4,
    value: "The art gets printed and delivered to you or someone you value",
  },
];

export default function HowToConvert() {
  // const openedCard = useSelector((state) => state.helpers.openCard);
  // const mob = useResize();

  //! need delete double click

  return (
    <div className=" pb-[165px]">
      <div>
        <div className="flex text-center items-center flex-col">
          <h1 className="flex font-mainText pb-[24px] max-[420px]:pb-[22px] text-regular text-[32px] max-[420px]:mx-[10%] leading-[35px] max-[420px]:text-[24px] max-[420px]:leading-[32px]">
            How to Convert Photo to Anime Art
          </h1>
          <h2 className="mb-[64px] max-w-[832px] max-[420px]:mb-[34px] max-[420px]:mx-[10%] font-main text-white text-[16px]  leading-[22px]  max-[420px]:text-[14px] max-[420px]:leading-[20px]">
            We have made the process as simple and convenient as possible
          </h2>
        </div>
      </div>
      <div
        className="flex gap-[32px] mx-[64px] max-[420px]:mx-[-15px] justify-center max-[420px]:gap-[12px] overflow-hidden"
        style={{
          // paddingRight: `${openedCard === 4 && mob ? "100px" : "0px"}`,
          // paddingLeft: `${openedCard === 1 && mob <= 420 ? "100px" : "0px"}`,
        }}
      >
        {data.map((el) => (
          <ConvertStep
            step={el.step}
            value={el.value}
            key={Math.random(0, 1)}
          />
        ))}
      </div>
    </div>
  );
}
