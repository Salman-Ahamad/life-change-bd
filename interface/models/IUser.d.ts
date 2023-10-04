export type IUserRole = "inactive" | "active" | "subAdmin" | "admin";

export type IUser = {
  id?: string;
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

  verifyToken?: string;
  verifyTokenExpiry?: Date;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  myReferences?: string[];
  courses?: string[];
  points?: number;
  posts?: string[];
  likes?: string[];
};
