import { connectDb } from "@/config";
import { ISlugParams } from "@/interface";
import { Assignment } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

connectDb();
export const GET = async (req: Request, { params }: ISlugParams) => {
  try {
    const courseId = params.slug;

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await Assignment.find({ courseId, userId: user.id });

    return ApiResponse(200, "Assignment Get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
