"use client";

import { ITbody } from "@/interface";
import Link from "next/link";

export const Tbody = ({ label, href }: ITbody) => (
  <td className="px-2.5 py-3 whitespace-nowrap">
    {href ? <Link href={href}>{label}</Link> : label}
  </td>
);
