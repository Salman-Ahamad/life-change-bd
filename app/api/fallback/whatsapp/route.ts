import { ApiResponse } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    console.log("API GET: ");

    return ApiResponse(200, "WhatsApp fallback works successfully 🧹");
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const request = await req.json();
    console.log("API Request: ", request);

    return ApiResponse(200, "Course Deleted successfully 🧹", request);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
