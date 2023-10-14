"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header } from "@/components";
import { updateData, useCurrentUser } from "@/hooks";
import { IEditProfile, ISlugParams } from "@/interface";
import { navData } from "@/lib";
import { Button, Container } from "@/universal";
import { InputField } from "@/components/Settings";
import Image from "next/image";

const Edit: NextPage<ISlugParams> = ({ params }) => {
  const { slug } = params;

  const [updatedData, setUpdatedData] = useState<IEditProfile>({});
  const [disabled, setDisabled] = useState(true);
  const user = useCurrentUser();

  useEffect(() => updatedData && setDisabled(false), [updatedData]);

  const updateProfile = () => updateData(`/user/${slug}`, updatedData);

  return (
    <main>
      <Header navData={navData.profileEdit} />

      <Container className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-10 text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <InputField
            label="First Name:"
            name="firstName"
            defaultValue={user && user.firstName}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, firstName: value }))
            }
          />
          <InputField
            label="Last Name:"
            name="lastName"
            defaultValue={user && user.lastName}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, lastName: value }))
            }
          />

          <InputField
            label="Email:"
            name="email"
            defaultValue={user && user.email}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, email: value }))
            }
          />
          <InputField
            label="Phone:"
            name="phone"
            defaultValue={user && user.phone}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, phone: value }))
            }
          />
          <InputField
            label="Whatsapp:"
            name="whatsapp"
            defaultValue={user && user.whatsapp}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, whatsapp: value }))
            }
          />
          <InputField
            label="Country:"
            name="country"
            defaultValue={user && user.country}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, country: value }))
            }
          />
          <InputField
            label="Language:"
            name="language"
            defaultValue={user && user.language}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, language: value }))
            }
          />
          <InputField
            label="Role:"
            name="role"
            defaultValue={user && user.role}
            onChange={(value) =>
              setUpdatedData((prev) => ({ ...prev, role: value }))
            }
          />
          <div className="flex gap-3">
            {user && (
              <Image
                src={user.image}
                width={80}
                height={80}
                alt={user.firstName}
                className="rounded-md"
              />
            )}
            <InputField
              label="Photo:"
              name="image"
              defaultValue={user && user.image}
              onChange={(value) =>
                setUpdatedData((prev) => ({ ...prev, image: value }))
              }
            />
          </div>
          <InputField
            label="Controller:"
            name="controller"
            defaultValue={user && user.settings.controller}
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
            defaultValue={user && user.settings.consultant}
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
            defaultValue={user && user.settings.teacher}
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
            defaultValue={user && user.settings.gl}
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
