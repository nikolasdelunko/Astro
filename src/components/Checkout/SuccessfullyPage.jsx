import React, { useEffect } from "react";
import { setPage } from "../../store/helpersStore";
import { addPay } from "../../store/storyStore";
import Success from "../Theme/icons/Success";

export default function SuccessfullyPage() {
  useEffect(() => {
    setPage("successfullyPay");
    const handleBeforeUnload = (e) => {
      addPay(false);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="flex h-[1024px] items-center justify-center max-[420px]:h-screen max-[420px]:pb-[400px]">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-[40px]">
          <Success />
        </div>
        <div className="items-center pb-[32px] text-center">
          <h1 className="text-textSec pb-[16px] text-[32px] font-[400] text-main-color">
            Payment Successfully
          </h1>
          <p className="text-textSec pb-[6px] text-[16px] font-[400] text-[#C5C3C3]">
            Thank you for ordering and creating a book with Crazyprints, we will
            start processing your order. Keep checking the status of your order.
          </p>
        </div>
        <div className="flex items-center gap-[24px] max-[420px]:flex-col">
          <a href="/">
            <button
              className="btn-second flex items-center justify-center"
              onClick={() => {
                addPay(false);
                // openModal(true)
              }}
            >
              Home
            </button>
          </a>
          <a href="/">
            <button
              className="btn flex items-center justify-center "
              onClick={() => {
                addPay(false);
                // openModal(true)
              }}
            >
              Order Tracking
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
