"use client";

import { Form, Formik, FormikHelpers } from "formik";

import { Input } from "@/components";
import { forgotPasswordValidationSchema } from "@/lib/validation";
import { Button, CTA } from "@/universal";

export interface IForgotPasswordValue {
  newPassword: string;
  retypeNewPassword: string;
}

export const ForgotPasswordForm = () => {
  const initialValues: IForgotPasswordValue = {
    newPassword: "",
    retypeNewPassword: "",
  };

  const handleSubmit = (
    values: IForgotPasswordValue,
    {
      resetForm,
      setFieldError,
      setSubmitting,
    }: FormikHelpers<IForgotPasswordValue>
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
      validationSchema={forgotPasswordValidationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="w-full flex flex-col justify-center items-start max-w-[370px]">
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
