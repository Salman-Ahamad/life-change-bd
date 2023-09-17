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
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={twMerge(
      `bg-high-contrast px-8 py-3 text-base rounded-lg text-surface text-center font-sora font-extrabold`,
      className
    )}
  >
    {children}
  </button>
);
