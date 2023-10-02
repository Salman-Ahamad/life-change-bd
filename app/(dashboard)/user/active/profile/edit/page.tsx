"use client";

import { Header } from "@/components";
import { IEditProfile } from "@/interface";
import { navData } from "@/lib/data";
import { Button, Container } from "@/universal";
import { Axios } from "@/utils";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const Edit: NextPage = () => {
  const { user } = useSession().data || {};
  const [updatedData, setUpdatedData] = useState<IEditProfile>();
  const [loading, setLoading] = useState(false);

  const updateProfile = () => {
    setLoading(true);
    Axios.patch("/user", {
      role: user?.role,
      id: user?.id,
      ...updatedData,
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setLoading(false);
          toast.success("Profile updated successfully");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error("Profile updated failed");
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
              defaultValue={user?.firstName}
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
              defaultValue={user?.lastName}
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
            className="capitalize mt-5"
            onClick={updateProfile}
          >
            update profile
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Edit;
