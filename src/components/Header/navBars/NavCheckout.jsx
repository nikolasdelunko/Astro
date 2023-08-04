import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep } from "../../../store/checkout/checkoutSlice";
import { addPay } from "../../../store/story/storySlice";
import LogOutIco from "../Theme/Icons/LogOut";
import useAuth from "../../../utils/customHooks/useAuth";
import useConfirm from "../../../utils/customHooks/useConfirm";

export default function NavCreate() {
  const dispatch = useDispatch();
  const { logOut } = useAuth();
  const page = useSelector((state) => state.helpers.page);
  const step = useSelector((state) => state.checkout.step);
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const { confirm } = useConfirm();

  const goBack = () => navigate(-1);

  const exit = async () => {
    const a = await confirm(`do you really wont log out?`);
    if (a) {
      logOut();
    }
  };

  return (
    <div className="flex justify-between items-center px-[64px] max-[420px]:px-[5%] pb-[33px] pt-[27px] w-[100%] bg-main-color">
      <div className="flex items-center">
        {page !== "successfullyPay" && (
          <div
            onClick={() => {
              if (page === "payCard") {
                dispatch(setStep(step - 1));
              } else {
                goBack();
              }
            }}
          >
            <p className="cursor-pointer text-textSec text-regular text-[16px] font-[600]">
              Back
            </p>
          </div>
        )}
      </div>
      <div className="items-center flex justify-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(addPay(false));
          }}
        >
          <a href="/">
            <img src={require("../../Theme/Img/logo.png")} alt="Logo" />
          </a>
        </div>
      </div>
      <div>
        {page === "admin" && user && (
          <div className="cursor-pointer" onClick={exit}>
            <LogOutIco />
          </div>
        )}
      </div>
    </div>
  );
}
