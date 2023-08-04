import React from "react";
import "./Style.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[1280px]">
      <div className="flex-col">
        <div className="custom-loader" />
        <div>
          <p className="text">loading</p>
        </div>
      </div>
    </div>
  );
}
