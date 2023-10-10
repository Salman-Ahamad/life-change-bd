"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

import { Header, Tost } from "@/components";
import {
  LiveEarningClass,
  LiveLearningClass,
  ReferenceMeetingLink,
  SupportLink,
  SupportTeam,
} from "@/components/User/Active";
import { updateData, useCurrentUser } from "@/hooks";
import { navData } from "@/lib/data";
import { Container } from "@/universal";

const Active = () => {
  const user = useCurrentUser();

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
      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 content-center w-fit  py-12 px-6 mx-auto">
        <SupportLink />
        <SupportTeam />
        <LiveEarningClass />
        <LiveLearningClass />
        <ReferenceMeetingLink />
      </Container>
    </main>
  );
};

export default Active;
