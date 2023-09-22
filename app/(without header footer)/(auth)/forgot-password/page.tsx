"use client";

import { ForgotPasswordForm } from "@/components";
import { Container } from "@/universal";
import { FC } from "react";

const ForgotPassword: FC = () => (
  <section className="h-screen flex justify-between items-center">
    <Container className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
      <ForgotPasswordForm />
    </Container>
  </section>
);

export default ForgotPassword;
