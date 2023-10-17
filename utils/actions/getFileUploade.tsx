import axios from "axios";

export const getFileUploader = async (selectedFile: File) => {
  try {
    if (selectedFile) {
      const formData = new FormData();

      formData.set("file", selectedFile);
      formData.append("upload_preset", "ebm0hyxo");

      const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;

      const uploadRes = await axios.post(endpoint, formData);

      if (!endpoint) {
        throw new Error(`Failed to upload file: ${endpoint}`);
      }

      const { url } = await uploadRes.data;
      if (url) {
        return url;
      }
    } else {
      console.error("No file selected for upload.");
      return;
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return;
  } finally {
  }
};
