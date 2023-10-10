import { ISlugParams } from "@/interface";
import { Course } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const PATCH = async (req: NextRequest, { params }: ISlugParams) => {
  try {
    const { enrolled, id } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    // Check if the ID is already in the enrolled array
    if (user?.courses.some((item) => item.id === id)) {
      return ApiResponse(400, "ID already exists in the enrolled array");
    }

    // Add the new item to the enrolled array
    const updatedEnrolled = [...user?.courses, id];

    const result = await Course.updateOne(
      { _id: id },
      { enrolled: updatedEnrolled },
      {
        new: true,
      }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
