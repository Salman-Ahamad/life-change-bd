"use client";

import { ForgotPasswordForm } from "@/components";
import { Container, Title } from "@/universal";
import { FC } from "react";

const ForgotPassword: FC = () => {
  return (
    <Container className="h-screen flex flex-col justify-center items-center w-full  mx-auto">
      <Title variant="H3" className="mb-10 normal-case text-center">
        Forgot Password
      </Title>
      <ForgotPasswordForm />
    </Container>
  );
};

export default ForgotPassword;
