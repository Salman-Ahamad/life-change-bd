"use client";

import { Button, CommonText, Title } from "@/universal";
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
        <Form className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
          <Title variant="H3">Login</Title>

          <CommonText className="mt-2.5">
            Phone Number with Country code
          </CommonText>
          <Input
            isSubmitting={isSubmitting}
            name="phone"
            placeholder="Enter Your Phone"
            type="phone"
          />
          <CommonText className="mt-2.5">Password</CommonText>
          <Input
            isSubmitting={isSubmitting}
            name="password"
            placeholder="Enter Your Password"
            type="password"
          />

          <CommonText className="mt-2.5">10 + 20 = ?</CommonText>
          <input className="text-black text-base md:text-lg w-full border border-primary focus:border-primary focus:outline-none rounded-[5px] py-2.5 px-3" />

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed w-full mt-5"
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
