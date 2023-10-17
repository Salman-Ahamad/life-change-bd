"use client";

import Image from "next/image";

import { Header } from "@/components";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig, IUser } from "@/interface";
import { UserRole, avatarProfile, navData } from "@/lib";
import { Button, CommonText } from "@/universal";
import { signOut } from "next-auth/react";
import { useState } from "react";

const Profile = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const user = useCurrentUser();
  useGetData("/config", setConfig, true);

  const profileTitle = [
    "email",
    "country",
    "language",
    "phone",
    "whatsapp",
    "role",
    "reference",
    "balance",
  ];

  const tableTitle = user?.reference
    ? profileTitle
    : profileTitle.filter((i) => i !== "reference");

  const handleActivation = () => {
    if (user && config) {
      const updatedData = {
        role: UserRole.active,
        balance: user.balance - config.baseFee,
      };
      updateData("/all-ref", updatedData).then(() => signOut());
    }
  };

  return (
    <main>
      <Header navData={navData.profile} />

      {user ? (
        <section className="flex flex-col justify-center items-center">
          <div className="w-fit mx-auto flex justify-center items-center my-10 gap-5">
            <Image
              src={avatarProfile}
              width={80}
              height={80}
              className="rounded-full shadow-lg w-[80px] h-[80px]"
              alt=""
            />
            <div className="flex flex-col justify-start items-center gap-2.5">
              <p
                className={`text-start w-full capitalize font-semibold text-xl lg:text-2xl`}
              >
                {user.firstName} {user?.lastName}
              </p>
              <CommonText className={`text-start w-full capitalize`}>
                {user.userId}
              </CommonText>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-center items-center w-fit mx-auto">
            <div className="flex justify-start items-start flex-col w-full">
              {tableTitle.map((item, i) => (
                <CommonText
                  key={i}
                  className={`text-start font-semibold w-full px-1.5 py-1.5 capitalize ${
                    i % 2 === 0 && "bg-gray-200"
                  }`}
                >
                  {item}
                </CommonText>
              ))}
            </div>
            <div className="flex justify-start items-start flex-col w-full">
              {tableTitle.map((item, i) => (
                <CommonText
                  key={i}
                  className={`text-start w-full px-2 py-1.5 capitalize ${
                    i % 2 === 0 && "bg-gray-200"
                  }`}
                >
                  {user[item as keyof IUser]}
                </CommonText>
              ))}
            </div>
          </div>
          {user && config && user.role === UserRole.inactive && (
            <div className="my-5">
              {user.balance <= config.baseFee ? (
                <CommonText>
                  {/* Please Deposit &#2547; {config.baseFee - user.balance} to
                  Activate❗ */}
                </CommonText>
              ) : (
                <Button
                  variant="secondary"
                  className="mx-auto"
                  onClick={handleActivation}
                >
                  Request to Activate
                </Button>
              )}
            </div>
          )}
        </section>
      ) : (
        <section className="max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-6 my-10">
            <div className="rounded-full bg-slate-400 w-[80px] h-[80px]" />
            <div className="flex-1 space-y-2.5 py-1 my-auto mt-2.5">
              <div className="h-5 bg-slate-500 rounded" />
              <div className="h-5 bg-slate-300 rounded" />
            </div>
          </div>
          <div className="animate-pulse">
            <div className="space-y-2.5 py-1">
              {Array.from(Array(8).keys()).map((el) => (
                <div
                  key={el}
                  className={`h-5 rounded ${
                    el % 2 === 0 ? "bg-slate-500" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;
