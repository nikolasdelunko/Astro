import React from "react";
import { openModal, $modal, $step } from "../../../store/helpersStore";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useStore } from "@nanostores/react";

export default function Modal() {
  const { open, step } = useStore($modal);
  console.log("Modal Create", open, step);
  return (
    <>
      {open && (
        <div
          className="fixed left-0 top-0 block h-[100%] w-[100%] bg-modal"
          onClick={(e) => {
            openModal(false);
          }}
        >
          <div
            className="fixed left-[35%] top-[40%] w-[440px] rounded-[8px] bg-[#FFFFFF] max-[420px]:left-[5%] max-[420px]:top-[25%] max-[420px]:w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center">
              {step === 0 && <Step1 />}
              {step === 1 && <Step2 />}
              {step === 2 && <Step3 />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
