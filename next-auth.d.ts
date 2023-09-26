// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

type IUser = "inactive" | "active" | "subAdmin" | "admin";
declare module "next-auth" {
  interface Session extends DefaultSession {
    id: string;
    role: string;
  }

  interface User extends DefaultUser {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
