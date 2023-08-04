import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/helpers/helpersSlice";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.helpers.modal.step);
  return (
    <div
      className="bg-modal top-0 left-0 w-[100%] h-[100%] block fixed"
      onClick={(e) => {
        dispatch(openModal(false));
      }}
    >
      <div
        className="bg-[#FFFFFF] rounded-[8px] w-[440px] fixed top-[40%] left-[35%] max-[420px]:w-[90%] max-[420px]:left-[5%] max-[420px]:top-[25%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          {modal === 0 && <Step1 />}
          {modal === 1 && <Step2 />}
          {modal === 2 && <Step3 />}
        </div>
      </div>
    </div>
  );
}
