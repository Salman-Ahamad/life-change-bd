"use client";

import { Form, Formik, FormikHelpers } from "formik";

import { Input } from "@/components";
import { forgotPasswordValidationSchema } from "@/lib/validation";
import { Button, CTA } from "@/universal";
import { IChangePasswordValue } from "@/interface";
import { updateData } from "@/hooks";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export const ForgotPasswordForm = () => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const initialValues: IChangePasswordValue = {
    newPassword: "",
    retypeNewPassword: "",
  };

  const handleSubmit = (
    values: IChangePasswordValue,
    {
      resetForm,
      setFieldError,
      setSubmitting,
    }: FormikHelpers<IChangePasswordValue>
  ) => {
    if (values.newPassword !== values.retypeNewPassword) {
      setFieldError("retypeNewPassword", "Password didn't match!");
      setSubmitting(false);
    } else {
      updateData("/auth/forgot-password", {
        newPassword: values.newPassword,
      }).then(() => {
        setIsChanged(true);
      });

      resetForm();
    }
  };

  useEffect(() => {
    if (isChanged) {
      signOut();
    }
  }, [isChanged]);

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
