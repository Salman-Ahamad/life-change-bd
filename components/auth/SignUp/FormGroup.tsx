"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Input, RegisterBtn } from "@/components";
import { CTA } from "@/universal";

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
    .min(6, "Password must be at least 6 characters long"),
  reference: Yup.string().required("Reference id is required"),
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

export const FormGroup = () => {
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
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="flex flex-col justify-center items-center gap-0">
          <div className="flex justify-center items-center gap-2">
            <div>
              <CTA>Enter First Name</CTA>
              <Input
                type="text"
                name="first_name"
                isSubmitting={isSubmitting}
                placeholder="Enter Your First Name"
              />
            </div>
            <div>
              <CTA>Enter Last Name</CTA>
              <Input
                type="text"
                name="last_name"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Last Name"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <CTA>Choose Your Language</CTA>
              <Input
                type="text"
                name="language"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Language"
              />
            </div>
            <div>
              <CTA>Choose Your Country</CTA>
              <Input
                type="text"
                name="country"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Country"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <CTA>Enter Whatsapp No</CTA>
              <Input
                type="text"
                name="whatsapp"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Whatsapp No"
              />
            </div>
            <div>
              <CTA>Enter Phone No</CTA>
              <Input
                name="phone"
                type="text"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Phone No"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <CTA>Enter Gmail Address</CTA>
              <Input
                isSubmitting={isSubmitting}
                name="gmail"
                placeholder="Enter Your Phone"
                type="text"
              />
            </div>
            <div>
              <CTA>Enter Reference No.</CTA>
              <Input
                type="text"
                name="reference"
                isSubmitting={isSubmitting}
                placeholder="Enter Your Reference No"
              />
            </div>
          </div>
          <div>
            <CTA>Set New Password</CTA>
            <Input
              type="password"
              name="password"
              isSubmitting={isSubmitting}
              placeholder="Enter Your Password"
              className="w-full max-w-full"
            />
          </div>

          <RegisterBtn disabled={!isValid || isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
