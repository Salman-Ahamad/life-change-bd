"use client";

import { bnsLogo } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Brand: FC = () => (
  <Link href="/">
    <Image src={bnsLogo} width={60} height={24} alt="Life Change Bd" />
  </Link>
);
