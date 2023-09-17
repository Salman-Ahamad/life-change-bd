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
}) => (
  <main className={twMerge(`relative w-full`, className)}>
    <div className={`absolute w-full inset-0`}>
      <Image src={img} className={`w-full`} alt="background image" fill />
      {mobImg && (
        <Image
          src={mobImg}
          className="w-full block md:hidden"
          alt="background image"
          fill
        />
      )}
    </div>

    <section className="relative z-10">{children}</section>
  </main>
);
