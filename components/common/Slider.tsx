"use client";

import React, { FC, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
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
        // navigation={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
        effect={"fade"}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
