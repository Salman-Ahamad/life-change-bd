export interface ISignUpFormValue {
  firstName: string;
  lastName: string;
  language: string;
  country: string;
  whatsapp: string;
  phone: string;
  email: string;
  password: string;
  reference: string;
}

export interface ILoginFormValue {
  phone: string;
  password: string;
  randomNum: string;
}

export interface ISubAdminLoginFormValue extends ILoginFormValue {
  role: string;
}

export interface IChangePasswordValue {
  newPassword: string;
  retypeNewPassword: string;
}
