import { NextResponse } from "next/server";

export const APIResponse = <T>(message: string, data?: T) =>
  NextResponse.json({
    message,
    success: data ? true : false,
    data: data || null,
  });
