import { AppConfig } from "@/models";
import { ApiResponse } from "@/utils";

export const GET = async () => {
  const appConfig = await AppConfig.findOne({}).select({ baseFee: 1 });

  return ApiResponse(200, "Add Active Bonus successfully ✅", appConfig);
};
