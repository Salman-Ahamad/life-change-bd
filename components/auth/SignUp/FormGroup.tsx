"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { Input, RegisterBtn } from "@/components";
import { CTA } from "@/universal";
import { getRandomNumber } from "@/utils";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  language: Yup.string().required("Language is required"),
  country: Yup.string().required("Country is required"),
  whatsapp: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Whatsapp number must be 11 digits"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  gmail: Yup.string().email().required("Gmail is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  reference: Yup.string().required("Reference is required"),
});

interface EmailValue {
  first_name: string;
  last_name: string;
  language: string;
  country: string;
  whatsapp: string;
  phone: string;
  gmail: string;
  password: string;
  reference: string;
}

export const FormGroup = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const initialValues: EmailValue = {
    first_name: "",
    last_name: "",
    language: "",
    country: "",
    whatsapp: "",
    phone: "",
    gmail: "",
    password: "",
    reference: "",
  };

  useEffect(() => {
    const randomNum = getRandomNumber(20, 50);
    const randomNum2 = getRandomNumber(1, 20);
    setNum1(randomNum);
    setNum2(randomNum2);
  }, []);

  const handleSubmit = (
    values: EmailValue,
    { resetForm, setFieldError, setSubmitting }: FormikHelpers<EmailValue>
  ) => {
    console.log(values);
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
          <CTA className="mt-2.5">Phone Number with Country code</CTA>
          <Input
            isSubmitting={isSubmitting}
            name="phone"
            placeholder="Enter Your Phone"
            type="text"
          />
          <CTA className="mt-2.5">Password</CTA>
          <Input
            isSubmitting={isSubmitting}
            name="password"
            placeholder="Enter Your Password"
            type="password"
          />

          <CTA className="mt-2.5">
            {num1 || 0} + {num2 || 0} = ?
          </CTA>
          <Input
            isSubmitting={isSubmitting}
            name="randomNum"
            placeholder=""
            type="text"
          />

          <RegisterBtn disabled={!isValid || isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
