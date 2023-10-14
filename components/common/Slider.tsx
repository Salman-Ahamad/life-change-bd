"use client";

import Image from "next/image";
import { FC } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider: FC<{ slides: string[] }> = ({ slides }) => {
  return (
    <div className="p-4 w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
        effect={"fade"}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
