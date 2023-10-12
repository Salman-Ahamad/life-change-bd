"use client";

import { ITbody } from "@/interface";

export const Tbody = ({ label }: ITbody) => (
  <td className="px-2.5 py-3 whitespace-nowrap">{label}</td>
);
