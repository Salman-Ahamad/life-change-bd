"use client";

import { Header } from "@/components";
import { useCurrentUser } from "@/hooks";
import { IUser } from "@/interface";
import { avatarProfile } from "@/lib/assets";
import { navData } from "@/lib/data";
import { CommonText } from "@/universal";
import Image from "next/image";

const Profile = () => {
  const user = useCurrentUser();

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
              {user.firstName} {user.lastName}
            </p>
            <CommonText className={`text-start w-full capitalize`}>
              {user.id}
            </CommonText>
          </div>
        </div>

        <section className="grid grid-cols-2 justify-center items-center w-fit mx-auto">
          <div className="flex justify-start items-start flex-col w-full">
            {title.map((item, i) => (
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
            {title.map((item, i) => (
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
        </section>
      </main>
    );
};

export default Profile;
