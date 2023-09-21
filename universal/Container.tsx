"use client";

import { twMerge } from "tailwind-merge";

import { IChildrenWithClassName } from "@/interface";

export const Container = ({ children, className }: IChildrenWithClassName) => (
  <section
    className={twMerge(
      `container w-full px-4 xl:px-8 max-w-7xl mx-auto`,
      className
    )}
  >
    {children}
  </section>
);
