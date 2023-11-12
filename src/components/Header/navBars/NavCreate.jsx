import React from "react";
import Hamburger from "hamburger-react";
import { useStore } from "@nanostores/react";
import { openBurger, $burger } from "../../../store/helpersStore";

export default function NavCreate({ page }) {
  const burger = useStore($burger);

  return (
    <div className="flex w-[100%] items-center justify-between bg-main-color px-[64px] pb-[33px] pt-[27px] max-[420px]:px-[5%]">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <a href="/">
            <img src={"/Img/logo.png"} alt="Logo" />
          </a>
        </div>
        <div className="hidden lg:flex">
          <ul className="ml-[80px] flex items-center gap-8">
            <li className="cursor-pointer">
              {page === "create" ? (
                <a href="/" className="font-main text-lg text-regular">
                  Storybooks
                </a>
              ) : (
                <a href="/" className="font-main text-lg text-white">
                  Storybooks
                </a>
              )}
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
                {page === "blog" ? (
                  <p className="font-main text-lg text-regular">Blog</p>
                ) : (
                  <p className="font-main text-lg text-white">Blog</p>
                )}
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
      {page !== "create" && (
        <div className="hidden items-center lg:flex">
          <a href="/create">
            <button className="btn ml-[32px] flex items-center justify-center ">
              Start to Create a Book
            </button>
          </a>
        </div>
      )}
      <div className="flex items-center lg:hidden">
        <Hamburger
          toggled={burger}
          toggle={() => {
            openBurger(!burger);
          }}
          direction="right"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
