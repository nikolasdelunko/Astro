import React from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../../store/helpers/helpersSlice";

export default function HeaderRescription() {
  // const dispatch = useDispatch();
  return (
    <div className="flex items-center flex-col  justify-center mx-[20%] max-[420px]:mx-[10%] pt-[200px] pb-[212px] max-[420px]:pt-[66px]">
      <h1 className="mb-[24px] font-mainText text-text-color text-[48px] max-[420px]:mx-[5%]  leading-[53px] text-center max-[420px]:text-[24px] max-[420px]:leading-[32px]">
        Become The Hero Of Your Own Story with our AI-powered storybook creator
      </h1>
      <p className="mb-[24px] max-[420px]:mb-[34px] font-main text-text-color text-[24px] mx-[5%] leading-[29px] text-center max-[420px]:text-[14px] max-[420px]:leading-[20px]">
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
            // dispatch(openModal(true));
          }}
        >
          Learn More
        </button>
        <a href="/create">
          <button
            className="btn flex items-center justify-center max-[420px]:px-[32px] max-[420px]:text-[16px]"
            // onClick={() => {
            //   dispatch(openModal(true));
            // }}
          >
            Start to Create a Book
          </button>
        </a>
      </div>
    </div>
  );
}
