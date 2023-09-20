"use client";

import { IChildrenWithClassName } from "@/interface";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export const SubTitle: FC<IChildrenWithClassName> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={twMerge(`pb-4 text-lg font-semibold text-center`, className)}
    >
      {children}
    </h3>
  );
};
