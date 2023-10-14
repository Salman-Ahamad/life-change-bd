"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { FileUploader, Header } from "@/components";
import { InputField } from "@/components/Settings";
import { updateData, useGetData } from "@/hooks";
import { ISlugParams, IUser, IUserRole } from "@/interface";
import { UserRole, avatarProfile, navData } from "@/lib";
import { Button, Container } from "@/universal";
import Image from "next/image";

const Edit: NextPage<ISlugParams> = ({ params }) => {
  const { slug } = params;

  const [userData, setUserData] = useState<IUser>();
  const [userImage, setUserImage] = useState<string>(userData?.image as string);
  const [updatedData, setUpdatedData] = useState<object>({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => userData && setDisabled(false), [userData]);

  useGetData(`/user/${slug}`, setUserData);
  const updateProfile = () => {
    console.log("🚀 ~ file: page.tsx:27 ~ updatedData:", updatedData);
    updateData(`/user/${slug}`, updatedData);
  };

  return (
    <main>
      <Header navData={navData.profileEdit} />
      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5 pb-8">
          <div className="flex gap-3">
            {
              <Image
                src={userImage || userData?.image || avatarProfile}
                width={80}
                height={80}
                alt={userData?.firstName || ""}
                className="rounded-full w-[80px] h-[80px]"
              />
            }
            <FileUploader
              fileType="image/png, image/jpeg, image/jpg, image/gif"
              setFileUrl={setUserImage}
              className="p-0 pb-8 max-w-none lg:max-w-xs"
              setUpdatedData={setUpdatedData}
            />
          </div>

          <InputField
            label="First Name:"
            name="firstName"
            defaultValue={(userData && userData.firstName) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, firstName: value }))
            }
          />
          <InputField
            label="Last Name:"
            name="lastName"
            defaultValue={(userData && userData.lastName) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, lastName: value }))
            }
          />

          <InputField
            label="Email:"
            name="email"
            defaultValue={(userData && userData.email) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, email: value }))
            }
          />
          <InputField
            label="Phone:"
            name="phone"
            defaultValue={(userData && userData.phone) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, phone: value }))
            }
          />
          <InputField
            label="Whatsapp:"
            name="whatsapp"
            defaultValue={(userData && userData.whatsapp) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, whatsapp: value }))
            }
          />

          <InputField
            label="Role:"
            name="role"
            selectOption={[
              UserRole.controller,
              UserRole.consultant,
              UserRole.teacher,
              UserRole.gl,
              UserRole.active,
              UserRole.inactive,
            ]}
            defaultValue={(userData && userData.role) || ""}
            onChange={(value: IUserRole) =>
              setUpdatedData((prev) => ({ ...prev, role: value }))
            }
          />

          <InputField
            label="Controller:"
            name="controller"
            defaultValue={(userData && userData.settings?.controller?.id) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.controller": value,
              }))
            }
          />
          <InputField
            label="Consultant:"
            name="consultant"
            defaultValue={(userData && userData.settings?.consultant?.id) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.consultant": value,
              }))
            }
          />
          <InputField
            label="Teacher:"
            name="teacher"
            defaultValue={(userData && userData.settings?.teacher?.id) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                "settings.teacher": value,
              }))
            }
          />
          <InputField
            label="Group Leader:"
            name="gl"
            defaultValue={(userData && userData.settings?.gl?.id) || ""}
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
        </div>
      </Container>
    </main>
  );
};

export default Edit;
