import { UserRole } from "@/lib";
import { User } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest } from "next/server";

export const GET = async ({ nextUrl }: NextRequest) => {
  try {
    const id = nextUrl.searchParams.get("id");
    const date = nextUrl.searchParams.get("date");
    const singleDate = nextUrl.searchParams.get("singleDate");
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    let singleDateValue: boolean =
      singleDate && JSON.parse(singleDate.toLowerCase());

    const formattingDate = new Date(Number(date));

    // Set the start and end of the day
    const startOfDay = new Date(Number(date));
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(Number(date));
    endOfDay.setHours(23, 59, 59, 999);

    let option = {};

    const result = await User.find({ role: UserRole.active });

    return ApiResponse(200, "Active User get successfully 👌", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
