import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { setPage, $step } from "../../store/helpersStore";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

export default function StartCreate() {
  const step = useStore($step);

  useEffect(() => {
    setPage("create");
  }, [step]);

  return (
    <div style={{ minHeight: "calc(100vh - 89px)", paddingBottom: "176px" }}>
      <img
        className="w-[100%] max-[420px]:h-[100px]"
        src={"/Img/createP.png"}
        alt="headImage"
      />
      <div className="center mt-[32px] flex flex-col items-center justify-center pb-[166px]">
        <div className="pb-[48px]">
          <h2 className="font-mainText text-[24px] text-text-color">
            Create Story Book
          </h2>
        </div>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
      </div>
    </div>
  );
}
