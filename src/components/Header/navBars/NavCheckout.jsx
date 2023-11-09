import React from "react";
import { useNavigate } from "react-router-dom";
import { setStep, checkoutStore } from "../../../store/checkoutStore";
import { addPay } from "../../../store/storyStore";
import LogOutIco from "../../Theme/icons/LogOut";
import useAuth from "../../../utils/customHooks/useAuth";
import useConfirm from "../../../utils/customHooks/useConfirm";
import { page } from "../../../store/helpersStore";
import { data } from "../../../store/userStore";

export default function NavCreate() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const { confirm } = useConfirm();

  const goBack = () => navigate(-1);

	console.log("This is NavCheckout Component", checkoutStore.step)

  const exit = async () => {
    const a = await confirm(`do you really wont log out?`);
    if (a) {
      logOut();
    }
  };

  return (
    <div className="flex w-[100%] items-center justify-between bg-main-color px-[64px] pb-[33px] pt-[27px] max-[420px]:px-[5%]">
      <div className="flex items-center">
        {page.get() !== "successfullyPay" && (
          <div
            onClick={() => {
              if (page.get() === "payCard") {
                setStep(checkoutStore.step - 1);
              } else {
                goBack();
              }
            }}
          >
            <p className="text-textSec cursor-pointer text-[16px] font-[600] text-regular">
              Back
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            addPay(false);
          }}
        >
          <a href="/">
            <img src={require("../../Theme/Img/logo.png")} alt="Logo" />
          </a>
        </div>
      </div>
      <div>
        {page.get() === "admin" && data.get() && (
          <div className="cursor-pointer" onClick={exit}>
            <LogOutIco />
          </div>
        )}
      </div>
    </div>
  );
}
