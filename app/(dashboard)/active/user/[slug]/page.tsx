"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { FileUploader, Header } from "@/components";
import { InputField } from "@/components/Settings";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { INavItem, ISlugParams, IUser, IUserRole } from "@/interface";
import { UserRole, avatarProfile } from "@/lib";
import { BackButton, Button, Container, Title } from "@/universal";
import Image from "next/image";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Edit: NextPage<ISlugParams> = ({ params }) => {
  const { slug } = params;

  const [userData, setUserData] = useState<IUser>();
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [userImage, setUserImage] = useState<string>(userData?.image as string);
  const [updatedData, setUpdatedData] = useState<object>({});
  const [disabled, setDisabled] = useState(true);

  const user = useCurrentUser(true);
  useGetData(`/user/${slug}`, setUserData, true);

  const admin = [
    UserRole.controller,
    UserRole.consultant,
    UserRole.teacher,
    UserRole.gl,
    UserRole.active,
    UserRole.inactive,
  ];
  const controller = [
    UserRole.consultant,
    UserRole.teacher,
    UserRole.gl,
    UserRole.active,
    UserRole.inactive,
  ];
  const consultant = [UserRole.teacher, UserRole.gl];

  const selectOption =
    (user?.role === UserRole.admin && admin) ||
    (user?.role === UserRole.controller && controller) ||
    (user?.role === UserRole.consultant && consultant) ||
    [];

  useEffect(() => userData && setDisabled(false), [userData]);
  const updateProfile = () => updateData(`/user/${slug}`, updatedData);

  const depositMoney = () => {
    if (user && depositAmount > 0) {
      updateData(`/user/deposit/`, {
        id: slug,
        depositAmount: Number(depositAmount),
      });
    }
  };

  return (
    <main>
      <Header navData={navData} />
      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5 pb-8">
          <div className="flex gap-3 pb-8 ">
            <Image
              src={userImage || userData?.image || avatarProfile}
              width={80}
              height={80}
              alt={userData?.firstName || ""}
              className="rounded-full w-[80px] h-[80px]"
            />

            {user?.role === UserRole.admin && (
              <FileUploader
                fileType="image/png, image/jpeg, image/jpg, image/gif"
                setFileUrl={setUserImage}
                className="p-0 max-w-none lg:max-w-xs"
                setUpdatedData={setUpdatedData}
              />
            )}
          </div>

          <InputField
            onlyText={user?.role !== UserRole.admin}
            label="First Name:"
            name="firstName"
            defaultValue={(userData && userData.firstName) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, firstName: value }))
            }
          />
          <InputField
            onlyText={user?.role !== UserRole.admin}
            label="Last Name:"
            name="lastName"
            defaultValue={(userData && userData.lastName) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, lastName: value }))
            }
          />

          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            label="Email:"
            name="email"
            defaultValue={(userData && userData.email) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, email: value }))
            }
          />
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            label="Phone:"
            name="phone"
            defaultValue={(userData && userData.phone) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, phone: value }))
            }
          />
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            label="Whatsapp:"
            name="whatsapp"
            defaultValue={(userData && userData.whatsapp) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, whatsapp: value }))
            }
          />

          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            name="role"
            label="Role:"
            selectOption={selectOption}
            defaultValue={(userData && userData.role) || ""}
            onChange={(value: IUserRole) =>
              setUpdatedData((prev) => ({ ...prev, role: value }))
            }
          />

          <InputField
            onlyText={user?.role !== UserRole.admin}
            label="Controller:"
            name="controller"
            defaultValue={(userData && userData.settings?.controller) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.controller": value,
              }))
            }
          />
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            label="Consultant:"
            name="consultant"
            defaultValue={(userData && userData.settings?.consultant) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.consultant": value,
              }))
            }
          />
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller &&
              user?.role !== UserRole.consultant
            }
            label="Teacher:"
            name="teacher"
            defaultValue={(userData && userData.settings?.teacher) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.teacher": value,
              }))
            }
          />
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller &&
              user?.role !== UserRole.consultant
            }
            label="Group Leader:"
            name="gl"
            defaultValue={(userData && userData.settings?.gl) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.gl": value,
              }))
            }
          />

          <Button
            variant="secondary"
            className="capitalize mt-5 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            onClick={updateProfile}
            disabled={disabled}
          >
            update profile
          </Button>

          <Title variant="H4" className="capitalize">
            Deposit Money
          </Title>
          <InputField
            onlyText={
              user?.role !== UserRole.admin &&
              user?.role !== UserRole.controller
            }
            label="Deposit:"
            name="deposit"
            defaultValue=""
            onChange={(value) => setDepositAmount(value)}
          />
          <Button
            variant="secondary"
            className="capitalize mt-5 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            onClick={depositMoney}
            disabled={disabled}
          >
            Deposit
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Edit;
