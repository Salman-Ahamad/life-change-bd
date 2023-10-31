"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Header, Slider, Tost } from "@/components";
import {
  HelpLink,
  LiveLearningClass,
  MeetingLink,
  SupportTeam,
} from "@/components/User/Active";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig, INavItem, ISlider } from "@/interface";
import { Container, Title } from "@/universal";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/active",
  },
  {
    label: "Profile",
    link: "/active/user/profile",
  },
  {
    label: "Courses",
    link: "/active/courses",
  },
  {
    label: "References",
    link: "/active/ref-list",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
  // {
  //   label: "Video Zone",
  //   link: "/active/video-zone",
  // },
];

const Active = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const [sliders, setSliders] = useState<ISlider[]>();

  const user = useCurrentUser(true);
  useGetData("/config", setConfig, true);
  useGetData("/config/slider", setSliders, true);

  useEffect(() => {
    if (user?.settings.activeNotice) {
      toast.info("You are an active Seller 🏅, well done!✅", {
        autoClose: 5000,
      });
      toast.warn(
        "Don't share your personal information with anyone even our employees and Student's and Seller and also don't share your personal information on any post Like phone number password and any kind of OTP.",
        {
          autoClose: 15000,
          delay: 5000,
          theme: "colored",
        }
      );
      toast("🎥 Any kind of problem join here for solution", {
        autoClose: 10000,
        delay: 20000,
      });
      updateData("/user", { "settings.activeNotice": false }, true);
    }
  }, [user?.settings.activeNotice]);

  return (
    <main>
      <Header navData={navData} />
      {user && !user.isVerified && (
        <Tost label="Verify Email Address" btnText="verify" />
      )}

      <div className="max-w-lg w-full mx-auto py-6 flex flex-col justify-center">
        <Title variant="H3">Welcome to Life Change Bd</Title>
        {sliders && sliders.length !== 0 && <Slider slides={sliders} />}
      </div>
      <Container className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 w-full py-12 px-6 mx-auto">
        {config && (
          <div className="space-y-5">
            <HelpLink meetId={config.support.help} />
            <MeetingLink
              meetId={config.support.meeting}
              title="Life Change BD Support Meeting"
            />
          </div>
        )}
        {config && <SupportTeam support={config.support.whatsApp} />}
      </Container>

      <Container className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 w-full py-12 px-6 mx-auto">
        {/* TODO: Add course ive link list */}
        <LiveLearningClass />
      </Container>
    </main>
  );
};

export default Active;
