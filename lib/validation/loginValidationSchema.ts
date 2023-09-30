import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  randomNum: Yup.string().required("Math is required"),
});
