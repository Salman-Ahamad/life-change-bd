"use client";

import { IClassName } from "@/interface";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export const BackButton: FC<IClassName> = ({ className }) => {
  const router = useRouter();
  return (
    <IoMdArrowRoundBack onClick={() => router.back()} className={className} />
  );
};
