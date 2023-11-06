import React from "react";
import { openModal } from "../../store/helpersStore";

export default function HeaderRescription() {
  return (
    <div className="mx-[20%] flex flex-col  items-center justify-center pb-[212px] pt-[200px] max-[420px]:mx-[10%] max-[420px]:pt-[66px]">
      <h1 className="mb-[24px] text-center font-mainText text-[48px] leading-[53px]  text-text-color max-[420px]:mx-[5%] max-[420px]:text-[24px] max-[420px]:leading-[32px]">
        Become The Hero Of Your Own Story with our AI-powered storybook creator
      </h1>
      <p className="mx-[5%] mb-[24px] text-center font-main text-[24px] leading-[29px] text-text-color max-[420px]:mb-[34px] max-[420px]:text-[14px] max-[420px]:leading-[20px]">
        With CrazyPrints, you can create custom stories that are tailored to
        your interests and preferences. Our AI algorithms generate unique
        stories and illustrations that are personalised to you, ensuring that no
        two books are alike. And with our high-quality printing, your book will
        be a keepsake to treasure for years to come.
      </p>
      <div className="flex items-center gap-[24px] max-[420px]:flex-col">
        <button
          className="btn-second flex items-center justify-center max-[420px]:px-[32px] max-[420px]:text-[16px]"
          onClick={() => {
            openModal(true);
          }}
        >
          Learn More
        </button>
        <a href="/create">
          <button
            className="btn flex items-center justify-center max-[420px]:px-[32px] max-[420px]:text-[16px]"
            onClick={() => {
              openModal(true);
            }}
          >
            Start to Create a Book
          </button>
        </a>
      </div>
    </div>
  );
}
