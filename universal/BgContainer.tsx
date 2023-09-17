"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IBgContainer } from "@/interface";
import { BackgroundImg } from ".";

export const BgContainer: FC<IBgContainer> = ({
  children,
  className,
  img,
  mobImg,
}) => (
  <main
    className={twMerge(
      `container w-full md:w-[95%] lg:w-[99%] xl:w-full max-w-[1024px] mx-auto`,
      className
    )}
  >
    <BackgroundImg
      img={img}
      mobImg={mobImg}
      className="md:rounded-3xl md:overflow-hidden mt-12 md:mt-[72px]mx-10"
    >
      {children}
    </BackgroundImg>
  </main>
);
