"use client";

import { Header } from "@/components";
import { ChangeBaseFee, LiveCourseLink } from "@/components/Settings";
import { ChangeHelpLink } from "@/components/Settings/ChangeHelpLink";
import { ChangeSupportLink } from "@/components/Settings/ChangeSupportLink";
import { useCurrentUser } from "@/hooks";
import { UserRole, navData } from "@/lib";
import { Container, Title } from "@/universal";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const Settings: NextPage = () => {
  const user = useCurrentUser();

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/user/active");
  }

  return (
    <main>
      <Header navData={navData.settings} />

      <Title variant="H2" className="py-8 capitalize">
        Settings
      </Title>
      <Container>
        {user?.role === UserRole.admin && (
          <div className="flex flex-col gap-5 w-80 justify-center items-center mx-auto">
            <ChangeBaseFee />
            <ChangeSupportLink />
            <ChangeHelpLink />
            <LiveCourseLink />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Settings;
