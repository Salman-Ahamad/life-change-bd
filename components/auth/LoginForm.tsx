"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { ILoginFormValue } from "@/interface";
import { UserRole } from "@/lib";
import { loginValidationSchema } from "@/lib/validation";
import { Button, CTA, Title } from "@/universal";
import { getRandomNumber } from "@/utils";
import { redirect } from "next/navigation";
import { Input } from "..";

export const LoginForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const initialValues: ILoginFormValue = {
    phone: "",
    password: "",
    randomNum: "",
  };

  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (session?.user?.email) {
      if (session?.role === UserRole.inactive) redirect("/inactive");
      if (session?.role !== UserRole.inactive) redirect("/user/active");
    }
  }, [session]);

  useEffect(() => {
    const randomNum = getRandomNumber(20, 50);
    const randomNum2 = getRandomNumber(1, 15);
    setNum1(randomNum);
    setNum2(randomNum2);
  }, []);

  const handleSubmit = (
    { phone, password, randomNum }: ILoginFormValue,
    { resetForm, setFieldError, setSubmitting }: FormikHelpers<ILoginFormValue>
  ) => {
    if (Number(randomNum) !== num1 + num2) {
      setFieldError("randomNum", "Please give correct answer");
      setSubmitting(false);
    } else {
      const signin = signIn("credentials", {
        phone,
        password,
      });

      console.log(signin);

      resetForm();
    }
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Title variant="H3" className="mb-10 normal-case">
            Welcome back
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
