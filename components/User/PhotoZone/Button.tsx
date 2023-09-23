"use client";

import React, { FC } from "react";
import { IChildrenWithClassName } from "@/interface";
import { twMerge } from "tailwind-merge";

export const Button = ({ input, selectedFile, onClick }) => {
  return (
    <div>
      <button
        className="bg-primary text-white w-[100%] py-2 px-5 rounded-lg mt-[30px] disabled:bg-gray-300 disabled:text-gray-500"
        disabled={!input.trim() && !selectedFile}
        onClick={onClick}
      >
        Post
      </button>
    </div>
  );
};

export const ButtonSmall: FC<IChildrenWithClassName> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-700 active:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonLarge: FC<IChildrenWithClassName> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-700 active:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
