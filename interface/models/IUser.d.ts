import { Types } from "mongoose";
import { ICourse } from ".";

export type IUserRole =
  | "admin"
  | "controller"
  | "consultant"
  | "teacher"
  | "gl"
  | "active"
  | "inactive";

export interface ISettingsSchema {
  activeNotice: boolean;
  collectInactive: boolean;
  activeBonos: boolean;
  admin: Types.ObjectId;
  consultant: Types.ObjectId;
  controller: Types.ObjectId;
  teacher: Types.ObjectId;
  gl: Types.ObjectId;
  sendWish: boolean;
}

export interface ISettings {
  activeNotice: boolean;
  collectInactive: boolean;
  activeBonos: boolean;
  admin: IUSer;
  consultant: IUSer;
  controller: IUSer;
  teacher: IUSer;
  gl: IUSer;
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
  reference: {
    userId: string;
  };
}
