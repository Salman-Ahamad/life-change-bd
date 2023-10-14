"use client";

import { CommonText, Container, Title } from "@/universal";

const Contact = () => (
  <Container className="mt-10 min-h-screen">
    <Title variant="H1">CONTACT US</Title>
    <div className="flex flex-col justify-center items-center gap-2.5 text-start mt-10">
      <CommonText>
        Email at:&nbsp;
        <a href="mailto:lifechangebd4@gmail.com" className="text-primary">
          lifechangebd4@gmail.com
        </a>
      </CommonText>
    </div>
  </Container>
);

export default Contact;
