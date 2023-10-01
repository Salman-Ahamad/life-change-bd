import { NextResponse } from "next/server";

export const APIResponse = <T>(status: number, message: string, data?: T) =>
  NextResponse.json({
    success: data ? true : false,
    status,
    message,
    data: data || null,
  });
