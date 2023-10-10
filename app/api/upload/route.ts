// import { getSignature } from "@/utils/actions/_cloudinaryActions";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.formData();
  data.append("upload_preset", "upload");

  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  //   // get a signature using server action
  //   const { timestamp, signature } = await getSignature();

  //   const cloudinaryApiKey = process.env.CLOUDINARY_KEY as string;
  //   data.append("upload_preset", "upload");
  //   data.append("api_key", process.env.CLOUDINARY_KEY as string);
  //   data.append("signature", signature);
  //   data.append("timestamp", timestamp);

  //   formData.append("api_key", process.env.CLOUDINARY_KEY as string);
  //         formData.append("signature", signature);
  //         formData.append("timestamp", timestamp);
  // https://api.cloudinary.com/v1_1/dgfm0vnli

  //   const bytes = await file.arrayBuffer();
  //   const buffer = Buffer.from(bytes);

  //   const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;

  //   const fetchToCloud = await fetch(endpoint, {
  //     method: "POST",
  //     body: data,
  //     headers: {
  //       Authorization: `Bearer ${cloudinaryApiKey}`,
  //     },
  //   });

  const uploadRes = await axios.post(
    "https://api.cloudinary.com/v1_1/dgfm0vnli/image/upload",
    data
  );

  const { url } = uploadRes.data;

  //   const response = await fetchToCloud.json();
  //   const fetchToCloud = await axios.post(endpoint, data,);

  //   fetch(endpoint, {
  //     method: "POST",
  //     body: buffer,
  //   }).then((res) => res.json());

  console.log("Uploading: ", url);

  return NextResponse.json({ success: true, data: url });
};
