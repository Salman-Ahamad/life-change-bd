"use client";

import { twMerge } from "tailwind-merge";

import { IClassName } from "@/interface";
import { appStore, googlePlay } from "@/lib/assets";
import Image from "next/image";
import { FC } from "react";

export const AppDownload: FC<IClassName> = ({ className }) => (
  <section
    className={twMerge(`flex justify-center items-center gap-2.5`, className)}
  >
    <Image src={appStore} className="w-1/2 md:w-36" alt="" />
    <Image src={googlePlay} className="w-1/2 md:w-36" alt="" />
  </section>
);
