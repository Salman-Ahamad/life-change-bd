"use client";

import { IChildren } from "@/interface";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider: NextPage<IChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
