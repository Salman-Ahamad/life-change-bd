"use client";

import { IChildren } from "@/interface";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }: IChildren) => (
  <SessionProvider>{children}</SessionProvider>
);
