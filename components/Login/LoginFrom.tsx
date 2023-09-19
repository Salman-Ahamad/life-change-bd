"use client";

import { Container, MainContainer } from "@/universal";
import { FC } from "react";
import { FormGroup } from "./FormGroup";

export const LoginFrom: FC = () => (
  <MainContainer>
    <Container className="h-screen w-full flex justify-center items-center">
      <FormGroup />
    </Container>
  </MainContainer>
);
