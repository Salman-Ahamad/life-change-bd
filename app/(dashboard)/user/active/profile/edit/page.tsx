"use client";

import { Header } from "@/components";
import { useCurrentUser } from "@/hooks";
import { IEditProfile } from "@/interface";
import { navData } from "@/lib/data";
import { Button, Container } from "@/universal";
import { Axios, loadingToast } from "@/utils";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Edit: NextPage = () => {
  const { user } = useSession().data || {};
  const [updatedData, setUpdatedData] = useState<IEditProfile>();
  const [disabled, setDisabled] = useState(true);
  const userData = useCurrentUser();

  useEffect(() => {
    updatedData && setDisabled(false);
  }, [updatedData]);

  const updateProfile = () => {
    const id = toast.loading("Profile Updating...");

    Axios.patch("/user", {
      role: user?.role,
      id: user?.id,
      ...updatedData,
    })
      .then(({ data }) => {
        if (data.data) {
          loadingToast(id, data.message, "success");
        }
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "error");
      });
  };

  return (
    <main>
      <Header navData={navData.profile} />

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
              defaultValue={userData?.firstName || user?.firstName}
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
              defaultValue={userData?.lastName || user?.lastName}
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
