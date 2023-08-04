import React from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setModalStickerMobile } from "../../../store/helpers/helpersSlice";

export default function CaricatureStyle() {
  // const dispatch = useDispatch();
  //! dispatch

  return (
    <div className="w-[100%]">
      <div>
        <img
          src={require("../../Theme/Img/mobile/Frame7Mob.png")}
          alt="CaricatureImgHead"
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="flex flex-col pt-[34px] pb-[54px]">
        <div className="flex flex-col justify-center items-center pb-[24px]">
          <h1 className="text-textBtn font-[600] text-[32px] text-[#2D061B] mb-[4px]">
            $4,99
          </h1>
          <p className="text-textBtn  font-medium text-[12px] leading-6 text-[#767676]">
            Create your own sticker with a Chibi Style
          </p>
        </div>
        <div className="flex flex-col items-start pb-[54px] justify-start px-[16px]">
          <p className="text-textBtn  font-medium text-[12px] leading-6 text-[#767676]">
            What you will get:
          </p>
          <ul className="list-disc ml-[18px]">
            <li className="text-textBtn  font-[400] text-[14px] leading-6 text-[#212121]">
              You will be able to upload images up to 3 times
            </li>
            <li className="text-textBtn  font-[400] text-[14px] leading-6 text-[#212121]">
              You will get 3 times the regeneration response for each uploaded
              image.
            </li>
            <li className="text-textBtn  font-[400] text-[14px] leading-6 text-[#212121]">
              Total you will get 30 stickers with 10 each in 1 generate process.
            </li>
            <li className="text-textBtn  font-[400] text-[14px] leading-6 text-[#212121]">
              You can download all the stickers.
            </li>
          </ul>
          <p className="pt-[16px] text-textBtn  font-medium text-[12px] leading-6 text-[#767676]">
            Discover the joy of self-expression with MyStickerPal, a
            one-of-a-kind sticker generator app crafted to bring your favorite
            moments and expressions to life in the most personal way.
          </p>
        </div>
        <div
          className="pb-[45px] px-[5%]"
          onClick={() => {
            // dispatch(setModalStickerMobile(false));
          }}
        >
          <NavLink to={"/stickers-page-upload"}>
            <button className="btn w-[100%] items-center justify-center">
              Purchase Style
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
