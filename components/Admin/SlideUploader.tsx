"use client";

import Image from "next/image";
import { ChangeEvent, FC } from "react";

import { createData } from "@/hooks";
import { uploadImg } from "@/lib";
import { getFileUploader } from "@/utils/actions/getFileUploade";

export const SlideUploader: FC = () => {
  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const uploadedFile = await getFileUploader(selectedFile);
      if (uploadedFile) {
        createData("/config/slider", {
          imgUrl: uploadedFile,
        }).then(() => window.location.reload());
      }
    }
  };

  return (
    <section className="flex justify-between w-fit mx-auto">
      <label htmlFor="filePicker">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={uploadImg} className="w-20 h-20" alt="file uploading" />
          <p className="text-gray-500 font-medium">Upload Slide Image</p>
        </div>
        <input
          type="file"
          name="filePicker"
          id="filePicker"
          accept="image/*"
          onChange={uploadImage}
          hidden
        />
      </label>
    </section>
  );
};
