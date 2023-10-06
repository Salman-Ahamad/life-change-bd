"use client";

import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components";
import { ISignUpFormValue } from "@/interface";
import { Languages, allCountry, signUpValidationSchema } from "@/lib";
import { Button, CTA, CommonText } from "@/universal";
import { Axios, loadingToast } from "@/utils";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const SignUpForm = () => {
  const [agree, setAgree] = useState(false);
  const initialValues: ISignUpFormValue = {
    firstName: "",
    lastName: "",
    language: "",
    country: "",
    whatsapp: "",
    phone: "",
    email: "",
    password: "",
    reference: "",
  };

  const handleSubmit = (
    values: ISignUpFormValue,
    { resetForm }: FormikHelpers<ISignUpFormValue>
  ) => {
    const id = toast.loading("Loading... 🔃");
    values.reference.length === 0 && (values.reference = "-");

    Axios.post("/auth/signup", values)
      .then(({ data }) => {
        loadingToast(id, data.message, "success");
        signIn("credentials", {
          phone: values.phone,
          password: values.password,
          callbackUrl: `/inactive`,
        })
          .then((res) => {
            console.log("🚀 ~ file: SignUpForm.tsx:45 ~ .then ~ res:", res);
            if (!res?.error) {
              loadingToast(id, "Login Successfully ✅", "success");
            } else {
              const error = JSON.parse(res.error);
              loadingToast(id, error, "success");
            }
          })
          .catch((error: any) => {
            console.log("🚀 ~ file: SignUpForm.tsx:54 ~ .then ~ error:", error);
            return loadingToast(id, error.response.data.error, "error");
          });
      })
      .catch((err) => {
        console.log("🚀 ~ file: SignUpForm.tsx:58 ~ SignUpForm ~ err:", err);
        return loadingToast(id, err.response.data.error, "error");
      });
    setAgree(false);
    resetForm();
  };

  return (
    <Formik
      validationSchema={signUpValidationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <div className="flex flex-col justify-center items-center gap-0 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
              <div className="w-full">
                <CTA>
                  Enter First Name<span className="text-red-600">*</span>
                </CTA>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="w-full">
                <CTA>
                  Enter Last Name<span className="text-red-600">*</span>
                </CTA>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
              <div className="w-full">
                <CTA>
                  Choose Your Language<span className="text-red-600">*</span>
                </CTA>
                <Input name="language" select={Languages} />
              </div>
              <div className="w-full">
                <CTA>
                  Choose Your Country<span className="text-red-600">*</span>
                </CTA>
                <Input name="country" select={allCountry} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
              <div className="w-full">
                <CTA>
                  Enter Whatsapp No<span className="text-red-600">*</span>
                </CTA>
                <Input
                  type="text"
                  name="whatsapp"
                  placeholder="Enter Your Whatsapp No"
                />
              </div>
              <div className="w-full">
                <CTA>
                  Enter Phone No<span className="text-red-600">*</span>
                </CTA>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Enter Your Phone No"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
              <div className="w-full">
                <CTA>
                  Enter Email Address<span className="text-red-600">*</span>
                </CTA>
                <Input
                  name="email"
                  placeholder="Enter Your Phone"
                  type="email"
                />
              </div>
              <div className="w-full">
                <CTA>Enter Reference No.</CTA>
                <Input
                  type="text"
                  name="reference"
                  placeholder="Enter Your Reference No"
                />
              </div>
            </div>
            <div className="w-full">
              <CTA>Set New Password</CTA>
              <Input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full lg:w-full lg:max-w-full"
                fullWidth="w-full lg:w-full lg:max-w-full"
              />
            </div>
          </div>

          <div className="lg:px-2.5 flex justify-center items-start gap-1.5 lg:gap-2.5 pb-2 lg:mb-2.5">
            <input
              onClick={() => setAgree((prv) => !prv)}
              type="checkbox"
              className="accent-primary mt-1"
            />
            <CommonText className="pr-5">
              By clicking Register, you agree to My Business Union Learning
              Platform&rsquo;s&nbsp;
              <Link
                href="/terms-conditions"
                className="text-blue-700 hover:text-warning transition-all delay-75"
              >
                terms & conditions
              </Link>
              ,&nbsp;
              <Link
                href="/privacy-policy"
                className="text-blue-700 hover:text-warning transition-all delay-75"
              >
                Privacy Policy
              </Link>
              &nbsp;and
              <Link
                href="/terms-conditions"
                className="text-blue-700 hover:text-warning transition-all delay-75"
              >
                &nbsp;Cookie Policy
              </Link>
            </CommonText>
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={!isValid || isSubmitting || !agree}
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed w-full"
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};
