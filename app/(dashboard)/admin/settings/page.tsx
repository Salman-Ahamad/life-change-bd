"use client";

import { Header } from "@/components";
import { ChangeBaseFee } from "@/components/Settings";
import { ChangeHelpLink } from "@/components/Settings/ChangeHelpLink";
import { ChangeSupportLink } from "@/components/Settings/ChangeSupportLink";
import { useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig, INavItem } from "@/interface";
import { UserRole } from "@/lib";
import { BackButton, Container, Title } from "@/universal";
import { NextPage } from "next";
import { useState } from "react";

const adminNav: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

const Settings: NextPage = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const user = useCurrentUser(true);
  useGetData("/config", setConfig, true);

  // https://chat.whatsapp.com/HO9jwt1dkPiEqOffAJLgmF

  return (
    <main>
      <Header navData={adminNav} />

      <Title variant="H2" className="py-8 capitalize">
        Settings
      </Title>
      <Container>
        {user?.role === UserRole.admin && (
          <div className="flex flex-col gap-5 w-96 justify-center items-center mx-auto">
            <ChangeBaseFee currentBaseFee={config ? config.baseFee : 0} />
            <ChangeSupportLink
              meeting={config ? config?.support?.meeting : ""}
              whatsApp={config ? config?.support?.whatsApp : ""}
            />
            <ChangeHelpLink help={config ? config?.support?.help : ""} />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Settings;
