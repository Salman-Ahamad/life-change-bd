"use client";

import { IChildren } from "@/interface";
import React, { FC } from "react";

export const Card: FC<IChildren> = ({ children }) => {
  return <div className="">{children}</div>;
};
