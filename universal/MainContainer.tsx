"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IMainContainer } from "@/interface";

export const MainContainer: FC<IMainContainer> = ({
  children,
  className,
  bgColor = "transparent",
  navbar,
  isScrolling,
}) => {
  const background =
    (bgColor === "transparent" && "bg-transparent") ||
    (bgColor === "white" && "bg-white");

  return (
    <main
      className={`w-full ${!navbar && background} ${
        navbar &&
        `fixed top-0 z-30 ${
          isScrolling ? "bg-white" : "bg-surface-accent"
        } lg:bg-white transition-all ease-in-out delay-100 `
      }`}
    >
      <section
        className={twMerge(`w-full max-w-[1280px] mx-auto relative`, className)}
      >
        {children}
      </section>
    </main>
  );
};
