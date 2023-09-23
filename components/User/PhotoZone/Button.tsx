"use client";

import React, { FC } from "react";
import { IChildrenWithClassName } from "@/interface";
import { twMerge } from "tailwind-merge";

export const ButtonSmall: FC<IChildrenWithClassName> = ({
  className,
  children,
}) => {
  return (
    <button
      className={twMerge(
        "px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-700 active:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export const ButtonLarge: FC<IChildrenWithClassName> = ({
  className,
  children,
}) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-700 active:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
};
