import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Cross from "../../Theme/icons/Cross";
import { openBurger } from "../../../store/helpers/helpersSlice";
import { page } from "../../../store/helpersStore";

export default function Menu() {
  const dispatch = useDispatch();
  // const page = useSelector((state) => state.helpers.page);
  return (
    <div>
      <ul className="m-[2%] flex flex-col items-center gap-8 pt-[81px]">
        {page === "landing" && (
          <div
            className="absolute right-[10px] top-[10px] rounded-[100%] bg-regular"
            onClick={() => {
              dispatch(openBurger(false));
            }}
          >
            <Cross />
          </div>
        )}
        {page == "create" ? (
          <li className="flex h-[50px] w-[100%]   cursor-pointer items-center justify-center rounded-[199px] border-2 border-regular">
            <a href="/create" className="font-main text-lg text-white  ">
              Storybooks
            </a>
          </li>
        ) : (
          <li className="flex h-[50px]  w-[100%] cursor-pointer items-center justify-center rounded-[199px] bg-regular">
            <a href="/" className="font-main text-lg text-text-color  ">
              Storybooks
            </a>
          </li>
        )}
        <li className="flex h-[50px] w-[100%] cursor-pointer items-center justify-center rounded-[199px] bg-regular ">
          <a
            href="/anime-portraits"
            className="font-main text-lg text-text-color  "
          >
            Anime portrais
          </a>
        </li>
        <li className="flex h-[50px] w-[100%] cursor-pointer items-center justify-center rounded-[199px] bg-regular">
          <a
            href="/stickers-page"
            className="font-main text-lg text-text-color  "
          >
            AI Avatars
          </a>
        </li>
        {page == "blog" ? (
          <li className="flex h-[50px] w-[100%]   cursor-pointer items-center justify-center rounded-[199px] border-2 border-regular">
            <NavLink to={"/blog"}>
              <p className="font-main text-lg text-text-color">Blog</p>
            </NavLink>
          </li>
        ) : (
          <li className="flex h-[50px]  w-[100%] cursor-pointer items-center justify-center rounded-[199px] bg-regular">
            <NavLink to={"/blog"}>
              <p className="font-main text-lg text-text-color">Blog</p>
            </NavLink>
          </li>
        )}
        <li className="flex h-[50px] w-[100%] cursor-pointer items-center justify-center rounded-[199px] bg-regular">
          <a href="/" className="font-main text-lg text-text-color">
            Order tracking
          </a>
        </li>
      </ul>
    </div>
  );
}
