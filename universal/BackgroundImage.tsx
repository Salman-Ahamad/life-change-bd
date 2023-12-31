"use client";

import { IBackgroundImage } from "@/interface";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const BackgroundImg: FC<IBackgroundImage> = ({
  children,
  img,
  mobImg,
  className,
  overflow,
  overlay,
}) => (
  <section
    className={twMerge(
      `relative w-full ${overflow && "overflow-hidden"}`,
      className
    )}
  >
    <div className={`absolute w-full inset-0`}>
      <Image
        src={img}
        className={`w-full object-cover ${
          overflow && "min-w-[500px] min-h-[500px]"
        }`}
        alt="background image"
        fill
      />
      {mobImg && (
        <Image
          src={mobImg}
          className="w-full block md:hidden"
          alt="background image"
          fill
        />
      )}
    </div>
    {/* <!-- Overlay with gradient effect --> */}
    {overlay && (
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></div>
    )}
    <div className="relative z-10">{children}</div>
  </section>
);
