import { Types } from "mongoose";
import { ICourse } from ".";

export type IUserRole =
  | "admin"
  | "subAdmin"
  | "controller"
  | "consultant"
  | "teacher"
  | "gl"
  | "active"
  | "inactive";

export interface ISettings {
  activeNotice: boolean;
  subAdmin: Types.ObjectId;
  consultant: Types.ObjectId;
  controller: Types.ObjectId;
  teacher: Types.ObjectId;
  gl: Types.ObjectId;
  collectInactive: boolean;
}
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
  image: string;

  role?: IUserRole;
  balance?: number;
  isVerified?: boolean;

  courses?: Types.ObjectId[] | ICourse[];
  posts?: string[];
  likes?: string[];
  settings?: ISettings;
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
  settings: {
    activeNotice: boolean;
    subAdmin: string;
    consultant: string;
    controller: string;
    teacher: string;
    gl: string;
    collectInactive: boolean;
  };
  createdAt: string;
}
