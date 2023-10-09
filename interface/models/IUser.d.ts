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
  isVerified?: boolean;

  myReferences?: string[];
  courses?: Types.ObjectId[] | ICourse[];

  points?: number;
  posts?: string[];
  likes?: string[];
}

export interface IUser extends IUserSchema {
  id: string;
  role: IUserRole;
}
