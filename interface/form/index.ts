export interface ISignUpFormValue {
  first_name: string;
  last_name: string;
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

export interface IForgotPasswordValue {
  newPassword: string;
  retypeNewPassword: string;
}
