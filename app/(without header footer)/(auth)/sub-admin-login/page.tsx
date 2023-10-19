"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

import { Input } from "@/components";
import { ISubAdminLoginFormValue } from "@/interface";
import { loginValidationSchema } from "@/lib";
import { Button, CTA, Title } from "@/universal";
import { loadingToast } from "@/utils";
import { Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";

const AdminLogin: FC = () => {
  const [adminRole, setAdminRole] = useState<string>("");
  const { data: session } = useSession();

  const initialValues: ISubAdminLoginFormValue = {
    role: "",
    phone: "",
    password: "",
  };

  const handleSubmit = (
    { role, phone, password }: ISubAdminLoginFormValue,
    { resetForm }: FormikHelpers<ISubAdminLoginFormValue>
  ) => {
    const id = toast.loading("Loading... 🔃");
    setAdminRole(role.toLowerCase());
    signIn("credentials", {
      phone,
      password,
      redirect: false,
    })
      .then((res) => {
        loadingToast(id, "Login Successfully ✅", "success");
      })
      .catch((error) => loadingToast(id, error.message, "error"));
    resetForm();
  };

  useEffect(() => {
    if (session?.user) {
      if (session.user.role !== adminRole) {
        console.log("Your role is no ", adminRole);
      } else {
        redirect("/active");
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
                    "Trainer",
                    "Group Leader",
                    "Senior Group Leader",
                    "Teacher",
                    "Checker",
                    "Senior Accountant",
                    "Accountant",
                    "Senior Controller",
                    "Controller",
                    "Telecaller",
                    "Consultant",
                    "Lead Checker",
                    "Audit",
                    "Support",
                    "Teacher",
                    "LC BD Itd Solution",
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
