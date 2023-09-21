"use client";

import { popular1, popular2, popular3, popular4 } from "@/lib/assets";
import { Container, Title } from "@/universal";
import Image from "next/image";
import { FC } from "react";

export const ImageUpload: FC = () => (
  <Container className="py-16">
    <Title variant="H1">UPLOAD YOUR MOOD</Title>

    <div className="flex justify-center items-center gap-5 lg:gap-10 mt-14">
      {[popular1, popular2, popular3, popular4].map((icon, i) => (
        <Image key={i} src={icon} className="rounded-xl" alt="" />
      ))}
    </div>
  </Container>
);
