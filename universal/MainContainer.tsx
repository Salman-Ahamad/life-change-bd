"use client";

import { twMerge } from "tailwind-merge";

import { IMainContainer } from "@/interface";

export const MainContainer = ({
  children,
  className,
  bgColor = "transparent",
  navbar,
  isScrolling,
}: IMainContainer) => {
  const background =
    (bgColor === "surface" && "bg-surface") ||
    (bgColor === "surface-accent" && "bg-surface-accent") ||
    (bgColor === "surface-accent-sunken" && "bg-surface-accent-sunken") ||
    (bgColor === "surface-sunken" && "bg-surface-sunken") ||
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
