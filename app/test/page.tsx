"use client";

import { Button, CommonText, Container, MainContainer } from "@/universal";

const Test = () => (
  <MainContainer>
    <Container className="flex justify-center items-center gap-5 mt-10 text-center h-screen bg-black flex-col">
      <CommonText className="text-white">
        This is Test page Common test demo
      </CommonText>
      <Button variant="primary">Click here</Button>
      <Button variant="secondary">Click here</Button>
      <Button variant="accent">Click here</Button>
    </Container>
  </MainContainer>
);

export default Test;
