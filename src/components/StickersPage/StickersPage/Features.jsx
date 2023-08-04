import React from "react";
import PhotoStory from "../../Theme/icons/PhotoStory";
import MdiArt from "../../Theme/icons/MdiArt";
import StarSticker from "../../Theme/icons/StarSticker";
import CreativityStickers from "../../Theme/icons/CreativityStickers";
import PrivacyStickers from "../../Theme/icons/PrivacyStickers";
import UniqStickers from "../../Theme/icons/UniqStickers";

export default function Features() {
  return (
    <div className="mt-[72px] ">
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-start px-[16px]  py-[4px] bg-orange-300 bg-opacity-40 rounded-full">
          <p className="font-poppins font-medium text-base leading-6 text-orange-300">
            Features
          </p>
        </div>
        <h1 className="text-textBtn font-[500] text-center text-[#2D061B] w-[813px] pt-[21px] text-[32px]">
          Get Creative and Make Your Own&nbsp;
          <span className="text-[#EBB268]">Personalized Stickers</span>
          &nbsp;with Our Stunning Sticker Maker
        </h1>
      </div>
      <div className="mt-[40px] flex flex-wrap pb-[165px] gap-[60px] justify-center">
        <div className="flex flex-col items-center justify-center w-[384px]">
          <PhotoStory />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Your Photo, Your Story
          </h1>
          <p className="font-textBtn font-medium text-base leading-6 text-center text-gray-600">
            Whether you snap a picture within the app or choose one from your
            gallery, MyStickerPal turns your photo into an authentic and
            personal sticker collection that truly represents you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[384px]">
          <MdiArt />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Styles That Fit Your Personality
          </h1>
          <p className="font-textBtn font-normal text-base leading-6 text-center text-gray-600">
            Select from a range of artistic styles such as caricature, cartoon,
            and more, to match your unique flair. Each style is available for
            $4.99, unlocking endless possibilities for self-expression.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[384px]">
          <StarSticker />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Tailored to You
          </h1>
          <p className="font-textBtn font-normal text-base leading-6 text-center text-gray-600">
            Our advanced sticker generator creates a diverse set of stickers,
            each designed to showcase you in a variety of scenarios, adding an
            extra layer of personal touch to your digital conversations.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[384px]">
          <CreativityStickers />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Effortless Creativity
          </h1>
          <p className="font-textBtn font-normal  text-base leading-6 text-center text-gray-600">
            With MyStickerPal's user-friendly interface, designing and sharing
            your custom stickers is a breeze – no design experience required!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[384px]">
          <PrivacyStickers />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Your Privacy Matters
          </h1>
          <p className="font-textBtn font-normal  text-base leading-6 text-center text-gray-600">
            At MyStickerPal, we respect your privacy. We store no personal data
            and ensure your photos are processed securely.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[384px]">
          <UniqStickers />
          <h1 className="font-textBtn text-[20px] text-lg leading-9 text-center text-black">
            Spread Your Uniqueness
          </h1>
          <p className="font-textBtn font-normal text-base leading-6 text-center text-gray-600">
            Easily export your personalized stickers to your favorite messaging
            platforms and share your distinct style with friends and family.
          </p>
        </div>
      </div>
    </div>
  );
}
