"use client";

import { Header } from "@/components";
import { ChangeBaseFee } from "@/components/Settings";
import { useCurrentUser } from "@/hooks";
import { UserRole, navData } from "@/lib";
import { Container, Title } from "@/universal";
import { NextPage } from "next";

const Settings: NextPage = () => {
  const user = useCurrentUser();

  return (
    <main>
      <Header navData={navData.settings} />

      <Title variant="H2" className="py-8 capitalize">
        Settings
      </Title>
      <Container>
        {user?.role === UserRole.admin && <ChangeBaseFee />}
      </Container>
    </main>
  );
};

export default Settings;
