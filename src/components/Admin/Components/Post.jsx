import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIco from "../Theme/Icons/EditIco";
import DeleteIco from "../Theme/Icons/DeleteIco";
import blogAPI from "../../utils/Api/blogAPI";
import { setTouch } from "../../store/helpers/helpersSlice";
import { setEditAdmin, addPost } from "../../store/admin/adminSlice";
import { deleteFile } from "../../utils/Api/uploadApi";
import { snackActions } from "../../utils/customHooks/useSnackBarUtils";
import useConfirm from "../../utils/customHooks/useConfirm";

export default function Card({ post, i, excerptList }) {
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.helpers.touch);
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
        return dispatch(setTouch(!touch));
      } catch (e) {
        snackActions.error(e.name);
      }
    }
  };
  return (
    <div
      className="bg-gradient-to-r from-cardElFrom to-cardElTo rounded-[15px]"
      style={{
        backgroundImage: `url(${link}${post?.thumbnail})`,
      }}
    >
      <div
        className="w-[273px] h-[360px] relative bg-gradient-to-r from-cardElFrom to-cardElTo flex items-end flex-col justify-between text-left rounded-[15px]"
        style={{
          background:
            "linear-gradient(179.78deg, rgba(45, 6, 27, 0.18) -18.33%, rgba(45, 6, 27, 0.85) 99.81%)",
        }}
      >
        <div className="flex justify-between w-[100%] pt-[14px] items-center">
          <div className="pl-[16px] gap-[14px] flex items-center">
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
          <p className="font-textSec text-[12px] leading-[26px] text-white  pr-[16px]">
            {post.date}
          </p>
        </div>
        <div className="px-[12px] pb-[26px]">
          <h1 className="font-mainText text-white text-[32px] leading-[36px] pb-[9px]">
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
