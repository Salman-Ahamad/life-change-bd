import { connectDb } from "@/config";
import { ApiResponse, generateStudentId } from "@/utils";

connectDb();

export const GET = async () => {
  try {
    const id = await generateStudentId();
    return ApiResponse(200, "User get successfully 👌", id);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
