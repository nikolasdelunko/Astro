import React from "react";
import { useSelector } from "react-redux";
import Menu from "./Menu/Menu";

export default function BurgerModal() {
  const page = useSelector((state) => state.helpers.page);
  return (
    <>
      {page == "main" ? (
        <div className="w-[100%] h-[500px] absolute bg-main-color mt-[85px] flex justify-center flex-col z-20">
          <Menu />
        </div>
      ) : (
        <div className="w-[100%] h-[500px] absolute bg-main-color flex justify-center flex-col z-20">
          <Menu />
        </div>
      )}
    </>
  );
}
