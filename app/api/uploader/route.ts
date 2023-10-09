import { ApiResponse } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const file = req.body.get("file") as File;

    if (!file) {
      return ApiResponse(400, "No file provided for upload.");
    }

    const cloudinaryCloudName = process.env.CLOUDINARY_NAME as string;
    const cloudinaryUploadPreset = process.env.CLOUDINARY_PRESET as string;
    const cloudinaryApiKey = process.env.CLOUDINARY_KEY as string;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${cloudinaryApiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    const responseData = await response.json();

    return ApiResponse(
      200,
      "File uploaded successfully 🛠️✅",
      responseData.secure_url
    );
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
