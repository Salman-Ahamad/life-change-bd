import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  language: Yup.string().required("Language is required"),
  country: Yup.string().required("Country is required"),
  whatsapp: Yup.string()
    .required("Whatsapp number is required")
    .matches(/^\d{11,12}$/, "Phone number must be 11 or 12 digits"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11,12}$/, "Phone number must be 11 or 12 digits"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  reference: Yup.string(),
});
