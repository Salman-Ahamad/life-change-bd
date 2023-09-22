"use client";

import { ForgotPasswordForm } from "@/components";
import { FC } from "react";

const ForgotPassword: FC = () => (
  <main className="h-screen flex justify-between items-center">
    <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
      <ForgotPasswordForm />
    </section>
  </main>
);

export default ForgotPassword;
