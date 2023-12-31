"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IMainContainer } from "@/interface";

export const MainContainer: FC<IMainContainer> = ({
  children,
  className,
  bgColor = "transparent",
}) => {
  const background =
    (bgColor === "white" && "bg-white") ||
    (bgColor === "black" && "bg-black") ||
    (bgColor === "accent" && "bg-accent") ||
    (bgColor === "primary" && "bg-primary") ||
    (bgColor === "secondary" && "bg-secondary") ||
    (bgColor === "transparent" && "bg-transparent");

  return (
    <section className={`w-full ${background}`}>
      <div
        className={twMerge(`w-full max-w-[1280px] mx-auto relative`, className)}
      >
        {children}
      </div>
    </section>
  );
};
