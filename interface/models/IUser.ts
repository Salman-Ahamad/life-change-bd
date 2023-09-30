export type IUserRole = "inactive" | "active" | "subAdmin" | "admin";

export type IUser = {
  first_name: string;
  last_name: string;
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
