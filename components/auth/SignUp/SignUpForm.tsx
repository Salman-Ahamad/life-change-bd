"use client";

import { CommonText, Title } from "@/universal";
import Link from "next/link";
import { FC } from "react";
import { FormGroup } from "./FormGroup";

export const SignUpForm: FC = () => (
  <section className="min-h-screen flex justify-between items-center px-5">
    <div className="w-full mx-auto flex flex-col justify-center items-center max-w-[750px] py-20">
      <Title variant="H3" className="normal-case">
        Account Opening Form
      </Title>
      <CommonText className="mb-10 mt-2.5 text-secondary text-center">
        Provide your necessary <br /> information here
      </CommonText>

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
