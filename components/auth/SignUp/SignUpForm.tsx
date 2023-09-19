"use client";

import { CommonText, Title } from "@/universal";
import Link from "next/link";
import { FC } from "react";
import { FormGroup } from "./FormGroup";

export const SignUpForm: FC = () => (
  <section className="h-screen flex justify-between items-center px-5">
    <div className="w-full max-w-[413px] mx-auto border border-primary rounded-md p-5 justify-center items-center">
      <Title variant="H3" className="mb-10">
        Register Form
      </Title>

      <FormGroup />

      <CommonText className="text-center mt-5">
        Have already an account?&nbsp;
        <Link href="/login" className="text-primary">
          Login here
        </Link>
      </CommonText>
    </div>
  </section>
);
