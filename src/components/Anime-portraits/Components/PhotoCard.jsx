import React from "react";

export default function PhotoCard({
  width = "270px",
  height = "389px",
  image,
}) {
  return (
    <div>
      <div
        className="rounded-[24px] border-[8px] border-[#EBB268] z-[2] max-[420px]:border-[4px] max-[420px]:rounded-[12px]"
        style={{
          width: width,
          height: height,
        }}
      >
        <div
          className="rounded-[15px] h-[100%] w-[100%] max-[420px]:rounded-[8px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
}
