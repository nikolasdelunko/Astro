import React, { useEffect } from "react";
import { setPage } from "../../store/helpersStore";
import { NavLink } from "react-router-dom";
import Success from "../Theme/icons/Success";
import { setPaySticker } from "../../store/stickers";

export default function SuccessfullyPage() {

  useEffect(() => {
    setPage("successfullyPaySticker")
		const handleBeforeUnload = (e) => {
			setPaySticker(false)
			e.returnValue = 'Are you sure you want to leave the page? Your unsaved data may be lost.';
    };
		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div className="h-[1024px] flex items-center justify-center max-[420px]:h-screen max-[420px]:pb-[400px]">
      <div className="flex flex-col justify-center items-center">
        <div className="pb-[40px]">
          <Success />
        </div>
        <div className="items-center text-center pb-[32px]">
          <h1 className="text-main-color text-textSec text-[32px] font-[400] pb-[16px]">
            Payment Successfully
          </h1>
          <p className="text-[#C5C3C3] text-textSec text-[16px] font-[400] pb-[6px]">
            Thank you for ordering Personalized Stickers, save your stickers by
            clicking download button.
          </p>
        </div>
        <div className="flex items-center gap-[24px] max-[420px]:flex-col">
          <NavLink to={"/stickers-page"}>
            <button
              className="btn-second flex items-center justify-center"
              onClick={() => {
                setPaySticker(false)
                // openModal(true);
              }}
            >
              Home
            </button>
          </NavLink>
            <button
              className="btn flex items-center justify-center "
              onClick={() => {
                setPaySticker(false)
                // openModal(true);
              }}
            >
              Download stickers
            </button>
        </div>
      </div>
    </div>
  );
}
