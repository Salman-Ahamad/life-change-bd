"use client";

import { ITHeader } from "@/interface";

export const THeader = ({ title }: ITHeader) => (
  <th className="p-2.5 capitalize text-center">{title}</th>
);
