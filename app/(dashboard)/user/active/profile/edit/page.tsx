"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header } from "@/components";
import { updateData, useCurrentUser } from "@/hooks";
import { IEditProfile } from "@/interface";
import { navData } from "@/lib";
import { Button, Container } from "@/universal";

const Edit: NextPage = () => {
  const [updatedData, setUpdatedData] = useState<IEditProfile>({});
  const [disabled, setDisabled] = useState(true);
  const user = useCurrentUser();

  useEffect(() => updatedData && setDisabled(false), [updatedData]);

  const updateProfile = () => updateData("/user", updatedData);

  return (
    <main>
      <Header navData={navData.profileEdit} />

      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">First Name:&nbsp;</span>
            <input
              type="text"
              name="firstName"
              defaultValue={user && user.firstName}
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    firstName: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div>
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">Last Name:&nbsp;</span>
            <input
              type="text"
              name="lastName"
              defaultValue={user && user.lastName}
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    lastName: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div>

          <Button
            variant="secondary"
            className="capitalize mt-5 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            onClick={updateProfile}
            disabled={disabled}
          >
            update profile
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Edit;
