import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { AppConfig } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

connectDb();

export const POST = async (req: NextRequest) => {
  try {
    const courseData = await req.json();
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await AppConfig.create(courseData);

    return ApiResponse(200, "Config created successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const appConfig = await AppConfig.findOne({ for: UserRole.admin });

    return ApiResponse(200, "Config get successfully 👌", appConfig);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const updatedData = await req.json();

    console.log("Checking Marge from Server 11: ", updatedData);

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (user.role !== UserRole.admin) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }

    // TODO: Update config data in mongoDB
    // TODO: mainBalance should be added/increased by margeBalance,
    // TODO: totalPendingFee should be minus/decreased by margeBalance,

    const result = await AppConfig.updateOne(
      { for: UserRole.admin },
      updatedData,
      {
        new: true,
      }
    );

    console.log("Checking Marge from Server 22: ", { result });

    return ApiResponse(200, "Config update successfully 🛠️✅", result);
  } catch (error: any) {
    console.log("Error in Server: ", error);
    return ApiResponse(400, error.message);
  }
};
