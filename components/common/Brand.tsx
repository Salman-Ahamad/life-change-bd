"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { bnsLogo } from "@/public/assets";

export const Brand: FC = () => (
  <Link href="/">
    <Image src={bnsLogo} width={60} height={24} alt="Life Change Bd" />
  </Link>
);
