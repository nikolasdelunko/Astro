import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Testimonials/styles.css";
import PhotoCard from "./Components/PhotoCard";
import useResize from "../../utils/customHooks/use-resize";

const data = [
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
  { image: "/images/Fotor_AI1.png\r" },
];

export default function WorkGalery() {
  const mob = useResize();
  return (
    <div className=" pb-[225px] max-[420px]:pb-[96px]">
      <div>
        <div className="flex text-center items-center flex-col">
          <h1 className="flex font-mainText pb-[12px] text-regular text-[32px] max-[420px]:mx-[5%]  leading-[35px] max-[420px]:text-[24px] max-[420px]:leading-[32px]">
            Work Gallery
          </h1>
          <h2 className="mb-[64px] max-w-[832px] max-[420px]:mb-[34px] font-main text-white text-[16px]  leading-[22px]  max-[420px]:text-[14px] max-[420px]:leading-[20px]">
            We have made the process as simple and convenient as possible
          </h2>
        </div>
      </div>
      <Swiper
        className="max-[420px]:pb-[176px]"
        watchSlidesProgress={true}
        slidesPerView={5}
        className="mySwiper"
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          // 100: { slidesPerView: 4, spaceBetween: 5 },
          // 1400: { slidesPerView: 5, spaceBetween: 20 },
          // 1900: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {data.map((el) => (
          <SwiperSlide key={Math.random(0, 1)}>
            {mob ? (
              <PhotoCard
                image={el.image}
                width={mob && "146px"}
                height={mob && "211px"}
              />
            ) : (
              <PhotoCard image={el.image} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
