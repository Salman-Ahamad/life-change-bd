import { Date, Types } from "mongoose";
import { ICourse } from ".";

export type IUserRole =
  | "admin"
  | "controller"
  | "consultant"
  | "checker"
  | "teacher"
  | "trainer"
  | "sgl"
  | "gl"
  | "active"
  | "inactive";

export interface ISettingsSchema {
  activeNotice: boolean;
  inactiveBonus: boolean;
  activeBonus: boolean;
  withdrawalFee: boolean;
  sendWish: boolean;
  sendMessage: Date;
  admin: Types.ObjectId;
  consultant: string;
  controller: string;
  teacher: string;
  sgl: string;
  gl: string;
  trainer: string;
  course: string;
}

export interface ISettings extends ISettingsSchema {
  admin: IUSer;
}

export interface IUserSchema {
  userId: string;
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
  image?: string;
  balance?: number;
  isVerified?: boolean;

  courses?: Types.ObjectId[] | ICourse[];
  posts?: string[];
  likes?: string[];
  settings?: ISettingsSchema;
}

export interface IId {
  id: string;
}

export interface IUser extends IUserSchema, IId {
  role: IUserRole;
  balance: number;
  isVerified: boolean;
  courses: ICourse[];
  posts: string[];
  likes: string[];
  image: string;
  settings: ISettings;
  createdAt: string;
  reference:
    | {
        userId: string;
      }
    | string;
}
