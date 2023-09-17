"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ILabel } from "@/interface";
import { findFontWeight } from "./constant";

export const Label: FC<ILabel> = ({
  children,
  className,
  fontWeight = "500",
  uppercase,
}) => {
  const weight = findFontWeight(fontWeight);

  return (
    <span
      className={twMerge(
        `tracking-[2px] text-[12px] md:text-[14px] leading-[22px] md:leading-[18px] text-center ${weight}  ${
          uppercase && "uppercase"
        }`,
        className
      )}
    >
      {children}
    </span>
  );
};
