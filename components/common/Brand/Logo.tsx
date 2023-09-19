import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { bnsLogo } from "@/lib/assets";

export const Logo: FC = () => (
  <Link href="/">
    <Image src={bnsLogo} className="w-[60px] h-[24px]" alt="Life Change Bd" />
  </Link>
);
