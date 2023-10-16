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
    <div className="p-4 w-full flex justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper flex justify-center"
        effect={"fade"}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={slide}
              width={400}
              height={400}
              alt="Slide Image"
              className="bg-white w-[400px] h-[400px] mx-auto rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
