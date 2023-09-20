"use client";

import { IPrivacyPolicyWithClass } from "@/interface";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export const PolicySection: FC<IPrivacyPolicyWithClass> = ({
  className,
  title,
  content,
}) => {
  return (
    <div className={twMerge(`pb-4 text-lg`, className)}>
      {title && (
        <h3 className="pb-4 text-lg font-semibold text-center">{title}</h3>
      )}
      <div className="text-justify">
        {content.map((item, idx) => (
          <p key={idx} className="text-justify mb-[14px]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
