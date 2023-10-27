import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AppConfig } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const appConfig = await AppConfig.findOne({ for: UserRole.admin })
      .select({
        "support.welcomeClass": 1,
      })
      .exec();

    return ApiResponse(200, "Config get successfully 👌", appConfig);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { meetLink } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      console.log("🚀 ~ file: route.ts:39 ~ PATCH ~ user:", {
        user: user!.role,
      });
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin && user.role !== UserRole.teacher) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await AppConfig.updateOne(
      { for: UserRole.admin },
      { "support.welcomeClass": meetLink },
      {
        new: true,
      }
    );

    return ApiResponse(200, "Config update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
