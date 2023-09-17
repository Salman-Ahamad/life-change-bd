"use client";

import { Button, Container, MainContainer } from "@/universal";

const Home = () => (
  <MainContainer>
    <Container className="flex justify-center items-center gap-5 mt-10 text-center h-screen bg-black flex-col">
      <h1 className="text-white">This is home page</h1>
      <Button variant="primary">Click here</Button>
      <Button variant="secondary">Click here</Button>
      <Button variant="accent">Click here</Button>
    </Container>
  </MainContainer>
);

export default Home;
