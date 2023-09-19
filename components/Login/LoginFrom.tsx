"use client";

import { loginBanner } from "@/lib/assets";
import Image from "next/image";
import { FC } from "react";
import { FormGroup } from "./FormGroup";

export const LoginFrom: FC = () => (
  <section className="h-screen flex justify-between items-center">
    <FormGroup />
    <Image
      src={loginBanner}
      className="h-screen w-full md:w-[50vw] hidden md:block"
      alt=""
    />
  </section>
);
