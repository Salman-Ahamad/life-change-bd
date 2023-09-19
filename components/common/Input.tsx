"use client";

import { IInput } from "@/interface";
import { Field } from "formik";
import { FormikError } from "./FormikError";

export const Input = ({
  as,
  name,
  type,
  placeholder,
  withBtn,
  btnLabel = "Sign Up",
  isSubmitting,
}: IInput) => {
  const allClassName = `outline-none text-subtle-contrast text-base md:text-lg w-full border border-primary rounded-[5px] py-6 px-3 ${
    as === "textarea" ? "h-full" : "h-7"
  }`;

  return (
    <section
      className={`w-full input-group-with lg:w-[370px] lg:max-w-[370px] relative mb-1  ${
        as === "textarea" ? "h-[267px] items-end" : "h-16 items-center"
      }`}
    >
      {as === "textarea" ? (
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={allClassName}
        />
      ) : (
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={allClassName}
        />
      )}

      <FormikError name={name} component="div" />
    </section>
  );
};
