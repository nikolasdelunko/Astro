import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { openBurger } from "../../../store/helpers/helpersSlice";
import Hamburger from "hamburger-react";
// import { NavLink } from "react-router-dom";
import StickerPal from "../../Theme/icons/StickerPalLogo";
import Logo from "../../Theme/icons/Logo";

export default function NavSicker() {
  // const dispatch = useDispatch();
  // const burger = useSelector((state) => state.helpers.burger);
	const burger = false
  // const page = useSelector((state) => state.helpers.page);
	//! dispatch 


  //bg-black bg-opacity-70 backdrop-blur-2xl h-[82px]
  return (
    <div className="flex justify-between items-center px-[64px] max-[420px]:px-[5%] pb-[33px] pt-[27px] w-[100%] bg-black bg-opacity-70 backdrop-blur-2xl h-[82px]">
      <div className="items-center flex">
        <div className="cursor-pointer">
          <a href="/stickers-page" className="flex items-center gap-[8px]">
            <Logo />
            <StickerPal />
          </a>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex items-center gap-8 ml-[80px]">
            <li className="cursor-pointer"></li>
            <li className="cursor-pointer">
              <a href="/" className="font-main text-[#767676] text-lg">
                Features
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="font-main text-[#767676] text-lg">
                How It Works
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="font-main text-[#767676] text-lg">
                Sticker Style
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="items-center lg:flex hidden">
        <a href="/stickers-page-upload">
          <button className="btn flex items-center justify-center ml-[32px] ">
            Get started now
          </button>
        </a>
      </div>
      <div className="items-center lg:hidden flex">
        <Hamburger
          toggled={burger}
          toggle={() => {
            // dispatch(openBurger(!burger));
          }}
          direction="right"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
