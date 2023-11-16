import React, { useState, useRef } from "react";
import { uploadFile } from "../../../utils/Api/uploadApi";
import { useDispatch } from "react-redux";
import { addPost } from "../../../store/admin/adminSlice";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePiker = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSelect = () => {
    filePiker.current.click();
  };

  const handleUpload = async (data) => {
    if (!data) {
      snackActions.warning("please select a file");
      return;
    } else {
      const formData = new FormData();
      formData.append("image", selectedFile);
      try {
        const a = await uploadFile(formData);
        dispatch(addPost({ thumbnail: a.data }));
        if (a.status == 200) {
          snackActions.success("you have successfully download image");
        }
      } catch (e) {
        snackActions.error(e.name);
      } finally {
        // await deleteFile();
      }
    }
  };

  return (
    <div>
      <h2 className="font-mainText text-[22px] text-main-color pt-[12px]">
        Upload Image for post
      </h2>
      <input
        ref={filePiker}
        type="file"
        className="overflow-hidden w-0 h-0 opacity-0"
        onChange={handleChange}
        accept="image/*, .png, .jpg, .gif, .web,"
      />
      <button
        type="button"
        className="btn-modal-send flex items-center bg-main-color text-white mb-[10px]"
        onClick={handleSelect}
      >
        select file
      </button>
      <button
        type="button"
        className="btn-modal-send flex items-center bg-main-color text-white"
        onClick={() => handleUpload(selectedFile)}
      >
        Upload
      </button>
    </div>
  );
}
