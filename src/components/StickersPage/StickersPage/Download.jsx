import React from "react";
// import { NavLink } from "react-router-dom";

//! NavLink

//! HERE NEED INSERT LINK TO APPSTORE & GOOGLE PLAY

export default function Download() {
  return (
    <div className="h-[190px] bg-[#212121] pb-[290px]">
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-[24px] pb-[16px]">
          <h1 className="font-textBtn text-[24px] text-white">
            Create your own sticker
          </h1>
          <p className="font-textBtn text-[12px] text-[#767676]">
            Start and try it on
          </p>
        </div>
        <div className="flex items-center justify-center gap-[16px]">
          <div className="cursor-pointer">
            {/* <NavLink to={"/stickers-page-upload"}> */}
            <a href="/stickers-page-upload">
              <img src={"/Img/download-appstore.png"} />
            </a>
            {/* </NavLink> */}
          </div>
          <div className="cursor-pointer">
            {/* <NavLink to={"/stickers-page-upload"}> */}
            <a href="/stickers-page-upload">
              <img src={"/Img/download-gplay.png"} />
            </a>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}
