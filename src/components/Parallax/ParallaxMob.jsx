import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spring, animated } from "@react-spring/web";
import HeaderRescription from "../Header/HeaderRescription";

export default function ParallaxSection() {
  return (
    <div>
      <div
        className="max-[420px]:invisible  visible overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
          background: "#253237",
          overflow: "hidden",
        }}
      >
        <Parallax
          pages={1}
          // className="overflow-hidden"
          style={{
            top: "-10",
            left: "0",
            // height: "900px",
            // overflow: "auto",
            // scrollbarWidth: "none",

            //!! Check this, doesn't work properly
            overflow: "hidden",
          }}
        >
          <ParallaxLayer offset={0} speed={0.9}>
            <Spring
              delay={2000}
              config={{ duration: 1000 }}
              from={{
                top: "33%",
                width: "100%",
                position: "absolute",
                zIndex: 2,
                opacity: 0,
              }}
              to={{
                top: "12%",
                width: "100%",
                position: "relative",
                zIndex: 2,
                opacity: 1,
                visibility: "visible",
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <HeaderRescription />
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
