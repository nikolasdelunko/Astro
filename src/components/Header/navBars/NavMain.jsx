import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { openBurger } from "../../../store/helpers/helpersSlice";
import Hamburger from "hamburger-react";
// import { NavLink } from "react-router-dom";

export default function NavMain() {
  // const dispatch = useDispatch();
  // const burger = useSelector((state) => state.helpers.burger);
	// ! dispatch
	const burger = false
	

  return (
    <div className="flex items-center justify-between px-[64px] max-[420px]:px-[5%] pt-[20px] w-[100%] absolute h-[81px]">
      <div className="items-center flex">
        <div className="cursor-pointer">
          <a href="/">
            <img src={"/Img/logo.png"} alt="Logo" />
          </a>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex items-center gap-8 ml-[80px]">
            <li className="cursor-pointer">
              <a href="/" className="font-main text-white text-lg">
                Storybooks
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/anime-portraits"
                className="font-main text-white text-lg"
              >
                Anime portrais
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/stickers-page" className="font-main text-white text-lg">
                AI Avatars
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/blog">
                <p className="font-main text-white text-lg">Blog</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="font-main text-white text-lg">
                Order tracking
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="items-center lg:flex hidden">
        <a href="/create">
          <button className="btn flex items-center justify-center ml-[32px] ">
            Start to Create a Book
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
