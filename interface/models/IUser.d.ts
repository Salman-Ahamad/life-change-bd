import { Types } from "mongoose";
import { ICourse } from ".";

export type IUserRole = "inactive" | "active" | "subAdmin" | "admin";

export interface IUserSchema {
  firstName: string;
  lastName: string;
  language: string;
  country: string;
  whatsapp: string;
  phone: string;
  email: string;
  password: string;
  reference: string;

  role?: IUserRole;
  balance?: number;
  isVerified?: boolean;

  myReferences?: string[];
  courses?: Types.ObjectId[] | ICourse[];

  posts?: string[];
  likes?: string[];
}

export interface IUser extends IUserSchema {
  id: string;
  role: IUserRole;
}
