import { ISlugParams } from "@/interface";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const { enrolled, id } = await req.json();
    console.log("course enrolled!");

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const result = await Course.updateOne(
      { _id: id },
      { enrolled },
      {
        new: true,
      }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
