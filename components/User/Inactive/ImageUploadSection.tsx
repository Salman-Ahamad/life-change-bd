"use client";

import { Container, Title } from "@/universal";
import Image from "next/image";
import { FC, useState } from "react";
import { CreatePost } from "@/components";
import { uploadImg } from "@/lib";

export const ImageUploadSection: FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <Container className="py-16">
      <Title variant="H1">UPLOAD YOUR MOOD</Title>

      <div className="flex justify-center items-center gap-5 lg:gap-7 mt-14 flex-wrap">
        <div className="w-[220px] h-[260px]">
          <div
            onClick={() => setShowCreateModal(!showCreateModal)}
            className="cursor-pointer text-blue-500 hover:text-blue-600 rounded-xl"
          >
            <Image
              src={uploadImg}
              className="max-w-[220px] max-h-[260px]"
              alt=""
            />
          </div>
        </div>
        <CreatePost show={showCreateModal} setShow={setShowCreateModal} />
      </div>
    </Container>
  );
};
