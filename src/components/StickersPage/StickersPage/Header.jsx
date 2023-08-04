import React from "react";
import ArrowRight from "../../Theme/icons/ArrowRight";
import Ellipse1 from "./Theme/Ellipse1";
import Ellipse3 from "./Theme/Ellipse3";
import Ellipse2 from "./Theme/Ellipse2";
// import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-[#0A0A0C] shadow-lg relative overflow-hidden h-[576px]">
      <div className="flex justify-between px-[64px]">
        <div className="pt-[114px]">
          <div className="py-[32px] w-[699px]">
            <h1 className="text-textBtn font-medium text-4xl leading-9 text-white pb-[16px]">
              Your Personalized Sticker Generator – Made Just for You!
            </h1>
            <p className="text-textBtn  font-medium text-base leading-6 text-gray-600">
              Discover the joy of self-expression with MyStickerPal, a
              one-of-a-kind sticker generator app crafted to bring your favorite
              moments and expressions to life in the most personal way.
            </p>
          </div>
          {/* <NavLink to={"/stickers-page-upload"}> */}
          <div
            className="flex cursor-pointer z-50 absolute mt-[48px]"
            onClick={() => {
              console.log("aaaa");
            }}
          >
            <h2 className="font-poppins font-medium text-base leading-6 text-orange-300 mr-[12px]">
              Let’s Start to Create Sticker
            </h2>
            <ArrowRight />
          </div>
          {/* </NavLink> */}
          <div className="absolute bottom-0 left-0 z-0">
            <Ellipse2 />
          </div>
          <div className="absolute bottom-0 z-0">
            <Ellipse3 />
          </div>
        </div>
        <div className="flex gap-[37px]">
          <div className="absolute right-[0]">
            <Ellipse1 />
          </div>
          <div className="absolute right-[348px] z-20">
            <div className="mb-[32px]">
              <img
                className="mb-[16px]"
                src={"/Img/Sticker1.png"}
                alt="Sticker-head"
              />
              <img
                className="mb-[16px]"
                src={"/Img/Sticker2.png"}
                alt="Sticker-head"
              />
              <img
                className="mb-[16px]"
                src={"/Img/Sticker3.png"}
                alt="Sticker-head"
              />
            </div>
          </div>
          <div className="absolute right-[143px] z-20">
            <div className="mb-[32px]">
              <img
                className="mb-[16px]"
                src={"/Img/Sticker1.png"}
                alt="Sticker-head"
              />
              <img
                className="mb-[16px]"
                src={"/Img/Sticker2.png"}
                alt="Sticker-head"
              />
              <img
                className="mb-[16px]"
                src={"/Img/Sticker3.png"}
                alt="Sticker-head"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
