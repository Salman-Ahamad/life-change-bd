"use client";

import Image from "next/image";
import Link from "next/link";

const Brand = () => (
  <Link href="/" className="text-white">
    <Image src="/logo.png" width={60} height={24} alt="Life Change Bd" />
  </Link>
);

export default Brand;
