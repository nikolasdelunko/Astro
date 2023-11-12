import React, { useEffect } from "react";
import BurgerModal from "./BurgerModal";
import ModalConfirm from "./ModalConfirm";
import ModalCreate from "./ModalCreate/ModalCreate";
import ModalPaySticker from "./ModalPaySticker";
import PayPageMob from "./ModalMobSticker";
import { useStore } from "@nanostores/react";
import {
  $burger,
  $modal,
  $modalConfirm,
  $page,
  $modalSticker,
} from "../../store/helpersStore";
import useResize from "../../utils/customHooks/use-resize";

export default function ModalControl() {
  const modal = useStore($modal);
  const burger = useStore($burger);
  const { open } = useStore($modalConfirm);
  const page = useStore($page);
  const modalSticker = useStore($modalSticker);
  const mob = useResize();

  useEffect(() => {}, [modal, burger, open, page]);

  return (
    <div>
      {burger && <BurgerModal />}
      {open && <ModalConfirm />}
      {modal && <ModalCreate />}
      {page === "UploadImage" && modalSticker && !mob && <ModalPaySticker />}
      {page === "UploadImage" && modalSticker && mob && <PayPageMob />}
    </div>
  );
}
