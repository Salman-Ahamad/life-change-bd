"use client";

import { ITHeader } from "@/interface";

export const THeader = ({ label }: ITHeader) => (
  <th className="p-2.5 capitalize">{label}</th>
);
