"use client";

import { Button } from "@/universal";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "..";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});

interface EmailValue {
  phone: string;
  password: string;
}

export const FormGroup = () => {
  const initialValues: EmailValue = { phone: "", password: "" };

  const handleSubmit = (
    { phone, password }: EmailValue,
    { resetForm }: FormikHelpers<EmailValue>
  ) => {
    console.log(phone, password);
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Input
            isSubmitting={isSubmitting}
            name="phone"
            placeholder="Enter Your Phone"
            type="phone"
          />
          <Input
            isSubmitting={isSubmitting}
            name="password"
            placeholder="Enter Your Password"
            type="password"
          />
          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed w-full"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
