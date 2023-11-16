import React, { useState } from "react";
import MinusIco from "../Theme/Icons/Minus";
import PlusIco from "../Theme/Icons/PlusIco";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { setEditAdmin, clearData } from "../../store/admin/adminSlice";

export default function Window({ name, children, edit = false }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blog.listBlog);

  const excerptList = blogList?.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });

  const clearStore = () => {
    dispatch(setEditAdmin(false));
    dispatch(clearData());
  };

  if (edit) {
    return (
      <div className="flex  w-[80%] rounded-[20px]  bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] relative">
        <div className="flex flex-col mr-[100px] w-[100%]">
          <h2 className="font-mainText text-[20px] text-main-color">{name}</h2>
          {open && (
            <div className="flex flex-wrap justify-between">
              {blogList?.length &&
                blogList.map((post, i) => (
                  <div className="pb-[25px]"  key={Math.random(0, 1)}>
                    <Post
                      post={post}
                      i={i}
                      excerptList={excerptList}
                      key={Math.random(0, 1)}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
        <div
          className="cursor-pointer  absolute right-[34px]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <div onClick={clearStore}>
              <MinusIco />
            </div>
          ) : (
            <PlusIco />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-[80%] rounded-[20px]  bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] relative">
        <div className="flex flex-col mr-[100px] w-[100%]">
          <h2 className="font-mainText text-[20px] text-main-color">{name}</h2>
          {open && <div>{children}</div>}
        </div>
        <div
          className="cursor-pointer  absolute right-[34px]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <div onClick={clearStore}>
              <MinusIco />
            </div>
          ) : (
            <PlusIco />
          )}
        </div>
      </div>
    );
  }
}
