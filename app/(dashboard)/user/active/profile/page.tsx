"use client";

import Image from "next/image";

import { Header } from "@/components";
import { useCurrentUser } from "@/hooks";
import { IUser } from "@/interface";
import { UserRole, avatarProfile, navData } from "@/lib";
import { Button, CommonText } from "@/universal";

const Profile = () => {
  const user = useCurrentUser();
  const profileTitle = [
    "email",
    "country",
    "language",
    "phone",
    "whatsapp",
    "role",
    "reference",
  ];

  const tableTitle = user?.reference
    ? profileTitle
    : profileTitle.filter((i) => i !== "reference");

  return (
    <main>
      <Header navData={navData.profile} />

      {user ? (
        <section>
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
                {user.id}
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

      {user?.role === UserRole.admin && (
        <section className="max-w-sm w-full mx-auto px-4 mt-20">
          <div className="flex gap-5">
            <input
              type="number"
              className="outline-none text-black text-base md:text-lg w-full border border-primary rounded-[5px] py-1 px-2"
            />
            <Button variant="secondary">Update</Button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;
