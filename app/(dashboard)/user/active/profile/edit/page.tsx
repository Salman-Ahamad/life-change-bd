"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header } from "@/components";
import { updateData, useCurrentUser } from "@/hooks";
import { avatarProfile, navData, uploadImg } from "@/lib";
import { Button, Container } from "@/universal";
import Image from "next/image";
import { getFileUploader } from "@/utils/actions/getFileUploade";

const Edit: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileThumb, setSelectedFileThumb] = useState<string | null>(
    null
  );
  const [disabled, setDisabled] = useState(true);
  const user = useCurrentUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedFileThumb(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please choose a valid file.");
    }
  };

  useEffect(() => {
    selectedFile && setDisabled(false);
  }, [selectedFile]);

  const updateProfile = async () => {
    if (selectedFile) {
      const uploadedFile = await getFileUploader(selectedFile);
      if (uploadedFile) {
        updateData("/user", { image: uploadedFile }).then(() =>
          window.location.reload()
        );
      }
    }
  };

  return (
    <main>
      <Header navData={navData.profileEdit} />

      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5">
          {user?.image && (
            <Image
              src={user.image || avatarProfile}
              width={160}
              height={160}
              alt={user.firstName || ""}
              className="w-40 h-40 rounded-full"
            />
          )}

          <div className="flex justify-between px-4 pt-6">
            <label htmlFor="filePicker">
              <div className="flex items-center gap-2 cursor-pointer">
                {selectedFileThumb ? (
                  <Image
                    src={selectedFileThumb}
                    width={50}
                    height={50}
                    className="w-20 h-20 rounded ml-2"
                    alt="file uploading"
                  />
                ) : (
                  <Image
                    src={uploadImg}
                    className="w-20 h-20"
                    alt="file uploading"
                  />
                )}
                <p className="text-gray-500 font-medium">Change Photo</p>
              </div>
              <input
                type="file"
                name="filePicker"
                id="filePicker"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </div>

          {/*
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">Last Name:&nbsp;</span>
            <input
              type="text"
              name="lastName"
              defaultValue={user && user.lastName}
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    lastName: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div> */}

          <Button
            variant="secondary"
            className="capitalize mt-5 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            onClick={updateProfile}
            disabled={disabled}
          >
            update profile
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Edit;
