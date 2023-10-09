"use client";

import { Button } from "@/universal";
import React, { useState } from "react";

interface ImageUploaderProps {
  fileType: string;
}

export const FileUploader: React.FC<ImageUploaderProps> = ({ fileType }) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && fileType.includes(file.type)) {
      setSelectedFile(file);
    } else {
      // Handle invalid file type
      console.error("Invalid file type. Please choose a valid file.");
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploading(true);

        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch(`/api/uploader`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload file: ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log("File uploaded successfully:", responseData);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setUploading(false);
      }
    } else {
      console.error("No file selected for upload.");
    }
  };

  return (
    <div className="flex flex-col">
      <input type="file" accept={fileType} onChange={handleFileChange} />
      {/* <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button> */}
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <Button
          onClick={handleUpload}
          disabled={!selectedFile}
          variant="secondary"
        >
          Upload
        </Button>
      )}
    </div>
  );
};
