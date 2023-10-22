"use client";

import React from "react";
import { updateData } from "@/hooks";
import { uploadImg } from "@/lib";
import Image from "next/image";
import { getFileUploader } from "@/utils/actions/getFileUploade";

const SlideUploader: React.FC<{
  slideName: string;
  slideImage: string;
  setSlideImage: (slideImage: string) => void;
}> = ({ slideName, slideImage, setSlideImage }) => {
  //   const [slides, setSlides] = useState<string[]>([]);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const uploadedFile = await getFileUploader(selectedFile);
      if (uploadedFile) {
        setSlideImage(uploadedFile);

        // updateData("/config/upload-slide", {
        //   url: uploadedFile,
        //   index: slideNoFn,
        // });
        // // .then(() => window.location.reload());
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <div className="flex justify-between px-4 pt-6">
          <label htmlFor="filePicker">
            <div className="flex items-center gap-2 cursor-pointer">
              {slideImage ? (
                <Image
                  src={slideImage}
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
              <p className="text-gray-500 font-medium">Upload {slideName}</p>
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
        </div>
      </div>
    </div>
  );
};

export default SlideUploader;
