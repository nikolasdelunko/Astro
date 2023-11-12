import React from "react";
import Menu from "./Menu/Menu";
import { useStore } from "@nanostores/react";
import { $page, $burger } from "../../store/helpersStore";

export default function BurgerModal() {
  const page = useStore($page);
  const burger = useStore($burger);

		console.log("burger modal", page, burger)
  return (
    <>
      {burger && (
        <div>
          {page == "main" ? (
            <div className="absolute z-20 mt-[85px] flex h-[500px] w-[100%] flex-col justify-center bg-main-color">
              <Menu />
            </div>
          ) : (
            <div className="absolute z-20 flex h-[500px] w-[100%] flex-col justify-center bg-main-color">
              <Menu />
            </div>
          )}
        </div>
      )}
    </>
  );
}
