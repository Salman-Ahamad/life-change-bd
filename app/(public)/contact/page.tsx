"use client";

import { Header } from "@/components";
import { Container, Title } from "@/universal";
import React from "react";

const page = () => {
  return (
    <>
      <Container>
        <Title variant="H1">CONTACT US</Title>
        <div>
          <p>
            Phone: <a href="tel:+1234567890">918617384824</a>
          </p>
          <p>
            WhatsApp: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
          <p>
            Email at:{" "}
            <a href="mailto:lifechangebd4@gmail.com">lifechangebd4@gmail.com</a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default page;
