"use client";

import { popular1, popular2, popular3, popular4 } from "@/lib/assets";
import { Container, Title } from "@/universal";
import Image from "next/image";
import { FC, useState } from "react";
import { ImageUpload } from "./ImageUpload";

export const ImageUploadSection: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  console.log(selectedImage);

  return (
    <Container className="py-16">
      <Title variant="H1">UPLOAD YOUR MOOD</Title>

      <div className="flex justify-center items-center gap-5 lg:gap-7 mt-14 flex-wrap">
        {[popular1, popular2, popular3, popular4].map((icon, i) => (
          <Image
            key={i}
            src={icon}
            className="rounded-xl max-w-[220px] max-h-[260px]"
            alt=""
          />
        ))}

        <ImageUpload setSelectedImage={setSelectedImage} />
      </div>
    </Container>
  );
};
