"use client";

import { ITbody } from "@/interface";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Tbody = ({ label, href, className }: ITbody) => (
  <td className={twMerge("px-2.5 py-3 whitespace-nowrap", className)}>
    {href ? <Link href={href}>{label}</Link> : label}
  </td>
);
