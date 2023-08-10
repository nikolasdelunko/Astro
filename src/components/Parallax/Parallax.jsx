import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spring, animated } from "@react-spring/web";
// import HeaderRescription from "../Header/HeaderRescription";

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
          pages={1.1}
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
          <ParallaxLayer offset={0} speed={0.75}>
            <Spring
              delay={500}
              config={{ duration: 3000 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
                paddingTop: "200px",
                background: "#F9E2BB",
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
                paddingTop: "0px",
                background: "#F9E2BB",
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div className="w-[100%] relative">
                    <img
                      src={"/Img/Parallax/bg1.png"}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Spring
              delay={500}
              config={{ duration: 3000 }}
              from={{
                width: "95%",
                zIndex: 2,
                opacity: 1,
                marginLeft: "50px",
              }}
              to={{
                width: "125%",
                zIndex: 2,
                opacity: 1,
                marginLeft: "-125px",
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div className="w-[100%] relative  items-center">
                    <img
                      src={"/Img/Parallax/samurai1.png"}
                      alt="trees1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundSize: "cover",
                        // position: "absolute",
                        height: "900px",
                      }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <Spring
              delay={500}
              config={{ duration: 3000 }}
              from={{
                zIndex: 2,
                opacity: 1,
                width: "125%",
                marginLeft: "-250px",
                marginTop: "0px",
              }}
              to={{
                width: "100%",
                marginTop: "-111px",
                zIndex: 2,
                opacity: 1,
                marginLeft: "0px",
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div className="w-[100%] relative">
                    <img
                      src={"/Img/Parallax/trees1.png"}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "1011px",
                      }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
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
                top: "8%",
                width: "100%",
                position: "relative",
                zIndex: 2,
                opacity: 1,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  {/* <HeaderRescription /> */}
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <div
              className="bg-[#2D061B]  h-[10px]"
              style={{
                overflow: "auto",
              }}
            ></div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
