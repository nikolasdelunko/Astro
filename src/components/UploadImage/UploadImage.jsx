import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPage } from "../../store/helpers/helpersSlice";
import UploadedImage from "../StickersPage/StickersPage/UploadImage";
import BeeforeUploadImage from "../StickersPage/StickersPage/BeforeUploadImage";
// import useResize from "../../utils/customHooks/use-resize";
import UploadImageMob from "../StickersPage/StickersPage/Mob/UploadImageMob";

export default function UploadImage() {
  // const photoCard = useSelector((state) => state.stickers.listPhoto);
	const photoCard = null
	const mob = false
  // const dispatch = useDispatch();
  // const mob = useResize();
	//! dispatch

  useEffect(() => {
    // dispatch(setPage("UploadImage"));
		console.log("sms upload")
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
