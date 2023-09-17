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
    (bgColor === "transparent" && "bg-transparent");

  return (
    <main className={`w-full ${background}`}>
      <section
        className={twMerge(`w-full max-w-[1280px] mx-auto relative`, className)}
      >
        {children}
      </section>
    </main>
  );
};
