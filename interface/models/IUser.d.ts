export type IUserRole = "inactive" | "active" | "subAdmin" | "admin";

export type IUser = {
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
};
