"use client";

import { ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";

import { IFormikError } from "@/interface";

export const FormikError = ({
  name,
  component = "div",
  className,
}: IFormikError) => (
  <ErrorMessage
    name={name}
    component={component}
    className={twMerge(
      "text-red-600 absolute -bottom-[5px] left-[5px]",
      className
    )}
  />
);
