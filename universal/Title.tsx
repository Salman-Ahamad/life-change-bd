"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ITitle } from "@/interface";
import { H } from "./H";

export const Title: FC<ITitle> = ({
  children,
  className,
  variant,
  lowOpacityMobH3,
  lowOpacityWebH4,
}) => {
  const h1 = "text-[38px] lg:text-[52px] leading-[44px] lg:leading-[60px]";
  const h2 = "text-[28px] lg:text-[48px] leading-[34px] lg:leading-[56px]";
  const h3 = `text-[24px] lg:text-[40px] leading-[30px] lg:leading-[48px] 
    ${
      lowOpacityMobH3 &&
      "text-opacity-[0.30000001192092896] lg:text-opacity-100"
    }`;
  const h4 = `text-[18px] lg:text-[18px] leading-[26px] lg:leading-[36px] 
    ${
      lowOpacityWebH4 &&
      "text-opacity-100 lg:text-opacity-[0.20000000298023224]"
    }`;
  const h5 = "text-[18px] leading-[26px]";

  const titleVariant =
    (variant === "H1" && h1) ||
    (variant === "H2" && h2) ||
    (variant === "H3" && h3) ||
    (variant === "H4" && h4) ||
    (variant === "H5" && h5);

  return (
    <H
      variant={variant}
      className={twMerge(`font-extrabold font-sora ${titleVariant}`, className)}
    >
      {children}
    </H>
  );
};
