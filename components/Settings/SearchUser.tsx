"use client";

import { IUser } from "@/interface";
import { avatarProfile } from "@/lib";
import { Button, CommonText } from "@/universal";
import { Axios } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const SearchUser: React.FC<{ role: string }> = ({ role }) => {
  console.log(role);

  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<IUser>();

  const fetchUser = async () => {
    // First check if user can search this user id based on the role

    const fetchData = await Axios.get(
      `http://localhost:3000/api/user/${userId}`
    );

    if (fetchData.statusText === "OK") {
      setUser(fetchData.data.data);
    }
  };

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
    <section className="w-full max-w-3xl mx-auto px-4 mt-20">
      {/* Search User by Id Input box */}
      <div className="flex gap-5 items-center">
        <p>Search User by ID: </p>
        <input
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
        />
        <Button variant="secondary" onClick={() => fetchUser()}>
          Search
        </Button>
      </div>

      {/* Search Result */}
      <div>
        {user ? (
          <div>
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
          </div>
        ) : null}
      </div>
    </section>
  );
};
