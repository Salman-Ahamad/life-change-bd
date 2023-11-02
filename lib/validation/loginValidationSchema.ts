import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{12}$/, "Phone number must be 12 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
});
