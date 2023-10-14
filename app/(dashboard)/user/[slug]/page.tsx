"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { FileUploader, Header } from "@/components";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { IEditProfile, ISlugParams, IUser } from "@/interface";
import { avatar, avatarProfile, navData } from "@/lib";
import { Button, Container } from "@/universal";
import { InputField } from "@/components/Settings";
import Image from "next/image";

const Edit: NextPage<ISlugParams> = ({ params }) => {
  const { slug } = params;

  const [userData, setUserData] = useState<IUser>();
  const [userImage, setUserImage] = useState<string>("");
  const [updatedData, setUpdatedData] = useState<IEditProfile>({});
  const [disabled, setDisabled] = useState(true);
  const user = useCurrentUser();

  useEffect(() => updatedData && setDisabled(false), [updatedData]);
  // useEffect(() => {
  //   if (userImage.length > 0) {
  //     setUpdatedData((prev) => ({ ...prev, image: userImage }));
  //   }
  // }, [userImage]);

  const updateImage = () => {
    if (userImage.length > 0) {
      setUpdatedData((prev) => ({ ...prev, image: userImage }));
    }
  };

  useGetData(`/user/${slug}`, setUserData);
  const updateProfile = () => updateData(`/user/${slug}`, updatedData);

  return (
    <main>
      <Header navData={navData.profileEdit} />

      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5 pb-8">
          <div className="flex gap-3">
            {userData && (
              <Image
                src={userData.image || avatarProfile}
                width={80}
                height={80}
                alt={userData.firstName}
                className="rounded-full"
              />
            )}
            <FileUploader
              fileType="image/png, image/jpeg, image/jpg, image/gif"
              setFileUrl={setUserImage}
              updateImage={updateImage}
            />
            {/* <InputField
              label="Photo:"
              name="image"
              defaultValue={(userData && userData.image) || ""}
              onChange={(value) =>
                setUpdatedData((prev) => ({ ...prev, image: value }))
              }
            /> */}
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
            label="Country:"
            name="country"
            defaultValue={(userData && userData.country) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, country: value }))
            }
          />
          <InputField
            label="Language:"
            name="language"
            defaultValue={(userData && userData.language) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, language: value }))
            }
          />
          <InputField
            label="Role:"
            name="role"
            defaultValue={(userData && userData.role) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, role: value }))
            }
          />

          <InputField
            label="Controller:"
            name="controller"
            defaultValue={(userData && userData.settings.controller) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                settings: {
                  controller: value,
                },
              }))
            }
          />
          <InputField
            label="Consultant:"
            name="consultant"
            defaultValue={(userData && userData.settings.consultant) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                settings: {
                  consultant: value,
                },
              }))
            }
          />
          <InputField
            label="Teacher:"
            name="teacher"
            defaultValue={(userData && userData.settings.teacher) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                settings: {
                  teacher: value,
                },
              }))
            }
          />
          <InputField
            label="Group Leader:"
            name="gl"
            defaultValue={(userData && userData.settings.gl) || ""}
            onChange={(value) =>
              setUpdatedData((prev) => ({
                ...prev,
                settings: {
                  gl: value,
                },
              }))
            }
          />
          {/* <InputField
            label="xxx:"
            name="xxx"
            defaultValue={user && user.xxx}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, xxx: value }))
            }
          /> */}

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
