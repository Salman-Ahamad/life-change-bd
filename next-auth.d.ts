// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { IUser, IUserRole } from "./interface";

declare module "next-auth" {
  interface Session extends DefaultSession {
    role: IUserRole;
    user: IUser & DefaultUser;
  }

  interface User extends DefaultUser {
    role: IUserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: IUserRole;
    userData: any;
  }
}
