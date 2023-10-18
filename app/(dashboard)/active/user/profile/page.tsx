"use client";

import Image from "next/image";

import { Header, ShareReferLink } from "@/components";
import { useCurrentUser } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { UserRole, avatarProfile } from "@/lib";
import { BackButton, CommonText } from "@/universal";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
  {
    label: "Edit Profile",
    link: "/active/user/profile/edit",
  },
  {
    label: "Change Password",
    link: "/active/change-password",
  },
  {
    label: "Passbook",
    link: "/active/passbook",
  },
  {
    label: "Withdrawal",
    link: "/active/user/withdrawal",
  },
];

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
    "balance",
  ];

  const tableTitle = user?.reference
    ? profileTitle
    : profileTitle.filter((i) => i !== "reference");

  return (
    <main>
      <Header navData={navData} />

      {user ? (
        <section>
          <div className="w-fit mx-auto flex justify-center items-center my-10 gap-5">
            <Image
              src={user.image || avatarProfile}
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
              <CommonText className={`text-start w-full`}>
                {/* Change: Ami change kore dichi. active chara onnora kono ID e dekhbe na */}
                {user.role === UserRole.active ? user.userId : user.id}
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
              <CommonText className="text-start font-semibold w-full px-1.5 py-1.5 capitalize bg-gray-200">
                Referral Link:{" "}
              </CommonText>
            </div>
            <div className="flex justify-start items-start flex-col w-full">
              {tableTitle.map((item, i) => (
                <CommonText
                  key={i}
                  className={`text-start w-full px-2 py-1.5 ${
                    i % 2 === 0 && "bg-gray-200"
                  }`}
                >
                  {item === "reference"
                    ? user.reference.userId || "-"
                    : user[item as keyof IUser]}
                </CommonText>
              ))}
              <ShareReferLink
                phoneNo={user.phone}
                btnText="Share"
                message=""
                userId={user.userId}
              />
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
    </main>
  );
};

export default Profile;
