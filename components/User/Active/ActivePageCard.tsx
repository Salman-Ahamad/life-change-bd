"use client";

import { IChildrenWithTitle } from "@/interface";
import { Button, Title } from "@/universal";
import React, { FC } from "react";

export const ActivePageCard: FC<IChildrenWithTitle> = ({ title, children }) => {
  return (
    <div className="shadow-lg border p-4 h-fit">
      <Title variant="H5" className="pb-4">
        {title}
      </Title>
      {children}
    </div>
  );
};

export const DataRow: FC<{ title: string; btnText?: string }> = ({
  title,
  btnText = "Message",
}) => {
  return (
    <div className="flex justify-between items-center py-2 hover:bg-gray-100">
      <p>{title}</p>
      <Button variant="secondary">{btnText}</Button>
    </div>
  );
};
