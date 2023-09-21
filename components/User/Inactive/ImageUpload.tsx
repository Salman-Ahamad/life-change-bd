"use client";

import { IUploadImage } from "@/interface";
import { uploadImg } from "@/lib/assets";
import Image from "next/image";
import { ChangeEvent, FC } from "react";

export const ImageUpload: FC<IUploadImage> = ({ setSelectedImage }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[220px] h-[260px]">
      <label
        htmlFor="imageInput"
        className="cursor-pointer text-blue-500 hover:text-blue-600 rounded-xl"
      >
        <Image src={uploadImg} className="max-w-[220px] max-h-[260px]" alt="" />
      </label>

      <input
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};
