"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { CTA } from "@/universal";
import { getRandomNumber } from "@/utils";
import { Input, RegisterBtn } from "..";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  randomNum: Yup.string().required("Math is required"),
});

interface EmailValue {
  phone: string;
  password: string;
  randomNum: string;
}

export const FormGroup = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const initialValues: EmailValue = { phone: "", password: "", randomNum: "" };

  useEffect(() => {
    const randomNum = getRandomNumber(20, 50);
    const randomNum2 = getRandomNumber(1, 20);
    setNum1(randomNum);
    setNum2(randomNum2);
  }, []);

  const handleSubmit = (
    { phone, password, randomNum }: EmailValue,
    { resetForm, setFieldError, setSubmitting }: FormikHelpers<EmailValue>
  ) => {
    if (Number(randomNum) !== num1 + num2) {
      setFieldError("randomNum", "Please give correct answer");
      setSubmitting(false);
    } else {
      console.log({ phone, password });

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
