import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  retypeNewPassword: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
});
