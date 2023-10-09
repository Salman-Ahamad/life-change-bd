import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME as string,
  api_key: process.env.CLOUDINARY_KEY as string,
  api_secret: process.env.CLOUDINARY_PRESET as string,
  secure: true,
});

interface SignatureData {
  timestamp: number;
  signature: string;
}

export async function getSignature(): Promise<SignatureData> {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "next" },
    cloudinaryConfig.api_secret
  );

  return { timestamp, signature };
}

interface SaveToDatabaseParams {
  public_id: string;
  version: string;
  signature: string;
}

export async function saveToDatabase({
  public_id,
  version,
  signature,
}: SaveToDatabaseParams): Promise<void> {
  // verify the data
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret
  );

  if (expectedSignature === signature) {
    // safe to write to the database
    console.log({ public_id });
  }
}
