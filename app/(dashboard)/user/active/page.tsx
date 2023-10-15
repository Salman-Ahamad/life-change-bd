"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Header, Slider, Tost } from "@/components";
import {
  ActivePageCard,
  HelpLink,
  MeetingLink,
  SupportTeam,
} from "@/components/User/Active";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { navData } from "@/lib/data";
import { Container } from "@/universal";
import { IAppConfig } from "@/interface";

const Active = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const user = useCurrentUser();
  useGetData("/config", setConfig);

  useGetData("/config", setConfig);

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
      <Header navData={navData.active} />
      {user && !user.isVerified && (
        <Tost label="Verify Email Address and Get 5 Taka" btnText="verify" />
      )}
      <Container className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 w-full py-12 px-6 mx-auto">
        {config && (
          <div className="space-y-5">
            <HelpLink meetId={config.support.help} />
            <MeetingLink meetId={config.support.meeting} />
          </div>
        )}
        {config && <SupportTeam support={config.whatsAppMessage} />}
      </Container>
      <Container className="flex justify-center">
        <div className="max-w-lg w-full">
          {config?.sliderImage && (
            <ActivePageCard title="">
              <Slider slides={config?.sliderImage} />
            </ActivePageCard>
          )}
        </div>
      </Container>
      {/* <LiveEarningClass /> */}
      {/* <LiveLearningClass /> */}
    </main>
  );
};

export default Active;
