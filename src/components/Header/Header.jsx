import React from "react";
import NavMain from "./navBars/NavMain";
import NavCreate from "./navBars/NavCreate";
import NavLanding from "./navBars/animePortraits";
import NavCheckout from "./navBars/NavCheckout";
import NavSticker from "./navBars/NavSticker";
import NavUploadImg from "./navBars/NavUploadImg";
import NavUploadImgMob from "./navBars/NavUploadImgMob";
import { Spring, animated } from "@react-spring/web";
import useResize from "../../utils/customHooks/use-resize";
import { page } from "../../store/helpersStore";

export default function Header() {
 
  const mob = useResize();

	console.log("This is nav bar", page, mob)

  if (page === "main") {
    return (
      <Spring
        config={{ duration: 1000 }}
        delay={2000}
        from={{ top: -100, position: "absolute", width: "100%", zIndex: 2 }}
        to={{ top: 0, position: "absolute", width: "100%", zIndex: 2 }}
      >
        {(style) => (
          <animated.div style={style}>
            <NavMain />
          </animated.div>
        )}
      </Spring>
    );
  } else if (page === "landing") {
    return (
      <div className="absolute top-0 z-[2] w-[100%]">
        <NavLanding />
      </div>
    );
  } else if (
    page === "checkout" ||
    page === "payCard" ||
    page === "successfullyPay" ||
    page === "admin"
  ) {
    return (
      <div>
        <NavCheckout />
      </div>
    );
  } else if (
    (page === "UploadImage" || page === "successfullyPaySticker") &&
    !mob
  ) {
    return <NavUploadImg />;
  } else if (
    (page === "UploadImage" || page === "successfullyPaySticker") &&
    mob
  ) {
    return <NavUploadImgMob />;
  } else {
    return <NavCreate />;
  }
}
