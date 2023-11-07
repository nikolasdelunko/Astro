import React, { useState } from "react";
import { snackActions } from "./useSnackBarUtils";
import { setListPhoto } from "../../store/stickers";
import { uploadStickers } from "../Api/uploadApi";
import { GetSticker } from "../Api/stickerApi";

const useUpload = () => {
  const [drag, setDrag] = useState(false);
  const [listStickers, setListStickers] = useState();
  //! dispatch

  const uploadImage = async () => {
    const resStickers = await GetSticker();
    const smallStickers = await resStickers.data.map(
      (sticker) => sticker.urls.small
    );
    setListStickers(smallStickers);
  };

  const handleUpload = async (data) => {
    if (!data) {
      snackActions.warning("Please select a file");
      return;
    } else {
      try {
        const formData = new FormData();
        for (let i = 0; i < data.length; i++) {
          formData.append("photos", data[i]);
        }
        const response = await uploadStickers(formData);
        const fileUrls = response.data;
        setListPhoto({ thumbnail: fileUrls })
        if (response.status === 200) {
          snackActions.success("You have successfully uploaded the image");
          uploadImage();
        }
      } catch (error) {
        snackActions.error(error.message);
      }
    }
  };

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    handleUpload(e.dataTransfer.files);
    setDrag(false);
  };

  return {
    handleUpload,
    dropHandler,
    dragLeaveHandler,
    dragStartHandler,
    drag,
    listStickers,
    uploadImage,
  };
};

export default useUpload;
