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

  courses?: Types.ObjectId[] | ICourse[];
  posts?: string[];
  likes?: string[];
  settings?: {
    activeNotice: boolean;
  };
}

export interface IUser extends IUserSchema {
  id: string;
  role: IUserRole;
  balance: number;
  isVerified: boolean;

  courses: Types.ObjectId[] | ICourse[];
  posts: string[];
  likes: string[];
  settings: {
    activeNotice: boolean;
  };
}
