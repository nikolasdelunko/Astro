import React, { useEffect } from "react";
import Header from "./StickersPage/Header";
import HeaderMob from "./StickersPage/Mob/HeaderMob";
import Features from "./StickersPage/Features";
import Howitsworks from "./StickersPage/HowItsWorks";
import StickerStyle from "./StickersPage/StickerStyle";
import Download from "./StickersPage/Download";
import { setPage, modalStickerMobile } from "../../store/helpersStore";
import useResize from "../../utils/customHooks/use-resize";
import ModalMobSticker from "../Modal/ModalMobSticker";
import CaricatureStyle from "./StickersPage/Mob/CaricatureStyle";
import ChibiStyle from "./StickersPage/Mob/ChibiStyle";
import PayPageMob from "./StickersPage/Mob/PayPageMob";
// import UseSeo from "../../utils/customHooks/use-seo";

export default function StickersPage() {
  const mob = useResize();

  useEffect(() => {
    setPage("StickerPal");
  }, []);

  return (
    <>
      {/* <UseSeo
        title={"Your Own Personalized Stickers"}
        description={
          "Get Creative and Make Your Own Personalized Stickers with Our Stunning Sticker Maker"
        }
        keywords={"printed portrait, Convert Photo, Anime Art"}
      /> */}
      <div className="relative max-[420px]:bg-[#EEECEA]">
        {mob ? <HeaderMob /> : <Header />}
        {!mob && <Features />}
        {!mob && <Howitsworks />}
        {!mob && <StickerStyle />}
        {!mob && <Download />}
        {mob && modalStickerMobile === 1.1 && (
          <ModalMobSticker content={<CaricatureStyle />} />
        )}
        {mob && modalStickerMobile === 1.2 && (
          <ModalMobSticker content={<ChibiStyle />} />
        )}
        {mob && modalStickerMobile === 1.3 && (
          <ModalMobSticker content={<PayPageMob />} />
        )}
      </div>
    </>
  );
}
