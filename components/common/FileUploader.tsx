"use client";

import { ImageUploaderProps } from "@/interface";
import { Button } from "@/universal";
import axios from "axios";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

export const FileUploader: FC<ImageUploaderProps> = ({
  fileType,
  setFileUrl,
  className,
  setUpdatedData,
}) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];

    if (file && fileType.includes(file.type)) {
      setSelectedFile(file);
    } else {
      // Handle invalid file type
      console.error("Invalid file type. Please choose a valid file.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      try {
        setUploading(true);

        const formData = new FormData();

        formData.set("file", selectedFile);
        formData.append("upload_preset", "ebm0hyxo");

        const endpoint = process.env
          .NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;

        const uploadRes = await axios.post(endpoint, formData);

        if (!endpoint) {
          throw new Error(`Failed to upload file: ${endpoint}`);
        }

        const { url } = await uploadRes.data;
        if (url) {
          setFileUrl(url);
          setUpdatedData && setUpdatedData((prev) => ({ ...prev, image: url }));
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        return;
      } finally {
        setUploading(false);
      }
    } else {
      console.error("No file selected for upload.");
      return;
    }
  };

  return (
    <div className={twMerge("flex flex-col max-w-lg p-8", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          name="file"
          className="w-full"
          onChange={handleFileChange}
        />
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          <Button
            variant="secondary"
            type="submit"
            className={
              selectedFile ? "bg-accent hover:bg-primary" : "bg-gray-500"
            }
          >
            Upload
          </Button>
        )}
      </form>
    </div>
  );
};
