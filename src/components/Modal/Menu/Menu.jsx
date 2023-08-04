import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Cross from "../../Theme/Icons/Cross";
import { openBurger } from "../../../store/helpers/helpersSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.helpers.page);
  return (
    <div>
      <ul className="flex items-center gap-8 m-[2%] flex-col pt-[81px]">
        {page === "landing" && (
          <div
            className="absolute top-[10px] right-[10px] rounded-[100%] bg-regular"
            onClick={() => {
              dispatch(openBurger(false));
            }}
          >
            <Cross />
          </div>
        )}
        {page == "create" ? (
          <li className="cursor-pointer border-2 border-regular   w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <a href="/create" className="font-main text-white text-lg  ">
              Storybooks
            </a>
          </li>
        ) : (
          <li className="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <a href="/" className="font-main text-text-color text-lg  ">
              Storybooks
            </a>
          </li>
        )}
        <li className="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px] ">
          <a
            href="/anime-portraits"
            className="font-main text-text-color text-lg  "
          >
            Anime portrais
          </a>
        </li>
        <li className="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a
            href="/stickers-page"
            className="font-main text-text-color text-lg  "
          >
            AI Avatars
          </a>
        </li>
        {page == "blog" ? (
          <li className="cursor-pointer border-2 border-regular   w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <NavLink to={"/blog"}>
              <p className="font-main text-text-color text-lg">Blog</p>
            </NavLink>
          </li>
        ) : (
          <li className="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <NavLink to={"/blog"}>
              <p className="font-main text-text-color text-lg">Blog</p>
            </NavLink>
          </li>
        )}
        <li className="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" className="font-main text-text-color text-lg">
            Order tracking
          </a>
        </li>
      </ul>
    </div>
  );
}
