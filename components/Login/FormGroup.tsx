"use client";

import { Button } from "@/universal";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "..";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface EmailValue {
  email: string;
}

export const FormGroup = () => {
  const initialValues: EmailValue = { email: "" };

  const handleSubmit = (
    { email }: EmailValue,
    { resetForm }: FormikHelpers<EmailValue>
  ) => {
    console.log(email);
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
            name="email"
            placeholder="Enter Your Email"
            type="email"
          />
          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed"
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
