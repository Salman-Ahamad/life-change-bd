import { v2 as cloudinary } from "cloudinary";

export default async function handler(req: any, res: any) {
  const body = JSON.parse(req.body) || {};
  const { paramsToSign } = body;

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_PRESET as string
    );
    res.status(200).json({
      signature,
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

// import { ApiResponse } from "@/utils";
// import { NextRequest, NextResponse } from "next/server";
// import { v2 as cloudinary } from "cloudinary";

// export const POST = async (req: NextRequest, res: NextResponse) => {
//   try {
//     // const file = req.body.get("file") as File;

//     // if (!file) {
//     //   return ApiResponse(400, "No file provided for upload.");
//     // }

//     const body = (await JSON.parse(req.body)) || {};
//     const { paramsToSign } = body;

//     const cloudinaryCloudName = process.env.CLOUDINARY_NAME as string;
//     const cloudinaryApiSecret = process.env.CLOUDINARY_PRESET as string;
//     const cloudinaryApiKey = process.env.CLOUDINARY_KEY as string;

//     const signature = cloudinary.utils.api_sign_request(
//       paramsToSign,
//       cloudinaryApiSecret
//     );

//     // const formData = new FormData();
//     // formData.append("file", file);
//     // formData.append("upload_preset", cloudinaryUploadPreset);

//     // const response = await fetch(
//     //   `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
//     //   {
//     //     method: "POST",
//     //     body: formData,
//     //     headers: {
//     //       Authorization: `Bearer ${cloudinaryApiKey}`,
//     //     },
//     //   }
//     // );

//     // if (!response.ok) {
//     //   throw new Error(`Failed to upload file: ${response.statusText}`);
//     // }

//     // const responseData = await response.json();

//     return ApiResponse(200, "File uploaded successfully 🛠️✅", signature);
//   } catch (error: any) {
//     return ApiResponse(400, error.message);
//   }
// };
