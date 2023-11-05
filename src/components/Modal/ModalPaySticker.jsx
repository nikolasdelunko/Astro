import React from "react";
import Payment from "../Checkout/Stripe/index";
import Cross from "../Theme/icons/Cross";
import PolygonForModal from "../Theme/icons/PolygonForModal";
import PolygonForModal2 from "../Theme/icons/PolygonForModal2";
import {setModalSticker} from "../../store/helpersStore"

export default function ModalPaySticker() {
  //! dispatch
  //! need to setup sum & currency  in stripe
  const data = { total: 49 };

  return (
    <div
      className="bg-modal top-0 left-0 w-[100%] h-[100%] block fixed z-50"
      onClick={(e) => {
				setModalSticker(false)

      }}
    >
      <div
        className="bg-[#FFFFFF] rounded-[8px]  fixed top-[14%] left-[22%] max-[420px]:w-[90%] max-[420px]:left-[5%] max-[420px]:top-[25%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-left">
            <div className="flex justify-between pl-[32px]">
              <div className="mt-[32px] w-[408px] pr-[32px]">
                <h1 className="font-textBtn text-[24px] text-[#2D061B] text-left pb-[37px]">
                  Purchase your style, unlock your &nbsp;
                  <span className="text-[#EBB268]">stunning stickers</span>
                </h1>
                <div className="pb-[32px]">
                  <Payment data={data} />
                </div>
              </div>
              <div className="bg-[#0A0A0C] rounded-r-[8px] relative">
                <div className="absolute left-0 z-0">
                  <PolygonForModal />
                </div>
                <div className="absolute bottom-0 left-0 z-0">
                  <PolygonForModal2 />
                </div>
                <div
                  className="absolute w-[24px] h-[24px] bg-[#EBB268] rounded-[50%] right-[8px] top-[8px] cursor-pointer"
                  onClick={() => {
										setModalSticker(false)
                  }}
                >
                  <Cross />
                </div>
                <div className="flex flex-col pt-[63px] px-[41px] w-[428px]">
                  <h1 className="font-textBtn text-[24px] text-center text-[#FFFFFF] pb-[16px]">
                    Create Your Own Sticker With a &nbsp;
                    <span className="text-[#EBB268]">Caricature Style</span>
                  </h1>
                  <h2 className="font-textBtn text-[24px] text-center text-[#EBB268] pb-[32px]">
                    $4.99
                  </h2>
                </div>
                <div className="flex justify-center items-center pb-[52px]">
                  <div className="bg-gradient-to-b from-[rgba(0, 0, 0, 0.42)] via-transparent to-transparent rounded-tl-8 rounded-tr-8 h-[289px] w-[326px] relative">
                    <img
                      className="rounded-tl-[8px] rounded-tr-[8px]"
                      src={"../Theme/Img/download1.png"}
                      alt="DownloadImage"
                    />
                    <img
                      className="absolute bottom-[16px] left-[16px]"
                      src={"../Theme/Img/before12.png"}
                      alt="DownloadImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
