import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFill } from "../../../../store/story/storySlice";
import { CheckOtp } from "../../../../utils/Api/orderApi";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../../../store/helpers/helpersSlice";
import { SentOtp } from "../../../../utils/Api/orderApi";
import { snackActions } from "../../../../utils/customHooks/useSnackBarUtils";

export default function Step2() {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(300);
  const [Otp, setOtp] = useState();
  const { email } = useSelector((state) => state.story.storyBook);
  const data = useSelector((state) => state.story.storyBook);
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
      <div className="text-left m-[32px]">
        <h2 className="text-[18px] font-textSec pb-[8px]">Continue with OTP</h2>
        <input
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          name="OTP"
          label="OTP"
          type="text"
          placeholder="OTP"
          className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px] mb-[16px]"
        />
        <div className="text-center flex justify-center items-center pb-[64px]">
          <p className=" text-[14px] font-textSec pr-[2px] text-text-gray">
            Send back OTP in
          </p>
          <p className=" text-[14px] font-textSec text-black">
            {formatTime(timeLeft)}
          </p>
        </div>
        <div className="flex gap-[16px] justify-end">
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
                  dispatch(addFill(true));
                  navigate("/checkout", { replace: true });
                  dispatch(openModal(false));
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
