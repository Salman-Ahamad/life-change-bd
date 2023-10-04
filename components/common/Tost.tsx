"use client";

import { useCurrentUser } from "@/hooks";
import { ITost } from "@/interface";
import { bell } from "@/lib/assets";
import { Button, CommonText } from "@/universal";
import { sendEmail } from "@/utils";
import Image from "next/image";
import { FC } from "react";

export const Tost: FC<ITost> = ({ label, btnText }) => {
  const userData = useCurrentUser();
  console.log("Client User Data: ", userData);

  return (
    <div className="flex justify-start items-center gap-10 bg-green-200 w-fit mx-auto mt-1.5 shadow-md rounded-sm overflow-hidden pr-2.5">
      <label htmlFor="" className="bg-white px-5 py-1">
        <Image src={bell} alt="" className="w-10 h-10" />
      </label>
      <CommonText>{label}</CommonText>
      <Button
        variant="secondary"
        onClick={() => {
          sendEmail({
            email: userData?.email,
            emailType: "VERIFY",
            userId: userData?.id,
          });
        }}
      >
        {btnText}
      </Button>
    </div>
  );
};
