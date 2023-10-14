import { ICourse, ISlugParams } from "@/interface";
import { Course, User } from "@/models";
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
    // if(user.course){}

    user.courses.map((course: ICourse) => {
      if (course.id === id) {
        return ApiResponse(400, "ID already exists in the enrolled array");
      }
    });

    // Add the new item to the enrolled array
    const updatedEnrolled = [...user.courses, id];

    // Update user's enrolled array
    // Note: Consider using transactions for multiple database operations
    await User.updateOne({ _id: user.id }, { courses: updatedEnrolled });

    const result = await Course.findByIdAndUpdate(
      id,
      { $addToSet: { enrolled: user.id } },
      { new: true }
    );

    return ApiResponse(200, "Course Enrolled successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
