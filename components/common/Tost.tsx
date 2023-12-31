"use client";

import { ITost } from "@/interface";
import { bell } from "@/lib/assets";
import { Button, CommonText } from "@/universal";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

export const Tost: FC<ITost> = ({ label, btnText }) => {
  return (
    <div className="flex justify-start items-center gap-10 bg-green-200 w-fit mx-auto mt-1.5 shadow-md rounded-sm overflow-hidden pr-2.5">
      <label htmlFor="" className="bg-white px-5 py-1">
        <Image src={bell} alt="" className="w-10 h-10" />
      </label>
      <CommonText>{label}</CommonText>
      <Button variant="secondary" onClick={() => signIn("google")}>
        {btnText}
      </Button>
    </div>
  );
};
