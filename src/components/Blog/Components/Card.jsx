import React from "react";
import { addRelatedId } from "../../../store/blogStore";
import { link } from "../../../utils/Api/url";

export default function Card({ post, i, excerptList }) {
  const elementsCounter = (i) => i % 2;
  const CheckHeight = (Big) => (Big ? "550px" : "460px");

  return (
    <div
      className="rounded-[15px] bg-gradient-to-r from-cardElFrom to-cardElTo"
      style={{
        backgroundImage: `url(${link}${post?.thumbnail})`,
      }}
    >
      <a href={`/post/${post?._id}`}>
        <div
          className="flex h-[460px] w-[373px] cursor-pointer flex-col items-end justify-between rounded-[15px] bg-gradient-to-r from-cardElFrom to-cardElTo text-left"
          style={{
            height: `${CheckHeight(!!elementsCounter(i))}`,

            background:
              "linear-gradient(179.78deg, rgba(45, 6, 27, 0.18) -18.33%, rgba(45, 6, 27, 0.85) 99.81%)",
          }}
          onClick={() => {
            addRelatedId(post?._id);
          }}
        >
          <div>
            <p className="pr-[16px] pt-[19px] font-textSec text-[18px] leading-[26px] text-white">
              {post?.date}
            </p>
          </div>
          <div className="px-[16px] pb-[26px]">
            <h1 className="pb-[9px] font-mainText text-[32px] leading-[36px] text-white">
              {post?.title}
            </h1>
            <p className="font-textSec text-[18px] leading-[26px] text-[#999393]">
              {excerptList && excerptList[i]}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
