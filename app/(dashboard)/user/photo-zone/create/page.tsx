"use client";

import { FileUploader } from "@/components";
import { Button } from "@/universal";
import React, { useState } from "react";

const demoPost = {
  author: "6526949ced9258893e03cd3a",
  imageUrl:
    "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697084698/upload/ddtqtq92j01qzqomkn9g.png",
  text: "Hello bro, what are you doing...",
};

const Create: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  console.log("Url updated and pass to host; ", photoUrl);

  const handleCreatePost = async () => {
    console.log("handleCreatePost");
  };

  return (
    <div>
      {/* <FileUploader
        fileType="image/png, image/gif, image/jpeg"
        setFileUrl={setPhotoUrl}
      /> */}

      <Button variant="secondary" onClick={() => handleCreatePost()}>
        Create Post
      </Button>
    </div>
  );
};

export default Create;
