import React, { useEffect } from "react";
import { setPage } from "../../store/helpersStore";
import { stickersStore } from "../../store/stickers";
import UploadedImage from "../StickersPage/StickersPage/UploadImage";
import BeeforeUploadImage from "../StickersPage/StickersPage/BeforeUploadImage";
import useResize from "../../utils/customHooks/use-resize";
import UploadImageMob from "../StickersPage/StickersPage/Mob/UploadImageMob";

export default function UploadImage() {
  const photoCard = stickersStore.listPhoto;

  const mob = useResize();

  useEffect(() => {
    setPage("UploadImage");
    console.log("sms upload");
  }, []);

  if (photoCard?.thumbnail.length) {
    return mob ? (
      <UploadImageMob photo={photoCard?.thumbnail[0]} />
    ) : (
      <UploadedImage photo={photoCard?.thumbnail[0]} />
    );
  } else {
    return <BeeforeUploadImage />;
  }
}
