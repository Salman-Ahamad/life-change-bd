"use client";

import { IChildrenWithTitle } from "@/interface";
import { googleMeet } from "@/lib/assets";
import { Button, Title } from "@/universal";
import Image from "next/image";
import React, { FC } from "react";

export const ActivePageCard: FC<IChildrenWithTitle> = ({ title, children }) => {
  return (
    <div className="shadow-lg border p-4 h-fit space-y-2.5">
      <Title variant="H5" className="pb-4">
        {title}
      </Title>
      {children}
    </div>
  );
};

export const DataRow: FC<{
  title: string;
  btnText?: string;
  icon?: boolean;
}> = ({ title, btnText = "Message", icon }) => {
  return (
    <div className="flex justify-between items-center gap-2.5 py-2 hover:bg-gray-100">
      {icon && (
        <Image
          src={googleMeet}
          alt="Google Meet Icon"
          className="w-7 h-7 pr-2"
        />
      )}
      <p>{title}</p>
      <Button variant="secondary">{btnText}</Button>
    </div>
  );
};
