import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";
import { addPay } from "../../store/story/storySlice";
import { NavLink } from "react-router-dom";
import Success from "../Theme/icons/Success";

export default function SuccessfullyPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("successfullyPay"));
    const handleBeforeUnload = (e) => {
      dispatch(addPay(false));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
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
            Thank you for ordering and creating a book with Crazyprints, we will
            start processing your order. Keep checking the status of your order.
          </p>
        </div>
        <div className="flex items-center gap-[24px] max-[420px]:flex-col">
          <NavLink to={"/"}>
            <button
              className="btn-second flex items-center justify-center"
              onClick={() => {
                dispatch(addPay(false));
                // dispatch(openModal(true));
              }}
            >
              Home
            </button>
          </NavLink>
          <NavLink to={"/"}>
            <button
              className="btn flex items-center justify-center "
              onClick={() => {
                dispatch(addPay(false));
                // dispatch(openModal(true));
              }}
            >
              Order Tracking
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
