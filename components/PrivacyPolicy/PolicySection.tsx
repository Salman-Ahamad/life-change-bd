"use client";

import { IPrivacyPolicyWithClass } from "@/interface";
import { CommonText, Title } from "@/universal";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const PolicySection: FC<IPrivacyPolicyWithClass> = ({
  className,
  title,
  content,
}) => (
  <div className={twMerge(`pb-4 text-lg`, className)}>
    {title && (
      <Title
        variant="H5"
        className="pb-4 text-lg font-semibold text-center capitalize"
      >
        {title}
      </Title>
    )}
    <div className="text-justify flex flex-col gap-[14px]">
      {content.map((item, idx) => (
        <CommonText key={idx} className="text-justify">
          {item}
        </CommonText>
      ))}
    </div>
  </div>
);
