"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ICTA } from "@/interface";

export const CTA: FC<ICTA> = ({ children }) => (
  <p
    className={twMerge(
      "text-black font-medium text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]"
    )}
  >
    {children}
  </p>
);
