"use client";

import {
  CopyToClipboard,
  FileUploader,
  GoogleMeetLink,
  Slider,
  WhatsAppLink,
} from "@/components";
import { CommonText, Container, Title } from "@/universal";
import { useState } from "react";

const slides = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
];

const Contact = () => {
  const [imgUrl, setImgUrl] = useState("");

  return (
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

      {/* <WhatsAppLink /> */}
      {/* <GoogleMeetLink meetId="" /> */}
      {/* <Slider slides={slides} /> */}
      {/* <FileUploader fileType="image/png, image/jpeg, image/jpg, image/gif" /> */}
      <CopyToClipboard inputText="Copy me!" buttonText="Copy" />
    </Container>
  );
};

export default Contact;
