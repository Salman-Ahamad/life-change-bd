"use client";

import { FC } from "react";

import { Container, Title } from "@/universal";
import { ForgotPasswordForm } from "@/components";

const ForgotPassword: FC = () => (
  <Container className="h-screen flex flex-col justify-center items-center w-full  mx-auto">
    <Title variant="H3" className="mb-10 normal-case text-center">
      Forgot Password
    </Title>
    <ForgotPasswordForm />
  </Container>
);

export default ForgotPassword;
