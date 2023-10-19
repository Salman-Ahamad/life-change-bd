"use client";

import { Header } from "@/components";
import { ChangeBaseFee } from "@/components/Settings";
import { ChangeHelpLink } from "@/components/Settings/ChangeHelpLink";
import { ChangeSupportLink } from "@/components/Settings/ChangeSupportLink";
import { useCurrentUser } from "@/hooks";
import { INavItem } from "@/interface";
import { UserRole } from "@/lib";
import { BackButton, Container, Title } from "@/universal";
import { NextPage } from "next";

const adminNav: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

const Settings: NextPage = () => {
  const user = useCurrentUser(true);

  return (
    <main>
      <Header navData={adminNav} />

      <Title variant="H2" className="py-8 capitalize">
        Settings
      </Title>
      <Container>
        {user?.role === UserRole.admin && (
          <div className="flex flex-col gap-5 w-80 justify-center items-center mx-auto">
            <ChangeBaseFee />
            <ChangeSupportLink />
            <ChangeHelpLink />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Settings;
