import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { openBurger } from "../../../store/helpers/helpersSlice";
import Hamburger from "hamburger-react";
import { openBurger, burger } from "../../../store/helpersStore";
// import { NavLink } from "react-router-dom";

export default function NavMain() {
  // const dispatch = useDispatch();
  // const burger = useSelector((state) => state.helpers.burger);
  // ! dispatch

  return (
    <div className="absolute flex h-[81px] w-[100%] items-center justify-between px-[64px] pt-[20px] max-[420px]:px-[5%]">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <a href="/">
            <img src={"/Img/logo.png"} alt="Logo" />
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="ml-[80px] flex items-center gap-8">
            <li className="cursor-pointer">
              <a href="/" className="font-main text-lg text-white">
                Storybooks
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/anime-portraits"
                className="font-main text-lg text-white"
              >
                Anime portrais
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/stickers-page" className="font-main text-lg text-white">
                AI Avatars
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/blog">
                <p className="font-main text-lg text-white">Blog</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="font-main text-lg text-white">
                Order tracking
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden items-center lg:flex">
        <a href="/create">
          <button className="btn ml-[32px] flex items-center justify-center ">
            Start to Create a Book
          </button>
        </a>
      </div>
      <div className="flex items-center lg:hidden">
        <Hamburger
          toggled={burger.value}
          toggle={() => {
            // dispatch(openBurger(!burger));
            openBurger(!burger.value);
          }}
          direction="right"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
