import React from "react";
// import "../../Theme/Img/mobile/ExampleSticker.png";
// import { setModalStickerMobile } from "../../../store/helpers/helpersSlice";
// import { useDispatch } from "react-redux";

export default function HeaderMob() {
  // const dispatch = useDispatch();
  //! dispatch
  //!  need to change real data
  return (
    <div className="h-[1200px] px-[5%] pb-[300px] pt-[116px]">
      <div className="pb-[24px]">
        <h1 className="text-textBtn text-[31px] font-bold text-[#2D061B]">
          Create Your Own Sticker
        </h1>
        <p className="text-textBtn  text-[12px] font-medium leading-6 text-[#767676]">
          Design your own sticker with a stunning and trendy style
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-textBtn mb-[8px] text-[17px] font-[600] text-[#2D061B]">
          Sticker Style
        </h1>
        <div className="flex flex-col justify-center">
          <div
            className="relative mb-[16px] h-[129px] w-[343px] cursor-pointer bg-stickerPage1cardMob"
            onClick={() => {
              // dispatch(setModalStickerMobile(1.1));
            }}
          >
            <img
              src={"/Img/mobile/card1Mob.png"}
              alt="card1Mob"
              className="absolute bottom-0 right-0"
            />
          </div>
          <div
            className="relative mb-[16px] h-[129px] w-[343px] cursor-pointer bg-stickerPage2cardMob"
            onClick={() => {
              // dispatch(setModalStickerMobile(1.2));
            }}
          >
            <img
              src={"/Img/mobile/card2Mob.png"}
              alt="card1Mob"
              className="absolute bottom-0 left-[5px]"
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px]">
        <div className="flex items-center justify-between">
          <h2 className="text-textBtn mb-[8px] text-[17px] font-[600] text-[#2D061B]">
            My Sticker
          </h2>
          <p className="text-textBtn  text-[12px] font-medium leading-6 text-[#EBB268]">
            View all
          </p>
        </div>
        <div className="flex gap-[17px] pt-[8px]">
          <img src={"/Img/mobile/ExampleSticker.png"} alt={"stickerExample"} />
          <img src={"/Img/mobile/ExampleSticker.png"} alt={"stickerExample"} />
          <img src={"/Img/mobile/ExampleSticker.png"} alt={"stickerExample"} />
        </div>
      </div>
    </div>
  );
}
