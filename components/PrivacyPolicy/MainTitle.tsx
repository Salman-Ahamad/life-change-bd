"use client";

import { IChildrenWithClassName } from "@/interface";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export const MainTitle: FC<IChildrenWithClassName> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={twMerge(
        `pb-16 pt-6 text-2xl font-semibold text-center`,
        className
      )}
    >
      {children}
    </h2>
  );
};
