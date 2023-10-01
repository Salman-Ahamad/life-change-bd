"use client";

import { Header } from "@/components";
import { IUser } from "@/interface";
import { navData } from "@/lib/data";
import { CommonText } from "@/universal";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { user } = useSession().data || {};

  const title = [
    "email",
    "country",
    "language",
    "phone",
    "whatsapp",
    "role",
    "reference",
  ];

  if (user)
    return (
      <main>
        <Header navData={navData.profile} />
        <h1 className="text-4xl font-semibold my-10 text-center">Profile</h1>

        <section className="grid grid-cols-2 justify-center items-center w-fit mx-auto">
          <div className="flex justify-start items-start flex-col">
            <CommonText
              className={`text-start font-semibold w-full px-1.5 py-1.5 capitalize bg-gray-200`}
            >
              Name
            </CommonText>
            {title.map((item, i) => (
              <CommonText
                key={i}
                className={`text-start font-semibold w-full px-1.5 py-1.5 capitalize ${
                  i % 2 !== 0 && "bg-gray-200"
                }`}
              >
                {item}
              </CommonText>
            ))}
          </div>
          <div className="flex justify-start items-start flex-col">
            <CommonText
              className={`text-start w-full px-2 py-1.5 capitalize bg-gray-200`}
            >
              {user.firstName} {user.lastName}
            </CommonText>
            {title.map((item, i) => (
              <CommonText
                key={i}
                className={`text-start w-full px-2 py-1.5 capitalize ${
                  i % 2 !== 0 && "bg-gray-200"
                }`}
              >
                {user[item as keyof IUser]}
              </CommonText>
            ))}
          </div>
        </section>
      </main>
    );
};

export default Profile;
