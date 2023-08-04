import React from "react";

// photo just example
const data = {
  photo: "http://localhost:3000/checkout/Cover2.png",
  price: "41.66",
  pages: "47",
  paperSize: "A4",
  paperColor: "#F7F7F7",
  subtotal: "GBP 41.66",
  vat: "GBP 8.33",
  shipping: "FREE",
  total: "49,99",
};

export default function RightSide() {
  return (
    <div className="pt-[32px] flex flex-col pr-[30px] w-[80%]">
      <div className="flex max-[420px]:flex-col ">
        <div>
          <img
            className="w-[206px] h-[291px]"
            src={require("../Theme/Img/Cover2.png")}
            alt="story book"
          />
        </div>
        <div>
          <div className="pl-[32px] pt-[15px] max-[420px]:pl-[0px]">
            <h2 className="text-main-color text-textSec text-[20px] font-[600] pb-[16px]">
              GBP {data.price}
            </h2>
            <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400] pb-[6px]">
              Storybook
            </p>
            <p className="text-main-color text-textSec text-[16px] font-[600] pb-[82px]">
              The Haunted House
            </p>
          </div>
          <div className="flex justify-between pl-[32px] max-[420px]:pl-[0px]">
            <div className="flex flex-col">
              <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400] pb-[16px]">
                Pages
              </p>
              <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400] pb-[16px]">
                Paper Size
              </p>
              <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400]">
                Paper Color
              </p>
            </div>
            <div className="flex flex-col absolute right-[15%]">
              <p className="text-main-color text-textSec text-[16px] font-[600]  pb-[16px]">
                {data.pages}
              </p>
              <p className="text-main-color text-textSec text-[16px] font-[600]  pb-[16px]">
                {data.paperSize}
              </p>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: `${data.paperColor}`,
                  border: "1px solid #EBB268",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#ECECEC] mt-[48px] mb-[17px]"></div>
      <div className="flex justify-between  pr-[10%] max-[420px]:pr-[0px]">
        <div className="flex flex-col">
          <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400] pb-[16px]">
            Subtotal (1x Storybook)
          </p>
          <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400] pb-[16px]">
            VAT 20%
          </p>
          <p className="text-[#C5C3C3] text-textSec text-[14px] font-[400]">
            Shipping Fee
          </p>
        </div>
        <div className="flex flex-col text-right">
          <p className="text-main-color text-textSec text-[16px] font-[600]  pb-[16px]">
            {data.subtotal}
          </p>
          <p className="text-main-color text-textSec text-[16px] font-[600]  pb-[16px]">
            {data.vat}
          </p>
          <p className="text-main-color text-textSec text-[16px] font-[600]  pb-[16px]">
            {data.shipping}
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#ECECEC] mt-[17px] mb-[17px]"></div>
      <div className="flex justify-between  pr-[10%]">
        <p className="text-[#C5C3C3] text-textSec text-[16px] font-[600]">
          Shipping Fee
        </p>
        <p className="text-main-color text-textSec text-[20px] font-[700] pb-[16px]">
          GBR {data.total}
        </p>
      </div>
    </div>
  );
}
