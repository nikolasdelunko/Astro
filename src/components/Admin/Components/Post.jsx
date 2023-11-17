import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIco from "../../Theme/Icons/EditIco";
import DeleteIco from "../../Theme/Icons/DeleteIco";
import blogAPI from "../../../utils/Api/blogAPI";
import { setTouch } from "../../../store/helpersStore";
import { setEditAdmin, addPost } from "../../../store/adminSlice";
import { deleteFile } from "../../../utils/Api/uploadApi";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../../utils/customHooks/useConfirm";
import { useStore } from "@nanostores/react";

export default function Card({ post, i, excerptList }) {
  const touch = useStore($touch);
  const { confirm } = useConfirm();

  const link = "http://localhost:3009";

  const deletePost = async (id, thumbnail) => {
    const a = await confirm(`do you want delete ${post.title} ?`);
    const photo = thumbnail.split("/")[2];
    if (a) {
      try {
        const result = await blogAPI.DeleteBlog(id);
        await deleteFile(`/${photo}`);
        snackActions.success(result.data);
        return setTouch(!touch);
      } catch (e) {
        snackActions.error(e.name);
      }
    }
  };
  return (
    <div
      className="rounded-[15px] bg-gradient-to-r from-cardElFrom to-cardElTo"
      style={{
        backgroundImage: `url(${link}${post?.thumbnail})`,
      }}
    >
      <div
        className="relative flex h-[360px] w-[273px] flex-col items-end justify-between rounded-[15px] bg-gradient-to-r from-cardElFrom to-cardElTo text-left"
        style={{
          background:
            "linear-gradient(179.78deg, rgba(45, 6, 27, 0.18) -18.33%, rgba(45, 6, 27, 0.85) 99.81%)",
        }}
      >
        <div className="flex w-[100%] items-center justify-between pt-[14px]">
          <div className="flex items-center gap-[14px] pl-[16px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(setEditAdmin("post"));
                dispatch(addPost(post));
              }}
            >
              <EditIco />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                deletePost(post._id, post.thumbnail);
              }}
            >
              <DeleteIco />
            </div>
          </div>
          <p className="pr-[16px] font-textSec text-[12px] leading-[26px]  text-white">
            {post.date}
          </p>
        </div>
        <div className="px-[12px] pb-[26px]">
          <h1 className="pb-[9px] font-mainText text-[32px] leading-[36px] text-white">
            {post.title}
          </h1>
          <p className="font-textSec text-[12px] leading-[26px] text-[#999393]">
            {excerptList[i]}
          </p>
        </div>
      </div>
    </div>
  );
}
