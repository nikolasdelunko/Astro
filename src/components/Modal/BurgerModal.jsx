import React from "react";
import Menu from "./Menu/Menu";
import { page } from "../../store/helpersStore";

export default function BurgerModal() {
  return (
    <>
      {page.get() == "main" ? (
        <div className="absolute z-20 mt-[85px] flex h-[500px] w-[100%] flex-col justify-center bg-main-color">
          <Menu />
        </div>
      ) : (
        <div className="absolute z-20 flex h-[500px] w-[100%] flex-col justify-center bg-main-color">
          <Menu />
        </div>
      )}
    </>
  );
}
