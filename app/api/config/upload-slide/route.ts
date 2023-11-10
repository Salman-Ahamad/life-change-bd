import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AppConfig } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const PATCH = async (req: NextRequest) => {
  try {
    const { url, slideNo } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    const result = await AppConfig.updateOne(
      { for: UserRole.admin },
      {
        $set: {
          [`sliderImage.${slideNo}`]: url,
        },
      },
      {
        new: true,
      }
    );

    // const result = await AppConfig.updateOne(
    //   { for: UserRole.admin },
    //   { sliderImage: slides },
    //   {
    //     new: true,
    //   }
    // );

    // return ApiResponse(200, imageUrl);
    return ApiResponse(200, "Config update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
