import React from "react";
import "../../Theme/Img/mobile/ExampleSticker.png";
import { setModalStickerMobile } from "../../../store/helpers/helpersSlice";
import { useDispatch } from "react-redux";

export default function HeaderMob() {
  const dispatch = useDispatch();

  //!  need to change real data
  return (
    <div className="pt-[116px] px-[5%] pb-[300px] h-[1200px]">
      <div className="pb-[24px]">
        <h1 className="text-textBtn font-bold text-[31px] text-[#2D061B]">
          Create Your Own Sticker
        </h1>
        <p className="text-textBtn  font-medium text-[12px] leading-6 text-[#767676]">
          Design your own sticker with a stunning and trendy style
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-textBtn font-[600] text-[17px] text-[#2D061B] mb-[8px]">
          Sticker Style
        </h1>
        <div className="flex flex-col justify-center">
          <div
            className="bg-stickerPage1cardMob w-[343px] h-[129px] cursor-pointer mb-[16px] relative"
            onClick={() => {
              dispatch(setModalStickerMobile(1.1));
            }}
          >
            <img
              src={require("../../Theme/Img/mobile/card1Mob.png")}
              alt="card1Mob"
              className="absolute right-0 bottom-0"
            />
          </div>
          <div
            className="bg-stickerPage2cardMob w-[343px] h-[129px] cursor-pointer mb-[16px] relative"
            onClick={() => {
              dispatch(setModalStickerMobile(1.2));
            }}
          >
            <img
              src={require("../../Theme/Img/mobile/card2Mob.png")}
              alt="card1Mob"
              className="absolute left-[5px] bottom-0"
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px]">
        <div className="flex items-center justify-between">
          <h2 className="text-textBtn font-[600] text-[17px] text-[#2D061B] mb-[8px]">
            My Sticker
          </h2>
          <p className="text-textBtn  font-medium text-[12px] leading-6 text-[#EBB268]">
            View all
          </p>
        </div>
        <div className="flex gap-[17px] pt-[8px]">
          <img
            src={require("../../Theme/Img/mobile/ExampleSticker.png")}
            alt={"stickerExample"}
          />
          <img
            src={require("../../Theme/Img/mobile/ExampleSticker.png")}
            alt={"stickerExample"}
          />
          <img
            src={require("../../Theme/Img/mobile/ExampleSticker.png")}
            alt={"stickerExample"}
          />
        </div>
      </div>
    </div>
  );
}
