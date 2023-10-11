"use client";

import { CommonText, Container, Title } from "@/universal";

const Contact = () => (
  <Container className="mt-10 min-h-screen">
    <Title variant="H1">CONTACT US</Title>
    <div className="flex flex-col justify-center items-center gap-2.5 text-start mt-10">
      {/* <CommonText>
        Phone:&nbsp;
        <a href="tel:+1234567890" className="text-primary">
          918617384824
        </a>
      </CommonText> */}
      {/* <CommonText>
        WhatsApp:&nbsp;
        <a href="tel:+1234567890" className="text-primary">
          +1 (234) 567-890
        </a>
      </CommonText> */}
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
