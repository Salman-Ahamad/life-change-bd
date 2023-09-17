"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ICommonText } from "@/interface";

export const CommonText: FC<ICommonText> = ({ children, className }) => (
  <p
    className={twMerge(
      `text-black text-sm lg:text-base font-normal`,
      className
    )}
  >
    {children}
  </p>
);
