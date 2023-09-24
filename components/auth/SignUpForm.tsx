"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input } from "@/components";
import { Languages, allCountry } from "@/lib/constant";
import { Button, CTA, CommonText } from "@/universal";
import Link from "next/link";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  language: Yup.string().required("Language is required"),
  country: Yup.string().required("Country is required"),
  whatsapp: Yup.string()
    .required("Whatsapp number is required")
    .matches(/^\d{11}$/, "Whatsapp number must be 11 digits"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
  gmail: Yup.string().email().required("Gmail is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
  reference: Yup.string(),
});

interface ISignUpFormValue {
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

export const SignUpForm = () => {
  const [agree, setAgree] = useState(false);
  const initialValues: ISignUpFormValue = {
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

  const handleSubmit = (
    values: ISignUpFormValue,
    { resetForm }: FormikHelpers<ISignUpFormValue>
  ) => {
    console.log(values);

    setAgree(false);
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
          <div className="flex flex-col justify-center items-center gap-0 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
              <div className="w-full">
                <CTA>
                  Enter First Name<span className="text-red-600">*</span>
                </CTA>
                <Input
                  type="text"
                  name="first_name"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="w-full">
                <CTA>
                  Enter Last Name<span className="text-red-600">*</span>
                </CTA>
                <Input
                  type="text"
                  name="last_name"
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
                  Enter Gmail Address<span className="text-red-600">*</span>
                </CTA>
                <Input
                  name="gmail"
                  placeholder="Enter Your Phone"
                  type="text"
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
