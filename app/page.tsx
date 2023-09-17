"use client";

import { Button, Container, MainContainer } from "@/universal";

const Home = () => (
  <MainContainer>
    <Container className="flex justify-center items-center gap-5 mt-10 text-center h-screen bg-primary flex-col">
      <h1>This is home page</h1>
      <Button>Click here</Button>
    </Container>
  </MainContainer>
);

export default Home;
