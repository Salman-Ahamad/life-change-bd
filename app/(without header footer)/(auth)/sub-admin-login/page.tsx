"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

import { Input } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import { loginValidationSchema } from "@/lib";
import { Button, CTA, Title } from "@/universal";
import { ISubAdminLoginFormValue } from "@/interface";
import { getRandomNumber, loadingToast } from "@/utils";
import { toast } from "react-toastify";

const AdminLogin: FC = () => {
  const [adminRole, setAdminRole] = useState<string>("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const { data: session } = useSession();
  const initialValues: ISubAdminLoginFormValue = {
    role: "",
    phone: "",
    password: "",
    randomNum: "",
  };

  useEffect(() => {
    const randomNum = getRandomNumber(20, 50);
    const randomNum2 = getRandomNumber(1, 15);
    setNum1(randomNum);
    setNum2(randomNum2);
  }, []);

  const handleSubmit = (
    { role, phone, password, randomNum }: ISubAdminLoginFormValue,
    {
      resetForm,
      setFieldError,
      setSubmitting,
    }: FormikHelpers<ISubAdminLoginFormValue>
  ) => {
    const id = toast.loading("Loading... 🔃");
    setAdminRole(role.toLowerCase());

    if (Number(randomNum) !== num1 + num2) {
      setFieldError("randomNum", "Please give correct answer");
      setSubmitting(false);
    } else {
      signIn("credentials", {
        phone,
        password,
        redirect: false,
      })
        .then((res) => {
          // if (!res?.error) {
          //   if (session?.role === role.toLowerCase()) {
          //     redirect("/user/active");
          //   } else {
          //     signOut();
          //   }
          //   loadingToast(id, "Login Successfully ✅", "success");
          // } else {
          //   const error = JSON.parse(res.error);
          //   loadingToast(id, error.message, "warning");
          // }
        })
        .catch((error) => loadingToast(id, error.message, "error"));
      resetForm();
    }
  };

  useEffect(() => {
    if (session?.user) {
      if (session.user.role !== adminRole) {
        console.log("Your role is no ", adminRole);

        // signOut();
        // redirect("/user/active")
      } else {
        console.log("Your role is ", adminRole);

        redirect("/user/active");
      }
    }
  }, [session, adminRole]);

  return (
    <main className="h-screen flex justify-between items-center">
      <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Title variant="H3" className="mb-10 normal-case">
                Sub Admin Login
              </Title>

              <div className="w-full">
                <CTA>
                  Choose Sub-admin Type<span className="text-red-600">*</span>
                </CTA>
                <Input
                  name="role"
                  select={[
                    "Controller",
                    "Consultant",
                    "Group Leader",
                    "Teacher",
                  ]}
                />
              </div>

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
      </section>
    </main>
  );
};

export default AdminLogin;
