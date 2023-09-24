"use client";

import { IChildren } from "@/interface";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

const AuthProvider: NextPage<IChildren> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthProvider;
