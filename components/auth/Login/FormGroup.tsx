"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { Button, CTA, Title } from "@/universal";
import { getRandomNumber } from "@/utils";
import { Input } from "@/components/common/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  randomNum: Yup.string().required("Math is required"),
});

interface ILoginFormValue {
  phone: string;
  password: string;
  randomNum: string;
}

export const LoginForm = () => {
  const route = useRouter();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const initialValues: ILoginFormValue = {
    phone: "",
    password: "",
    randomNum: "",
  };

  useEffect(() => {
    const randomNum = getRandomNumber(20, 50);
    const randomNum2 = getRandomNumber(1, 20);
    setNum1(randomNum);
    setNum2(randomNum2);
  }, []);

  const handleSubmit = async (
    { phone, password, randomNum }: ILoginFormValue,
    { resetForm, setFieldError, setSubmitting }: FormikHelpers<ILoginFormValue>
  ) => {
    if (Number(randomNum) !== num1 + num2) {
      setFieldError("randomNum", "Please give correct answer");
      setSubmitting(false);
    } else {
      const authRequest = await signIn("credentials", {
        phone,
        password,
        redirect: false,
      });

      if (authRequest?.error) {
        setFieldError(randomNum, authRequest.error);
      } else {
        route.push("/user/active");
      }

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
            Login
          </Title>

          <CTA className="mt-2.5">Phone Number with Country code</CTA>
          <Input name="phone" placeholder="Enter Your Phone" type="text" />
          <CTA className="mt-2.5">Password</CTA>
          <Input
            name="password"
            placeholder="Enter Your Password"
            type="password"
          />

          <CTA className="mt-2.5">
            {num1 || 0} + {num2 || 0} = ?
          </CTA>
          <Input name="randomNum" placeholder="" type="text" />

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed w-full mt-2.5"
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
