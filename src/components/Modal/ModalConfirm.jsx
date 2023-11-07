import React from "react";
import { useSelector } from "react-redux";
import useConfirm from "../../utils/customHooks/useConfirm";
import { modalConfirm } from "../../store/helpersStore";

export default function ModalConfirm() {
  const { text } = modalConfirm;
  const { onConfirm, onCancel } = useConfirm();

  return (
    <div
      className="fixed left-0 top-0 z-50 block h-[100%] w-[100%] bg-modal"
      onClick={onCancel}
    >
      <div
        className="fixed left-[35%] top-[40%] w-[440px] rounded-[8px] bg-[#FFFFFF] max-[420px]:left-[5%] max-[420px]:top-[25%] max-[420px]:w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="m-[32px] text-left">
            <h2 className="pb-[8px] font-textSec text-[18px]">{text}</h2>
            <div className="flex justify-end gap-[16px]">
              <button
                onClick={onCancel}
                className="btn-modal-second flex items-center"
              >
                Cancel
              </button>
              <button
                className="btn flex items-center"
                type="submit"
                onClick={onConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
