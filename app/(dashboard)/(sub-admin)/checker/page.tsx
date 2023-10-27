"use client";

import { Header } from "@/components";
import { ChangeMeetingLink } from "@/components/SubAdmin/ChangeMeetingLink";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { INavItem } from "@/interface";
import { Button, Container, Title } from "@/universal";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/checker",
  },
  {
    label: "Profile",
    link: "/checker/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const [welcomeMeetLink, setWelcomeMeetLink] = useState<string>("");
  const [configMeetLink, setConfigMeetLink] = useState<any>();

  const user = useCurrentUser(true);

  useGetData("config/welcome-class", setConfigMeetLink, true);

  const handleChangeMeetingLink = () => {
    updateData("config/welcome-class", { meetLink: welcomeMeetLink }).then(() =>
      window.location.reload()
    );
  };

  return (
    <main>
      <Header navData={navData} />

      <div className="max-w-lg w-full mx-auto py-6 flex flex-col justify-center">
        <Title variant="H3">Welcome to Life Change Bd</Title>
      </div>

      <Container className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 w-full py-12 px-6 mx-auto">
        <div className="flex items-end justify-center">
          <div className="flex flex-col gap-1">
            <p className="pb-12">
              Current Welcome Class Link:&nbsp;
              <span className="font-semibold">
                {configMeetLink?.support.welcomeClass
                  ? configMeetLink?.support.welcomeClass
                  : welcomeMeetLink}
              </span>
            </p>
            <label className="pl-1.5">Please enter meet ID</label>
            <div className="flex gap-2.5">
              <input
                type="text"
                onChange={(e) => setWelcomeMeetLink(e.target.value)}
                className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
              />
              <Button
                variant="secondary"
                className="py-[7px] lg:py-2.5 px-3"
                onClick={() => {
                  handleChangeMeetingLink();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>

        {user?.settings?.course ? (
          <ChangeMeetingLink courseSlug={user?.settings?.course} />
        ) : (
          <p>No course is assigned!</p>
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
