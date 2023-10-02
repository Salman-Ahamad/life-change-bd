import { NextResponse } from "next/server";

export const ApiResponse = <T>(status: number, message: string, data?: T) =>
  NextResponse.json(
    {
      message,
      data,
    },
    {
      status,
    }
  );
