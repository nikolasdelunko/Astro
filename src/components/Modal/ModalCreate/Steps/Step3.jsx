import React, { useState, useEffect } from "react";
import { addFill, $email, $genre, $storyInfo2, $designPrompt } from "../../../../store/storyStore";
import { CheckOtp } from "../../../../utils/Api/orderApi";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../../../store/helpersStore";
import { SentOtp } from "../../../../utils/Api/orderApi";
import { snackActions } from "../../../../utils/customHooks/useSnackBarUtils";

//!dispatch

export default function Step2() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [Otp, setOtp] = useState();
  const genre = useStore($genre);
  const storyInfo2 = useStore($storyInfo2);
  const email = useStore($email);
	const designPrompt = useStore($designPrompt);

  const data = {
    genre,
    ...storyInfo2,
    ...designPrompt,
    email,
    storyBook,
  };

  console.log("step3", data);
  const navigate = useNavigate();

  const fetchData = async () => {
    setTimeLeft(300);
    const otp = await SentOtp(data);
    snackActions.success(otp.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : fetchData()));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-[100%]">
      <div className="m-[32px] text-left">
        <h2 className="pb-[8px] font-textSec text-[18px]">Continue with OTP</h2>
        <input
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          name="OTP"
          label="OTP"
          type="text"
          placeholder="OTP"
          className="mb-[16px] h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
        />
        <div className="flex items-center justify-center pb-[64px] text-center">
          <p className=" pr-[2px] font-textSec text-[14px] text-text-gray">
            Send back OTP in
          </p>
          <p className=" font-textSec text-[14px] text-black">
            {formatTime(timeLeft)}
          </p>
        </div>
        <div className="flex justify-end gap-[16px]">
          <button
            className="btn-modal-send flex items-center"
            type="submit"
            onClick={async () => {
              try {
                const result = await CheckOtp({
                  email: email,
                  otp: Otp,
                });
                if (result.status === 200) {
                  addFill(true);
                  navigate("/checkout", { replace: true });
                  openModal(false);
                } else return;
              } catch (err) {
                snackActions.error(err);
              }
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
