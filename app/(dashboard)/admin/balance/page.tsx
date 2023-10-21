"use client";

import { Header } from "@/components";
import { useState } from "react";

import { BalanceManagement } from "@/components/Admin";
import { useGetData } from "@/hooks";
import { IAppConfig, INavItem } from "@/interface";
import { BackButton, Container } from "@/universal";

const adminNav: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Blance = () => {
  const [config, setConfig] = useState<IAppConfig>();
  useGetData("/config", setConfig, true);

  return (
    <main>
      <Header navData={adminNav} />

      <Container className="flex flex-col justify-center items-center">
        <BalanceManagement />
      </Container>
    </main>
  );
};

export default Blance;
