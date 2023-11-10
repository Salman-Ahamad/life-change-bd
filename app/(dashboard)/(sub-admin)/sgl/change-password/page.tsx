"use client";

import { Header } from "@/components";
import { updateData } from "@/hooks";
import { IChangePassword, INavItem } from "@/interface";
import { BackButton, Button, Container } from "@/universal";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { toast } from "react-toastify";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/sgl/profile",
  },
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/sgl",
  },
];

const ChangePassword: NextPage = () => {
  const [updatedData, setUpdatedData] = useState<IChangePassword>({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    updatedData && setDisabled(false);
  }, [updatedData]);

  const handleChangePassword = () => {
    if (updatedData?.newPassword !== updatedData?.reTypePassword) {
      toast.error("Password didn't match!");
    } else {
      updateData("/auth/change-password", updatedData);
    }
  };

  return (
    <main>
      <Header navData={navData} />

      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Change Password
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">Old Password:&nbsp;</span>
            <input
              type="password"
              name="oldPassword"
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    oldPassword: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div>
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">New Password:&nbsp;</span>
            <input
              type="password"
              name="newPassword"
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    newPassword: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div>
          <div className="text-lg py-1">
            <span className="font-semibold pl-2">Re-type Password:&nbsp;</span>
            <input
              type="password"
              name="reTypePassword"
              onChange={(e) =>
                setUpdatedData((prv) => {
                  return {
                    ...prv,
                    reTypePassword: e.target.value,
                  };
                })
              }
              className="outline-none pl-1.5 bg-gray-100 rounded-sm"
            />
          </div>

          <Button
            variant="secondary"
            className="capitalize mt-5 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            onClick={handleChangePassword}
            disabled={disabled}
          >
            Change Password
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default ChangePassword;
