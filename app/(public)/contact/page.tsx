"use client";

import { CopyToClipboard } from "@/components";
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
      {/* <CopyToClipboard inputText="Copy me!" buttonText="Copy" /> */}
    </Container>
  );
};

export default Contact;
