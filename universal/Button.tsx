"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IButton } from "@/interface";

export const Button: FC<IButton> = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={twMerge(
      `bg-transparent hover:bg-secondary px-5 py-2.5 text-sm rounded-md text-white text-center font-sora font-semibold border border-white transition-all delay-75 `,
      className
    )}
  >
    {children}
  </button>
);
