import React from "react";
import Payment from "../Checkout/Stripe/index";
import Cross from "../Theme/icons/Cross";
import PolygonForModal from "../Theme/icons/PolygonForModal";
import PolygonForModal2 from "../Theme/icons/PolygonForModal2";
import {
  setModalSticker,
  $page,
  $modalSticker,
} from "../../store/helpersStore";
import { useStore } from "@nanostores/react";
import useResize from "../../utils/customHooks/use-resize";

export default function ModalPaySticker() {
  //! dispatch
  //! need to setup sum & currency  in stripe
  const data = { total: 49 };
  const page = useStore($page);
  const modalSticker = useStore($modalSticker);
  const mob = useResize();

  return (
    <>
      {page === "UploadImage" && modalSticker && !mob && (
        <div
          className="fixed left-0 top-0 z-50 block h-[100%] w-[100%] bg-modal"
          onClick={(e) => {
            setModalSticker(false);
          }}
        >
          <div
            className="fixed left-[22%]  top-[14%] rounded-[8px] bg-[#FFFFFF] max-[420px]:left-[5%] max-[420px]:top-[25%] max-[420px]:w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-left">
                <div className="flex justify-between pl-[32px]">
                  <div className="mt-[32px] w-[408px] pr-[32px]">
                    <h1 className="pb-[37px] text-left font-textBtn text-[24px] text-[#2D061B]">
                      Purchase your style, unlock your &nbsp;
                      <span className="text-[#EBB268]">stunning stickers</span>
                    </h1>
                    <div className="pb-[32px]">
                      <Payment data={data} />
                    </div>
                  </div>
                  <div className="relative rounded-r-[8px] bg-[#0A0A0C]">
                    <div className="absolute left-0 z-0">
                      <PolygonForModal />
                    </div>
                    <div className="absolute bottom-0 left-0 z-0">
                      <PolygonForModal2 />
                    </div>
                    <div
                      className="absolute right-[8px] top-[8px] h-[24px] w-[24px] cursor-pointer rounded-[50%] bg-[#EBB268]"
                      onClick={() => {
                        setModalSticker(false);
                      }}
                    >
                      <Cross />
                    </div>
                    <div className="flex w-[428px] flex-col px-[41px] pt-[63px]">
                      <h1 className="pb-[16px] text-center font-textBtn text-[24px] text-[#FFFFFF]">
                        Create Your Own Sticker With a &nbsp;
                        <span className="text-[#EBB268]">Caricature Style</span>
                      </h1>
                      <h2 className="pb-[32px] text-center font-textBtn text-[24px] text-[#EBB268]">
                        $4.99
                      </h2>
                    </div>
                    <div className="flex items-center justify-center pb-[52px]">
                      <div className="from-[rgba(0, 0, 0, 0.42)] rounded-tl-8 rounded-tr-8 relative h-[289px] w-[326px] bg-gradient-to-b via-transparent to-transparent">
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
      )}
    </>
  );
}
