import React from "react";
import { useSelector } from "react-redux";
import useConfirm from "../../utils/customHooks/useConfirm";

export default function ModalConfirm() {
  const confirm = useSelector((state) => state.helpers.modalConfirm);
  const { text } = confirm;
  const { onConfirm, onCancel } = useConfirm();

  return (
    <div
      className="bg-modal top-0 left-0 w-[100%] h-[100%] block fixed z-50"
      onClick={onCancel}
    >
      <div
        className="bg-[#FFFFFF] rounded-[8px] w-[440px] fixed top-[40%] left-[35%] max-[420px]:w-[90%] max-[420px]:left-[5%] max-[420px]:top-[25%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-left m-[32px]">
            <h2 className="text-[18px] font-textSec pb-[8px]">{text}</h2>
            <div className="flex gap-[16px] justify-end">
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
