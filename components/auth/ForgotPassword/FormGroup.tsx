"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "@/components";
import { Button, CTA, Title } from "@/universal";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  retypeNewPassword: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
});

interface ILoginFormValue {
  newPassword: string;
  retypeNewPassword: string;
}

export const ForgotPasswordForm = () => {
  const initialValues: ILoginFormValue = {
    newPassword: "",
    retypeNewPassword: "",
  };

  const handleSubmit = (
    values: ILoginFormValue,
    { resetForm, setFieldError, setSubmitting }: FormikHelpers<ILoginFormValue>
  ) => {
    if (values.newPassword !== values.retypeNewPassword) {
      setFieldError("retypeNewPassword", "Password didn't match!");
      setSubmitting(false);
    } else {
      console.log(values);
      resetForm();
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Title variant="H3" className="mb-10 normal-case">
            Forgot Password
          </Title>

          <CTA className="mt-2.5">New Password</CTA>
          <Input
            name="newPassword"
            placeholder="New Password"
            type="password"
          />

          <CTA className="mt-2.5">Re-type New Password</CTA>
          <Input
            name="retypeNewPassword"
            placeholder="Re-type New Password"
            type="password"
          />

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed w-full mt-2.5"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
