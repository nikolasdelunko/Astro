import React from "react";
import { NavLink } from "react-router-dom";
// import { addRelatedId } from "../../../store/blog/blogSlice";
// import { useDispatch } from "react-redux";
import { link } from "../../../utils/Api/url";

export default function Card({ post, i, excerptList }) {
  const elementsCounter = (i) => i % 2;
  const CheckHeight = (Big) => (Big ? "550px" : "460px");
  // const dispatch = useDispatch();
  //! dispatch

  return (
    <div
      className="bg-gradient-to-r from-cardElFrom to-cardElTo rounded-[15px]"
      style={{
        backgroundImage: `url(${link}${post?.thumbnail})`,
      }}
    >
      <NavLink to={`/post/${post?._id}`}>
        <div
          className="w-[373px] h-[460px] bg-gradient-to-r from-cardElFrom to-cardElTo flex items-end flex-col justify-between text-left rounded-[15px] cursor-pointer"
          style={{
            height: `${CheckHeight(!!elementsCounter(i))}`,

            background:
              "linear-gradient(179.78deg, rgba(45, 6, 27, 0.18) -18.33%, rgba(45, 6, 27, 0.85) 99.81%)",
          }}
          onClick={() => {
            // dispatch(addRelatedId(post?._id));
          }}
        >
          <div>
            <p className="font-textSec text-[18px] leading-[26px] text-white pt-[19px] pr-[16px]">
              {post?.date}
            </p>
          </div>
          <div className="px-[16px] pb-[26px]">
            <h1 className="font-mainText text-white text-[32px] leading-[36px] pb-[9px]">
              {post?.title}
            </h1>
            <p className="font-textSec text-[18px] leading-[26px] text-[#999393]">
              {excerptList && excerptList[i]}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
