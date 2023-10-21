"use client";

import React from "react";
import { updateData } from "@/hooks";
import { uploadImg } from "@/lib";
import Image from "next/image";
import { getFileUploader } from "@/utils/actions/getFileUploade";

const SlideUploader: React.FC<{
  slideName: string;
  slides: string[];
  slideNo: number;
  uploadImFn: (
    event: React.ChangeEvent<HTMLInputElement>,
    slideNoFn: number
  ) => Promise<void>;
}> = ({ slideName, slides, slideNo, uploadImFn }) => {
  //   const [slides, setSlides] = useState<string[]>([]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <div className="flex justify-between px-4 pt-6">
          <label htmlFor="filePicker">
            <div className="flex items-center gap-2 cursor-pointer">
              {slides[slideNo] ? (
                <Image
                  src={slides[slideNo]}
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
              onChange={(e) => {
                uploadImFn(e, slideNo);
              }}
              hidden
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SlideUploader;
