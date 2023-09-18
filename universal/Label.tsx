"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ILabel } from "@/interface";

export const Label: FC<ILabel> = ({ children, className, uppercase }) => (
  <label
    className={twMerge(
      `text-lg md:text-xl lg:text-2xl leading-[22px] md:leading-[28px] text-center font-poppins ${
        uppercase && "uppercase"
      }`,
      className
    )}
  >
    {children}
  </label>
);
