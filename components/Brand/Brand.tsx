"use client";

import Image from "next/image";
import Link from "next/link";
import { bnsLogo } from "@/public/assets";

const Brand = () => (
  <Link href="/" className="text-white">
    <Image src={bnsLogo} width={60} height={24} alt="Life Change Bd" />
  </Link>
);

export default Brand;
